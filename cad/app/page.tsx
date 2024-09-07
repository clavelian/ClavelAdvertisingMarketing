import Image from "next/image";
import camLogo from "../public/logo.png";
import { NavigationMenuDemo } from "../components/navmenu";
import FlipWordsDemo from "../components/flipwords";
import { ModeToggle } from "../components/ui/lnd";
import { FloatingDockDemo } from "../components/floatingDock";

export default function Home() {
  return (
    <>
      <nav className="pt-4 flex exclude:items-center exclude:justify-center mobile:justify-center">
        <span className="pr-3">
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
      <div className="w-[100vh]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur sed
        blanditiis assumenda temporibus officia impedit atque aliquam cumque
        mollitia minima error, at fugit corporis dolorem ad veritatis commodi.
        At, omnis.
      </div>
    </>
  );
}
