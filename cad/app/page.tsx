import { NavigationMenuDemo } from "../components/navmenu";
import FlipWordsDemo from "../components/flipwords";
import { ModeToggle } from "../components/ui/lnd";

export default function Home() {
  return (
    <>
      <nav className="pt-6 flex items-center justify-center gap-3">
        <NavigationMenuDemo />
        <span>
          <ModeToggle />
        </span>
      </nav>
      <main>
        <FlipWordsDemo />
      </main>
    </>
  );
}
