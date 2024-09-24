"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import Instagram1 from "@/public/insta1.webp";
import Instagram2 from "@/public/insta2.webp";
import Instagram3 from "@/public/insta3.webp";

export function TabsDemo() {
  const tabs = [
    {
      title: "Instagram Post",
      value: "product",
      content: (
        <>
          <div>
            <p className="text-base md:text-4xl flex pb-20 exclude:px-40 mobile:px-20 ">
              Welcome more followers, and get ready for thousands of
              notifications of likes and comments with our engaging graphics and
              captions.
            </p>
          </div>
          <div className="grid exclude:grid-cols-3 mobile:grid-cols-2 gap-y-7 p-4 justify-center items-center">
            <Image
              src={Instagram1}
              alt="Instagram post wave"
              height={250}
              width={250}
              className="object-contain mobile:px-1"
            />
            <Image
              src={Instagram2}
              alt="idk tal;agashet"
              height={250}
              width={250}
              className="object-contain"
            />
            <Image
              src={Instagram3}
              alt="idk tal;agashet"
              height={250}
              width={250}
              className="object-contain"
            />
            <Image
              src={Instagram3}
              alt="idk tal;agashet"
              height={250}
              width={250}
              className="object-contain"
            />
            <Image
              src={Instagram3}
              alt="idk tal;agashet"
              height={250}
              width={250}
              className="object-contain"
            />
            <Image
              src={Instagram3}
              alt="idk tal;agashet"
              height={250}
              width={250}
              className="object-contain"
            />
            <Image
              src={Instagram3}
              alt="idk tal;agashet"
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
        <div className=" w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold dark:text-white ">
          <p>GIF Post</p>
          <DummyContent />
        </div>
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
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
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
