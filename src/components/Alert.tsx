import { ReactNode } from "react";

export function Alert({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-md shadow-md">
      <p className="font-medium">{children}</p>
    </div>
  );
}
