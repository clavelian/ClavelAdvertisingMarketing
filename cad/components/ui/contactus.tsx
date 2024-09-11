"use client";
import { useRouter } from "next/router";

function MyButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/another-component");
  };

  return (
    <button
      onClick={handleClick}
      className="px-5 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500 exclude:hidden"
    >
      Contact
    </button>
  );
}
export default MyButton;
