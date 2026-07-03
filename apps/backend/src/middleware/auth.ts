import { verifyToken } from "@clerk/backend";
import { Request, Response, NextFunction } from "express";

const clerkSecretKey = process.env.CLERK_SECRET_KEY || process.env.NEXT_PUBLIC_CLERK_SECRET_KEY;

export interface AuthRequest extends Request {
  auth?: {
    userId: string | null;
  };
}

export async function requireAuth(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  // If Clerk secret is not defined, bypass authentication for dev mode
  if (!clerkSecretKey) {
    req.auth = { userId: "mock-user-dev" };
    return next();
  }

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized: Missing token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const verified = await verifyToken(token, { secretKey: clerkSecretKey });
    req.auth = { userId: verified.sub };
    next();
  } catch (error) {
    console.error("Clerk token verification failed:", error);
    return res.status(401).json({ error: "Unauthorized: Invalid or expired token" });
  }
}
