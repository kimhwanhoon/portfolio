import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import { Logo } from "@/lib/Logo";
import { EmptySpace } from "../global/EmptySpace";

export const Header = () => {
  return (
    <>
      <EmptySpace key={"header empty space"} height={70} />
      <header
        id="header"
        className="fixed top-0 z-50 w-full bg-[#ffffffee] shadow-lg shadow-gray-200"
      >
        <div className="flex items-center justify-between p-4">
          <Logo key="header logo" color="#030712" />
          <Nav />
          <MobileNav />
        </div>
      </header>
    </>
  );
};
