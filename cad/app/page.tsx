import Image from "next/image";
import { NavigationMenuDemo } from "../components/navbar/navmenu";
// import FlipWordsDemo from "../components/flipwords";
import { StickyScrollRevealDemo } from "@/components/mainPage/stickyScroll";
import Footer from "@/components/footer";
import { VortexDemoSecond } from "@/components/mainPage/vortex";

export default function Home() {
  return (
    <>
      {/* <nav className="exclude:py-4">
        <span className="pt-4 exclude:pt-14 exclude:items-center exclude:justify-center ">
          <NavigationMenuDemo />
        </span>
      </nav> */}

      {/* =================body section================= */}
      <main className="h-full">
        <VortexDemoSecond />
      </main>
      <div className="fixed bottom-[10rem] right-[6rem]">
        <aside className=""></aside>
      </div>
      <div className=" flex items-center justify-center"></div>
      <footer className="w-full fixed bottom-0">
        <Footer />
      </footer>
    </>
  );
}
