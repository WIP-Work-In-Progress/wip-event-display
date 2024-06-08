import Header from "@/components/core/header";
import { ReactNode } from "react";

interface GlobalLayoutProps {
  children: ReactNode;
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
