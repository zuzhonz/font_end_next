"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormLabel,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

import Link from "next/link";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { type } from "os";

const formSchema = z.object({
  account: z
    .string()
    .min(2, {
      message: "* Username must be at least 2 characters.",
    })
    .max(50)
    .toLowerCase()
    .regex(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      {
        message: "* Account Malformed email ",
      }
    ),
  password: z.string().min(2, {
    message: " * Password must be at least 2 characters.",
  }),
});

type Props = {
   tabs : boolean
}

const FromLogin = ({tabs}:Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const submit = async (data: z.infer<typeof formSchema>, event: any) => {
    console.log(data);
  };

  if (tabs) {
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submit)}
          className="m-auto max-w-[900px]"
        >
          <FormField
            control={form.control}
            name="account"
            render={({ field }) => (
              <FormItem className="ml-[27%] mr-[50%] w-[45%] ">
                <div className="relative flex py-2 items-center w-[500px]">
                  <Label className="text-[16px] font-bold ml-[14px]">
                    Account
                  </Label>
                  <FormMessage className="ml-[10px] mb-1 mt-1  text-[12px]" />
                </div>
                <FormControl>
                  <Input
                    placeholder="enter your account"
                    {...field}
                    className="h-[40px] rounded-full"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="ml-[27%] mr-[50%] w-[45%]">
                <div className="relative flex py-2 items-center w-[500px]">
                  <Label className="text-[16px] font-bold ml-[14px]">
                    Password
                  </Label>
                  <FormMessage className="ml-[10px] mb-1 mt-1 text-[12px]" />
                </div>
                <FormControl>
                  <Input
                    placeholder="enter your password"
                    {...field}
                    className="h-[40px] rounded-full"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormDescription className="ml-[62%] mr-[30%] w-[45%] mt-[20px]">
            {" "}
            forgot password{" "}
          </FormDescription>
          <Button
            type="submit"
            className="bg-[#5e35b1] ml-[36%] mr-[40%] mt-5 w-[28%] h-[35px] rounded-full text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          >
            Submit
          </Button>
        </form>
      </Form>
    );
  } else {
    return <h2> helooo my word</h2>;
  }
};

export default FromLogin;
