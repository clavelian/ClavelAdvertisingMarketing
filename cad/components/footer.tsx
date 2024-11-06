import {
  IconBrandFacebook,
  IconBrandTiktok,
  IconBrandTwitter,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[4rem] bg-transparent text-white flex items-center gap-2 wscreen:px-40 smscreen:px-32 tablet:px-20 mobile:px-4">
        {/* logo and Copyright */}
        <span className="gap-2 flex">
          <Image src={Logo} width={40} height={40} alt="logo" />

          <span className="flex justify-center items-center">
            <p className="font-normal">
              Copyright © {new Date().getFullYear()} - All right reserved by
              Clavel Marketing
            </p>
          </span>
        </span>

        {/* socmed */}
        <span className="flex gap-2 wscreen:pl-40 smscreen:pl-36 tablet:px-20 mobile:px-4">
          <Link href="https://www.facebook.com/ClavelAdvertisingMarketing">
            <div className="rounded-md dark:hover:bg-blue-700 bg-blue-700 dark:bg-transparent hover:-translate-y-2 dark:transition hover:scale-125 transition ease-in-out delay-150 w-[2rem] h-[2rem] justify-center items-center flex">
              {/* -translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 */}
              <IconBrandFacebook />
            </div>
          </Link>

          <Link href="#">
            <div className="rounded-md dark:hover:bg-slate-600 dark:bg-transparent hover:-translate-y-2 dark:transition hover:scale-125  transition ease-in-out delay-150 w-[2rem] h-[2rem] justify-center items-center flex bg-slate-600">
              <IconBrandTiktok />
            </div>
          </Link>

          <Link href="#">
            <div className="rounded-md dark:hover:bg-blue-400 dark:bg-transparent hover:-translate-y-2 dark:transition hover:scale-125  transition ease-in-out delay-150 w-[2rem] h-[2rem] justify-center items-center flex bg-blue-400">
              <IconBrandTwitter />
            </div>
          </Link>

          <Link href="#">
            <div className="rounded-md dark:hover:bg-blue-600 dark:bg-transparent hover:-translate-y-2 dark:transition hover:scale-125  transition ease-in-out delay-150 w-[2rem] h-[2rem] justify-center items-center flex bg-blue-600">
              <IconBrandLinkedin />
            </div>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Footer;
