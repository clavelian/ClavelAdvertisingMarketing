"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import Rose from "@/public/rose.jpg";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 exclude:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-6">
      <WobbleCard
        containerClassName="col-span-1 exclude:col-span-2 h-full bg-pink-800 min-h-[500px] exclude:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base tablet:text-xl exclude:text-3xl font-semibold tracking-[-0.015em] text-white">
            Our commitment
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            From our products and services to our relationships with customers,
            partners, and clients, we uphold a standard of excellence. At C3,
            our commitment runs deep, shaping every aspect of our operations. We
            are steadfast in our dedication to our core principles, which serve
            as the foundation of our identity.
          </p>
        </div>
        <Image
          src={""}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 exclude:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base tablet:text-xl exclude:text-3xl font-semibold tracking-[-0.015em] text-white">
          Our vision
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Our vision is to grow worldwide as we help our client&apos;s
          businesses grow by consistently delivering exceptional and
          personalized services. Whether you’re starting a new venture or poised
          for expansion, our commitment is to collaborate and push you towards
          your goals.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 exclude:col-span-3 bg-blue-900 min-h-[500px] exclude:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm tablet:max-w-lg  text-left text-balance text-base tablet:text-xl exclude:text-3xl font-semibold tracking-[-0.015em] text-white">
            The Face of C3
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            At C3, we&apos;re more than just a name. We&apos;re a team of
            passionate individuals committed to making a difference in many
            businesses. Our mission is to provide creative and exceptional
            service, and we&apos;re dedicated to serving our community,
            customers, and partners with integrity, passion, and a personal
            touch.
            <br />
            <br />
            Rose Ann Clavel | Founder of C3
          </p>
        </div>
        <Image
          src={Rose}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 tablet:-right-[40%] exclude:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
