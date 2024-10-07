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
      <main className="h-[120vh] items-center justify-center pt-40">
        <p className="text-4xl flex items-center justify-center">
          What we believe
        </p>
        <p>
          At Clavel Advertising Marketing, we understand the power of pictures
          and words. We believe that every brand has a unique story to tell, and
          it’s our mission to help you tell it in the most engaging and
          impactful way possible. With our exceptional content writing and
          graphic design services, we are dedicated to driving results for your
          business.
        </p>
      </main>
      <div className="flex items-end justify-end bottom-0">
        <Footer />
      </div>
    </>
  );
};

export default Service;
