import Image from "next/image";
import camLogo from "../public/logo.png";
import camFullLogo from "../public/CAM1.png";
import { NavigationMenuDemo } from "../components/navmenu";
// import FlipWordsDemo from "../components/flipwords";
import { ModeToggle } from "../components/ui/lnd";
// import { FloatingDockDemo } from "../components/floatingDock";
import { StickyScrollRevealDemo } from "../components/stickyScroll";
import { HeroHighlightDemo } from "../components/hero";

export default function Home() {
  return (
    <>
      <nav className="">
        <span className="pt-4 exclude:pt-14 exclude:items-center exclude:justify-center ">
          <NavigationMenuDemo />
        </span>
      </nav>
      {/* =================body section================= */}
      <main className="">
        {/* <FlipWordsDemo /> */}
        <HeroHighlightDemo />
      </main>
      <div className="fixed bottom-[10rem] right-[6rem]">
        <aside className="">{/* <FloatingDockDemo /> */}</aside>
      </div>
      <div className=" flex items-center justify-center">
        <StickyScrollRevealDemo />
      </div>
      <div></div>
    </>
  );
}
