import { TabsDemo } from "./sampleTab";
import { NavigationMenuDemo } from "@/components/navbar/navmenu";
import Footer from "@/components/footer";

const Samples = () => {
  return (
    <>
      <nav className="exclude:py-4">
        <span className="pt-4 exclude:pt-14 exclude:items-center exclude:justify-center ">
          <NavigationMenuDemo />
        </span>
      </nav>
      <TabsDemo />
      <footer className="w-full absolute -bottom-full">
        <Footer />
      </footer>
    </>
  );
};

export default Samples;
