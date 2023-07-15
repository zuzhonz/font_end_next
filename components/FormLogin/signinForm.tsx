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

const formSchema = z
  .object({
    account: z
      .string({
        required_error: "account is required",
      })
      .min(2, {
        message: "* Username must be at least 2 characters.",
      })
      .max(50)
      .toLowerCase()
      .email({
        message: "* Account not typer email ! ",
      }),
    password: z
      .string({
        required_error: "* Password is required !",
      })
      .min(0, {
        message: " * Password must be at least 2 characters.",
      }),

    confirm: z
      .string({
        required_error: "* Confirm Password is required !",
      })
      .min(0, {
        message: " * Confirm password must be at least 2 characters.",
      }),

    phone_number: z
      .string({
        required_error: " * Phone number not  !",
      })
      .min(10, {
        message: " * Phone number must be at least 10 characters. !",
      })
      .max(11, {
        message: "* Phone number  must be at most 11 characters !",
      })
      .regex(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, {
        message: " * Phone number is not typer !",
      }),

    verifcation: z.string({
      required_error: " * verifcation is required !",
    }),
  })
  .refine((data) => data.password === data.confirm, {
    message: " ! Passwords don't match !",
    path: ["confirm"],
  });

const SigninForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      account: "",
    },
  });

  const submit = async (data: z.infer<typeof formSchema>, event: any) => {
    console.log(data);
  };

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
          name="phone_number"
          render={({ field }) => (
            <FormItem className="ml-[27%] mr-[50%] w-[45%]">
              <div className="relative flex py-2 items-center w-[500px]">
                <Label className="text-[16px] font-bold ml-[14px]">
                  Phone number
                </Label>
                <FormMessage className="ml-[10px] mb-1 mt-2 text-[12px]" />
              </div>
              <FormControl>
                <Input
                  placeholder="enter your phone number"
                  {...field}
                  className="h-[40px] rounded-full"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="verifcation"
          render={({ field }) => (
            <FormItem className="ml-[27%] mr-[50%] w-[45%]">
              <div className="relative flex py-2 items-center w-[500px]">
                <Label className="text-[16px] font-bold ml-[14px]">
                  Verifcation
                </Label>
                <FormMessage className="ml-[10px] mb-1 mt-1 text-[12px]" />
              </div>
              <div className="flex justify-between gap-3">
                <FormControl>
                  <Input
                    placeholder="enter your password"
                    {...field}
                    className="h-[40px] rounded-full"
                  />
                </FormControl>
                <Button
                  type="submit"
                  className="bg-[#5e35b1] mt-[1px]   w-[28%] h-[35px] rounded-full text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                >
                  Submit
                </Button>
              </div>
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

        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem className="ml-[27%] mr-[50%] w-[45%]">
              <div className="relative flex py-2 items-center w-[500px]">
                <Label className="text-[16px] font-bold ml-[14px]">
                  Confirm
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

        <Button
          type="submit"
          className="bg-[#5e35b1] ml-[36%] mr-[40%] mt-5 w-[28%] h-[35px] rounded-full text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default SigninForm;
