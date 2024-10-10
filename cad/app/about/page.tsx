import { NavigationMenuDemo } from "@/components/navbar/navmenu";
import Footer from "@/components/footer";
import { WobbleCardDemo } from "./wobble";

const Aboutme = () => {
  return (
    <>
      <nav className="exclude:py-4">
        <span className="pt-4 exclude:pt-14 exclude:items-center exclude:justify-center ">
          <NavigationMenuDemo />
        </span>
      </nav>
      <main className="items-center justify-center">
        <div className="text-4xl flex items-center justify-center pb-20">
          This space is for About me page
        </div>
        <div>
          <WobbleCardDemo />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Aboutme;
