"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import Rose from "@/public/rose.jpg";
import Logo from "@/public/logo.png";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 exclude:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-8">
      <WobbleCard
        containerClassName="col-span-1 exclude:col-span-2 h-full bg-pink-800 min-h-[500px] exclude:min-h-[300px]"
        className="justify-center items-center"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base tablet:text-xl exclude:text-3xl font-semibold tracking-[-0.015em] text-white mobile:text-xl">
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
          src={Logo}
          width={100}
          height={100}
          alt="linear demo image"
          className="absolute -right-4 exclude:-right-[1%] -bottom-10 object-contain rounded-2xl"
        />
        {/* grayscale filter */}
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base tablet:text-xl exclude:text-3xl font-semibold tracking-[-0.015em] text-white mobile:text-xl">
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
          <h2 className="max-w-sm tablet:max-w-lg  text-left text-balance text-base tablet:text-xl exclude:text-3xl font-semibold tracking-[-0.015em] text-white mobile:text-xl">
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
            <span className="font-semibold">
              Rose Ann Clavel | Founder of C3
            </span>
          </p>
        </div>
        {/* <Image
          src={Rose}
          width={500}
          height={500}
          alt="imageDP"
          className="absolute object-contain mobile:hidden right-9 top-12 rounded-full tablet:-right-[10%] tablet:-top-[-10%]"
          // -right-10 tablet:-right-[10%] exclude:-right-[10%] -bottom-1
        /> */}
        <Image
          src={Rose}
          width={300}
          height={300}
          alt="imageDP"
          className="absolute rounded-full tablet:-right-[-5%] tablet:-top-[-20%] smscreen:hidden wscreen:top-16 right-16 exclude:rounded-bl-full"
          // -right-10 tablet:-right-[10%] exclude:-right-[10%] -bottom-1
        />
      </WobbleCard>
    </div>
  );
}
