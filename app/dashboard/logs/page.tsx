"use client";

import React from "react";
import { Terminal, Shield } from "lucide-react";

export default function LogsPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6 text-foreground">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
          <Terminal size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">System Audit Logs</h1>
          <p className="text-sm text-muted-foreground">
            Real-time tracking of database connections, queries, and AI agent activities.
          </p>
        </div>
      </div>
      
      <div className="border border-border rounded-xl bg-card p-12 text-center flex flex-col items-center justify-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <Shield size={24} />
        </div>
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">No logs recorded yet</h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Once you connect a database and execute AI-powered queries, audit trails and executions will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}
