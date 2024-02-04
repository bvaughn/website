import { PropsWithChildren } from "react";

export function Main({ children }: PropsWithChildren<{}>) {
  return (
    <main className="h-svh max-h-svh overflow-y-auto w-full">
      <div className="p-4 max-w-screen-lg">{children}</div>
    </main>
  );
}
