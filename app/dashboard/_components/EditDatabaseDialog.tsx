import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { supabaseClient } from "@/lib/supabaseClient"; // Adjust the import based on your structure

interface EditDatabaseDialogProps {
  isOpen: boolean;
  onClose: () => void;
  databaseId: number;
  initialData: {
    connectionName: string;
    databaseName: string;
    databaseType: string;
    host: string;
    port?: number | null;
    username: string;
    password: string;
  };
}

const EditDatabaseDialog: React.FC<EditDatabaseDialogProps> = ({
  isOpen,
  onClose,
  databaseId,
  initialData,
}) => {
  const [connectionName, setConnectionName] = useState(initialData.connectionName);
  const [databaseName, setDatabaseName] = useState(initialData.databaseName);
  const [databaseType, setDatabaseType] = useState(initialData.databaseType);
  const [host, setHost] = useState(initialData.host);
  const [port, setPort] = useState<number | string>(initialData.port ?? "");
  const [username, setUsername] = useState(initialData.username);
  const [password, setPassword] = useState(initialData.password);

  const handleUpdate = async () => {
    const { error } = await supabaseClient
      .from("database_connections")
      .update({
        connection_name: connectionName,
        database_name: databaseName,
        database_type: databaseType,
        host,
        port: port === "" ? null : Number(port),
        username,
        password,
      })
      .eq("id", databaseId);

    if (error) {
      console.error("Error updating database connection:", error);
    } else {
      onClose(); // Close the dialog after successful update
    }
  };

  useEffect(() => {
    setConnectionName(initialData.connectionName);
    setDatabaseName(initialData.databaseName);
    setDatabaseType(initialData.databaseType);
    setHost(initialData.host);
    setPort(initialData.port ?? "");
    setUsername(initialData.username);
    setPassword(initialData.password);
  }, [initialData]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <div className="fixed inset-0 flex items-center justify-center">
        <DialogContent className="bg-background rounded p-6">
          <DialogTitle className="text-lg font-bold">Edit Database Connection</DialogTitle>
          <div className="mt-4">
            <label>
              Connection Name
              <input
                type="text"
                value={connectionName}
                onChange={(e) => setConnectionName(e.target.value)}
                className="border p-2 w-full"
              />
            </label>
            <label>
              Database Name
              <input
                type="text"
                value={databaseName}
                onChange={(e) => setDatabaseName(e.target.value)}
                className="border p-2 w-full mt-2"
              />
            </label>
            <label>
              Database Type
              <input
                type="text"
                value={databaseType}
                onChange={(e) => setDatabaseType(e.target.value)}
                className="border p-2 w-full mt-2"
              />
            </label>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="col-span-2">
                <label className="block text-sm font-medium">
                  Host
                  <input
                    type="text"
                    value={host}
                    onChange={(e) => setHost(e.target.value)}
                    className="border p-2 w-full mt-1"
                  />
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Port
                  <input
                    type="number"
                    value={port}
                    onChange={(e) => setPort(e.target.value)}
                    className="border p-2 w-full mt-1"
                    placeholder="Port"
                  />
                </label>
              </div>
            </div>
            <label>
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border p-2 w-full mt-2"
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 w-full mt-2"
              />
            </label>
            <div className="mt-4">
              <button
                onClick={handleUpdate}
                className="bg-[#ffcc19] text-white px-4 py-2 rounded"
              >
                Update
              </button>
              <button
                onClick={onClose}
                className="bg-gray-300 text-black px-4 py-2 rounded ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default EditDatabaseDialog;
