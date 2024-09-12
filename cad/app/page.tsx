import Image from "next/image";
import camLogo from "../public/logo.png";
import { NavigationMenuDemo } from "../components/navmenu";
import FlipWordsDemo from "../components/flipwords";
import { ModeToggle } from "../components/ui/lnd";
import { FloatingDockDemo } from "../components/floatingDock";
import { StickyScrollRevealDemo } from "../components/stickyScroll";

export default function Home() {
  return (
    <>
<<<<<<< Updated upstream
      <nav className="pt-4 flex exclude:items-center exclude:justify-center mobile:justify-center">
        <span className="pr-3">
=======
      <nav className="py-6 flex exclude:items-center exclude:justify-center bg-white ">
        <span className="mobile:absolute mobile:top-[-30px]">
>>>>>>> Stashed changes
          <Image
            src={camLogo}
            width={100}
            height={100}
            alt="camLogo"
            priority={false}
          />
        </span>
        <span className="mobile:hidden ">
          <NavigationMenuDemo />
        </span>
        <span className="exclude:pl-2 right-7 mobile:hidden">
          <ModeToggle />
        </span>

        {/* =================body section================= */}
      </nav>
      <main>
        <FlipWordsDemo />
      </main>
      <div className="fixed bottom-[10rem] right-[6rem]">
        <aside className="">
          <FloatingDockDemo />
        </aside>
      </div>
      <div className=" flex items-center justify-center">
        <StickyScrollRevealDemo />
      </div>
    </>
  );
}
