import Image from "next/image";
import { NavigationMenuDemo } from "../components/navmenu";
// import FlipWordsDemo from "../components/flipwords";
import { StickyScrollRevealDemo } from "../components/stickyScroll";
import { HeroHighlightDemo } from "../components/hero";
import { AnimatedModalDemo } from "@/components/animeModal";

export default function Home() {
  return (
    <>
      <nav className="exclude:py-4">
        <span className="pt-4 exclude:pt-14 exclude:items-center exclude:justify-center ">
          <NavigationMenuDemo />
        </span>
      </nav>

      {/* =================body section================= */}
      <main className="h-[55rem]">
        <HeroHighlightDemo />
      </main>
      <div className="fixed bottom-[10rem] right-[6rem]">
        <aside className=""></aside>
      </div>
      <div className=" flex items-center justify-center">
        <StickyScrollRevealDemo />
      </div>
    </>
  );
}
