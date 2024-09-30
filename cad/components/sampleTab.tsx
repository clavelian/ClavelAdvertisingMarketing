"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import Instagram1 from "@/public/sampleTabs/insta1.webp";
import Instagram2 from "@/public/sampleTabs/insta2.webp";
import Instagram3 from "@/public/sampleTabs/insta3.webp";
import Instagram4 from "@/public/sampleTabs/insta4.webp";
import Instagram5 from "@/public/sampleTabs/insta5.webp";
import Instagram6 from "@/public/sampleTabs/insta6.webp";
import Instagram7 from "@/public/sampleTabs/insta7.webp";
import Instagram8 from "@/public/sampleTabs/insta8.webp";
import Instagram9 from "@/public/sampleTabs/insta9.webp";
import Instagram10 from "@/public/sampleTabs/insta10.webp";
import Instagram11 from "@/public/sampleTabs/insta11.webp";
import Instagram12 from "@/public/sampleTabs/insta12.webp";
import Gif1 from "@/public/sampleTabs/gif1.gif";

export function TabsDemo() {
  const tabs = [
    {
      title: "Instagram Post",
      value: "product",
      content: (
        <>
          <div>
            {/* <p className="text-base md:text-4xl flex pb-20 exclude:px-40 mobile:px-20 "> */}
            <p className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight pb-20">
              Welcome more followers, and get ready for thousands of
              notifications of likes and comments with our engaging graphics and
              captions.
            </p>
          </div>
          <div className="grid exclude:grid-cols-3 mobile:grid-cols-2 gap-7 p-4 justify-center items-center">
            <Image
              src={Instagram1}
              alt="Instagram post wave"
              height={250}
              width={250}
              className="object-contain"
            />
            <Image
              src={Instagram2}
              alt="instagram"
              height={250}
              width={250}
              className="object-contain"
            />
            <Image
              src={Instagram3}
              alt="instagram"
              height={250}
              width={250}
              className="object-contain"
            />
            <Image
              src={Instagram4}
              alt="instagram"
              height={250}
              width={250}
              className="object-contain"
            />
            <Image
              src={Instagram5}
              alt="instagram"
              height={250}
              width={250}
              className="object-contain"
            />
            <Image
              src={Instagram6}
              alt="instagram"
              height={250}
              width={250}
              className="object-contain"
            />
            <Image
              src={Instagram7}
              alt="instagram"
              height={250}
              width={250}
              className="object-contain"
            />
            <Image
              src={Instagram8}
              alt="instagram"
              height={250}
              width={250}
              className="object-contain"
            />
            <Image
              src={Instagram9}
              alt="instagram"
              height={250}
              width={250}
              className="object-contain"
            />
            <Image
              src={Instagram10}
              alt="instagram"
              height={250}
              width={250}
              className="object-contain"
            />
            <Image
              src={Instagram11}
              alt="instagram"
              height={250}
              width={250}
              className="object-contain"
            />
            <Image
              src={Instagram12}
              alt="instagram"
              height={250}
              width={250}
              className="object-contain"
            />

            {/* <DummyContent /> */}
          </div>
        </>
      ),
    },
    {
      title: "GIF Post",
      value: "services",
      content: (
        <>
          <div>
            {/* <p className="text-base md:text-4xl flex pb-20 exclude:px-40 mobile:px-20 "> */}
            <p className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight pb-20">
              Welcome more followers, and get ready for thousands of
              notifications of likes and comments with our engaging graphics and
              captions.
            </p>
          </div>
          <div className="grid exclude:grid-cols-3 mobile:grid-cols-2 gap-7 p-4 justify-center items-center">
            <Image
              src={Gif1}
              alt="Instagram post wave"
              height={250}
              width={250}
              className="object-contain"
              unoptimized
            />
          </div>
        </>
      ),
    },
    {
      title: "Brand Board",
      value: "playground",
      content: (
        <div className=" w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold dark:text-white ">
          <p>Brand Board</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Logo",
      value: "content",
      content: (
        <div className=" w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold dark:text-white ">
          <p>Logo</p>
          <DummyContent />
        </div>
      ),
    },
    // {
    //   title: "Logo",
    //   value: "content",
    //   content: (
    //     <div className=" w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-teal-700 to-teal-900">
    //       <p>Logo</p>
    //       <DummyContent />
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-20">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    // <Image
    //   src=""
    //   alt="dummy image"
    //   width="1000"
    //   height="1000"
    //   className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -botto inset-x-0 w-[90%] rounded-xl mx-auto"
    // />
    <div></div>
  );
};
