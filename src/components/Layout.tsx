import { useState } from "react";
import { Footer, Header, Main, Sidebar } from ".";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <Main>{children}</Main>
      {isSidebarOpen && <Sidebar setIsSidebarOpen={setIsSidebarOpen} />}
      <Footer />
    </div>
  );
}
