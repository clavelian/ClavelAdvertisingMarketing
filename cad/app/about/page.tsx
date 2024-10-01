import { NavigationMenuDemo } from "@/components/navmenu";
import Footer from "@/components/footer";
const Aboutme = () => {
  return (
    <>
      <nav className="exclude:py-4">
        <span className="pt-4 exclude:pt-14 exclude:items-center exclude:justify-center ">
          <NavigationMenuDemo />
        </span>
      </nav>
      <main>
        <p className="text-4xl">This is the page for About</p>
      </main>
      <Footer />
    </>
  );
};

export default Aboutme;
