import { Typography } from "@material-tailwind/react";
import { MailMinus, MapPin, Phone } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const currentYear = new Date().getFullYear();

const FooterLayout = () => {
  return (
    <div className=" top-[0] w-full bg-[url('/image/Vector_6.png')] h-[300px]">
      <div className="pt-[100px] pl-[40px] pb-[40px] overflow-auto text-white">
        <div className="footer-conten flex justify-between gap-[40px]">
          <div className="footer-left flex gap-[40px]">
            <div className="content-1">
              <a className="text-[16px] font-bold">SHOP</a>
              <ul className="list-none text-[12px] list-outside leading-[30px] ">
                <li>Candy</li>
                <li>Vocher</li>
                <li>Shop</li>
                <li>Login</li>
              </ul>
            </div>
            <div className="content-2">
              <a className="text-[16px] font-bold">HELP</a>
              <ul className="list-none text-[12px] list-outside leading-[30px] ">
                <li>Contact</li>
                <li>FAQ</li>
                <li>MAP</li>
              </ul>
            </div>
            <div className="content-3">
              <a className="text-[16px] font-bold">CONTACT</a>
              <ul className="list-none text-[12px] list-outside leading-[30px] ">
                <li className="flex gap-2">
                  <MailMinus /> Email:
                  <a className="text-[#ffe500]">Cansushop@gmail.com </a>
                </li>
                <li className="flex gap-2">
                  <Phone /> Phone:<a className="text-[#ffe500]">0962 888 888</a>
                </li>
                <li className="flex gap-2">
                  <MapPin /> Loaction:
                  <a className="text-[#ffe500]">
                    264 Đội Cấn, Ba Đình, Hà Nội.
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="content-4 mr-[30px]">
            <div className="ml-[36%]">
              <p>Sign up to get 10% off your first order</p>
            </div>
            <form action="" className="flex gap-2 mt-[20px]">
              <Input
                type="email"
                className="w-[400px] rounded-full"
                placeholder="Subscribe"
              />
              <Button
                type="submit"
                className="bg-[#ffe500] rounded-full text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white  duration-300"
              >
                Subscribe
              </Button>
            </form>

            <div className="flex gap-[10px] mt-[10px]">
              <Image src="/image/pinterest.png" width={45} height={45} alt="" />
              <Image src="/image/instagram.png" width={45} height={45} alt="" />
              <Image src="/image/facebook.png" width={45} height={45} alt="" />
              <Image src="/image/bee.png" width={45} height={45} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLayout;
