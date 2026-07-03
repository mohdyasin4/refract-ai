import { NextResponse } from "next/server";
import config from "./config";

let clerkMiddleware: any, createRouteMatcher: any;

if (config.auth.enabled) {
  try {
    ({ clerkMiddleware, createRouteMatcher } = require("@clerk/nextjs/server"));
  } catch (error) {
    console.warn("Clerk modules not available. Auth will be disabled.");
    config.auth.enabled = false;
  }
}

const isProtectedRoute = config.auth.enabled
  ? createRouteMatcher(["/dashboard(.*)"])
  : () => false;

export default async function middleware(req: any) {
  const url = req.nextUrl.pathname;
  const backendBaseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  // Reverse proxy API routes to the standalone Express backend
  if (url.startsWith("/api/") && !url.startsWith("/api/auth/webhook") && !url.startsWith("/api/webhooks/")) {
    let token = null;

    if (config.auth.enabled && clerkMiddleware) {
      try {
        const { auth } = require("@clerk/nextjs/server");
        const authObj = await auth();
        if (authObj.userId) {
          token = await authObj.getToken();
        }
      } catch (err) {
        console.error("Failed to retrieve Clerk token in middleware:", err);
      }
    }

    const requestHeaders = new Headers(req.headers);
    if (token) {
      requestHeaders.set("Authorization", `Bearer ${token}`);
    }

    const backendUrl = new URL(
      `${backendBaseUrl}${req.nextUrl.pathname}${req.nextUrl.search}`
    );

    return NextResponse.rewrite(backendUrl, {
      request: {
        headers: requestHeaders,
      },
    });
  }

  // Fallback for standard auth protections
  if (config.auth.enabled && clerkMiddleware) {
    return await clerkMiddleware(async (auth: any, req: any) => {
      const authObj = await auth();
      if (!authObj.userId && isProtectedRoute(req)) {
        const signInUrl = new URL("/sign-in", req.url);
        signInUrl.searchParams.set("redirect_url", req.nextUrl.pathname);
        return NextResponse.redirect(signInUrl);
      } else {
        return NextResponse.next();
      }
    })(req);
  } else {
    return NextResponse.next();
  }
}

export const middlewareConfig = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};