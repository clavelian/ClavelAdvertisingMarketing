import {
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandX,
  IconHome,
  IconBrandInstagram,
  IconMail,
  IconBrandTiktok,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[4rem] bg-transparent text-white flex items-center justify-center gap-4">
        {/* <div className="flex justify-center items-center">zxczxc</div> */}

        {/* socmed */}
        <div className="bg-transparent rounded-md hover:bg-blue-600 transition ease-in-out delay-150 w-[2rem] h-[2rem] justify-center items-center flex">
          <IconBrandFacebook />
        </div>
        <div className="bg-transparent rounded-md hover:bg-slate-600 transition ease-in-out delay-150 w-[2rem] h-[2rem] justify-center items-center flex">
          <IconBrandTiktok />
        </div>
        <div className="bg-transparent rounded-md hover:bg-blue-400 transition ease-in-out delay-150 w-[2rem] h-[2rem] justify-center items-center flex">
          <IconBrandTwitter />
        </div>
      </div>
    </>
  );
};

export default Footer;
