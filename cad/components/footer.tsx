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

const Footer = () => {
  return (
    <>
      <div className="w-full h-[6rem] bottom-0 bg-gray-700 dark:bg-gray-900 text-white flex items-center justify-center">
        <div className="flex justify-center items-center">zxczxc</div>

        {/* socmed */}
        <div className="bg-transparent rounded-md hover:bg-blue-600 transition ease-in-out delay-150 w-[2rem] h-[2rem] justify-center items-center flex">
          <IconBrandFacebook />
        </div>
        <div className="bg-transparent rounded-md hover:bg-black transition ease-in-out delay-150 w-[2rem] h-[2rem] justify-center items-center flex">
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
