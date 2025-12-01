import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AnnouncementTicker from "../common/AnnoucementTicker";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="fixed top-24 md:top-28 lg:top-32 left-0 right-0 z-40 pointer-events-none">
        <div className="pointer-events-auto">
          <AnnouncementTicker />
        </div>
      </div>
      <div className=" flex-grow">
        <main className="">{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
