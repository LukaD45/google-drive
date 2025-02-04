import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen">
      SIDEBAR
      <section className="flex h-full flex-1 flex-col">
        Mobile navigation ž Header
        <div className="main-content">{children}</div>
      </section>
    </main>
  );
};

export default RootLayout;
