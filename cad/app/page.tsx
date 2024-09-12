import Image from "next/image";
import camLogo from "../public/logo.png";
import { NavigationMenuDemo } from "../components/navmenu";
import FlipWordsDemo from "../components/flipwords";
import { ModeToggle } from "../components/ui/lnd";
// import { FloatingDockDemo } from "../components/floatingDock";
import { StickyScrollRevealDemo } from "../components/stickyScroll";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="pt-4 flex exclude:items-center exclude:justify-center ">
        <span className="pr-4 mobile:justify-start mobile:pl-10 mobile:pt-5 ">
          <Image
            src={camLogo}
            width={90}
            height={90}
            alt="camLogo"
            priority={false}
            layout="none"
            objectFit="cover"
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
      <main className="">
        <FlipWordsDemo />
      </main>
      <div className="fixed bottom-[10rem] right-[6rem]">
        <aside className="">{/* <FloatingDockDemo /> */}</aside>
      </div>
      <div className=" flex items-center justify-center">
        <StickyScrollRevealDemo />
      </div>
    </>
  );
}
