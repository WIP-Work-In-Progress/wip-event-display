import Header from "@/components/core/header";
import Footer from "./components/core/footer";
import { ReactNode } from "react";

interface GlobalLayoutProps {
  children: ReactNode;
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <div>
      <Header />
      <div className="mx-4">{children}</div>
      <Footer />
    </div>
  );
}
