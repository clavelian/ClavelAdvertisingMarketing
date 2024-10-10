import { TabsDemo } from "./sampleTab";
import { NavigationMenuDemo } from "@/components/navbar/navmenu";

const Samples = () => {
  return (
    <>
      <nav className="exclude:py-4">
        <span className="pt-4 exclude:pt-14 exclude:items-center exclude:justify-center ">
          <NavigationMenuDemo />
        </span>
      </nav>
      <TabsDemo />
    </>
  );
};

export default Samples;
