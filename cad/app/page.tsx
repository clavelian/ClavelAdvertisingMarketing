import Image from "next/image";
import camLogo from "../public/cam-logo.png";
import { NavigationMenuDemo } from "../components/navmenu";
import FlipWordsDemo from "../components/flipwords";
import { ModeToggle } from "../components/ui/lnd";
import { FloatingDockDemo } from "../components/floatingDock";

export default function Home() {
  return (
    <>
      <nav className="py-6 flex exclude:items-center exclude:justify-center bg-white ">
        <span className="">
          <Image
            src={camLogo}
            width={200}
            height={200}
            alt="camLogo"
            priority={false}
            className=""
          />
        </span>
        <span className="mobile:hidden">
          <NavigationMenuDemo />
        </span>
        <span className="exclude:pl-2 mobile:absolute right-7">
          <ModeToggle />
        </span>

        {/* =================body section================= */}
      </nav>
      <main>
        <FlipWordsDemo />
      </main>
      <aside>
        <FloatingDockDemo />
      </aside>
    </>
  );
}
