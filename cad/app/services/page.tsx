import { NavigationMenuDemo } from "@/components/navbar/navmenu";
import Footer from "@/components/footer";
import { TimelineDemo } from "./timeline";

const Service = () => {
  return (
    <>
      <nav className="exclude:py-4">
        <span className="pt-4 exclude:pt-14 exclude:items-center exclude:justify-center ">
          <NavigationMenuDemo />
        </span>
      </nav>
      <main className="px-4">
        <TimelineDemo />
      </main>
      <footer className="">
        <Footer />
      </footer>
    </>
  );
};

export default Service;
