import Image from "next/image";
import camLogo from "../public/logo.png";
import camFullLogo from "../public/CAM1.png";
import { NavigationMenuDemo } from "../components/navmenu";
// import FlipWordsDemo from "../components/flipwords";
import { ModeToggle } from "../components/ui/lnd";
// import { FloatingDockDemo } from "../components/floatingDock";
import { StickyScrollRevealDemo } from "../components/stickyScroll";

export default function Home() {
  return (
    <>
      <nav className="pt-4 exclude:pt-14 flex exclude:items-center exclude:justify-center ">
        <span className="pr-6 mobile:justify-start mobile:pl-10 mobile:pt-5 ">
          <Image
            src={camLogo}
            width={75}
            height={75}
            alt="camLogo"
            priority={false}
            layout="none"
            className="exclude:hidden"
          />
          <Image
            src={camFullLogo}
            width={150}
            height={150}
            alt="camLogo"
            priority={false}
            layout="none"
            className="mobile:hidden"
          />
        </span>
        <span className="mobile:hidden ">
          <NavigationMenuDemo />
        </span>
        <span className="exclude:pl-2 mobile:absolute mobile:right-10 mobile:top-14">
          <ModeToggle />
        </span>

        {/* =================body section================= */}
      </nav>
      <main className="">{/* <FlipWordsDemo /> */}</main>
      <div className="fixed bottom-[10rem] right-[6rem]">
        <aside className="">{/* <FloatingDockDemo /> */}</aside>
      </div>
      <div className=" flex items-center justify-center">
        <StickyScrollRevealDemo />
      </div>
    </>
  );
}
