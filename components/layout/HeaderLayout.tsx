"use client";
import React from "react";
import MenuDropDown from "../MenuDropDown";
import { Button } from "../ui/button";
import { ShoppingCartIcon, User2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeaderLayout = () => {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];
  return (
    <header className=" w-full text-[#5e35b1]">
      <nav className="md:px-10 py-4 px-7 justify-between md:flex  items-center">
        <div className=" text-4xl font-bold gap-2">
          <Image
            src="/image/image_1.png"
            width={130}
            height={50}
            alt=""
          />
        </div>

        <div className="flex gap-5 text-xl ">
        <Link href="/shop">

          <MenuDropDown components={components} name="shop" />
          </Link>
          <MenuDropDown components={components} name="leanr" />

          <Button className=" rounded-full bg-[#5e35b1] text-[15px] w-[100px] mt-[2px] h-[29px]">
            preformen
          </Button>
          <ShoppingCartIcon className="w-8 h-8 px-1 border-2 rounded-full bg-white" />
          <Link href="/profile">
          <User2Icon className="w-8 h-8 px-1 border-2 rounded-full bg-white" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderLayout;
