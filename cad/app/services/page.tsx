import { NavigationMenuDemo } from "@/components/navmenu";
import Footer from "@/components/footer";

const Service = () => {
  return (
    <>
      <nav className="exclude:py-4">
        <span className="pt-4 exclude:pt-14 exclude:items-center exclude:justify-center ">
          <NavigationMenuDemo />
        </span>
      </nav>
      <main className="h-[120vh] items-center justify-center flex">
        <p className="text-4xl flex items-center justify-center">
          This is the page for services
        </p>
      </main>
      <div className="flex items-end justify-end bottom-0">
        <Footer />
      </div>
    </>
  );
};

export default Service;
