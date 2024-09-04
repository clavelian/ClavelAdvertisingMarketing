import { NavigationMenuDemo } from "../components/navmenu";
import FlipWordsDemo from "../components/flipwords";

export default function Home() {
  return (
    <>
      <nav>
        <NavigationMenuDemo />{" "}
      </nav>
      <main>
        <FlipWordsDemo />
      </main>
    </>
  );
}
