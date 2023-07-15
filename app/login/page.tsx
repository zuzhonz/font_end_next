"use client";
import FromLogin from "@/components/FromLogin";
import GoogleBtn from "@/components/GoogleBtn";
import MenuDropDown from "@/components/MenuDropDown";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon, User2Icon } from "lucide-react";
import React, { useState } from "react";
// import { UserIcon } from '@heroicons/react/24/solid';
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

const page = () => {
  const [tabs, setTabs] = useState(true);

  return (
    <main className="w-full h-screen bg-[#fbf1d3] ">
      <header className=" w-full text-[#5e35b1]   ">
        <nav className="md:px-10 py-4 px-7 md:flex justify-between items-center">
          <div className=" text-4xl font-bold gap-2">Logo</div>

          <div className="flex gap-5 text-xl ">
            <MenuDropDown components={components} name="shop" />
            <MenuDropDown components={components} name="leanr" />
            {/* <MenuDropDown  /> */}

            <Button className=" rounded-full bg-[#5e35b1] text-[15px] w-[100px] mt-[2px] h-[29px]">
              preformen
            </Button>
            {/* <UserIcon className="w-8 h-8 px-1 border-2 rounded-full bg-white" /> */}
            <ShoppingCartIcon className="w-8 h-8 px-1 border-2 rounded-full bg-white" />
            <User2Icon className="w-8 h-8 px-1 border-2 rounded-full bg-white" />
          </div>
        </nav>
      </header>
      <main className="mt-[3%] ">
        <div className="">
          <div className="title-form w-auto  m-auto text-center">
            <span className="text-4xl font-Pacifico font-bold ">
              Account Login
            </span>
          </div>
          <FromLogin tabs={tabs} />
          <div className="relative flex py-5 items-center w-[500px] mt-[20px] m-auto"  onClick={() => {
            if (tabs) {
              setTabs(false);
            } else {
              setTabs(true);
            }
          }} >
            <div className="flex-grow border-[1px]  border-[#5e35b1]"></div>
            <span className="flex-shrink mx-4 text-gray-400">
              { tabs ? "Login in with " : "Sign up" }
            </span>
            <div className="flex-grow border-[1px] border-[#5e35b1]"></div>
          </div>
          <GoogleBtn />
        </div>
       
      </main>
    </main>
  );
};

export default page;
