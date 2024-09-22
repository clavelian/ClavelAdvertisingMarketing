"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import camLogo from "../public/logo.png";
import camFullLogo from "../public/CAM1.png";
import { ModeToggle } from "../components/ui/lnd";
import { AnimatedModalDemo } from "@/components/animeModal";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ];

export function NavigationMenuDemo() {
  return (
    <div className="flex justify-center items-center ">
      <Link href="/">
        <span className="pr-6 mobile:justify-start mobile:pl-2 mobile:pt-5 ">
          <Image
            src={camLogo}
            width={70}
            height={70}
            alt="camLogo"
            priority={false}
            layout="none"
            className="exclude:hidden"
          />
          <Image
            src={camFullLogo}
            width={150}
            height={150}
            alt="camLogo"
            priority={false}
            layout="none"
            className="mobile:hidden "
          />
        </span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Get started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid p-4 mobile:p-4 w-[300px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/docs" title="About Clavel Marketing">
                  Learn more about us.
                </ListItem>
                <ListItem href="/docs/installation" title="Services">
                  Explore our services, from SEO to Social Media Management etc.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <span className="mobile:hidden">
              <Link href="/samples">
                <NavigationMenuTrigger>Samples</NavigationMenuTrigger>
              </Link>
            </span>
            {/* <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent> */}
          </NavigationMenuItem>
          {/* <NavigationMenuItem className="mobile:pr-4">
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
      <span className="px-2 z-30">
        <Link href="">
          <AnimatedModalDemo />
        </Link>
      </span>
      <span className="exclude:pl-2 flex mobile:pr-3 z-30">
        <ModeToggle />
      </span>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
