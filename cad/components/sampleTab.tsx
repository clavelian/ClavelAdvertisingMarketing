"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import Instagram1 from "@/public/insta1.webp";
import Instagram2 from "@/public/insta2.webp";

export function TabsDemo() {
  const tabs = [
    {
      title: "Instagram Post",
      value: "product",
      content: (
        <div className="grid w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-purple-900 to-violet-900">
          <p className="text-xl md:text-4xl ">Product Tab</p>
          <Image
            src={Instagram1}
            alt="Instagram post wave"
            height={100}
            width={100}
          />
          <Image
            src={Instagram2}
            alt="idk tal;agashet"
            height={100}
            width={100}
          />

          {/* <DummyContent /> */}
        </div>
      ),
    },
    {
      title: "GIF Post",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Brand Board",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Logo",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
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
    //   className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    // />
    <div></div>
  );
};
