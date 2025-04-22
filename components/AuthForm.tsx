"use client";

import Image from "next/image";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";

const AuthForm = ({ type }: { type: string }) => {
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    shouldUnregister: true,

    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    form.reset();
  }

  return (
    <div className="flex-center flex-col ">
      <div className="flex-center flex-col gap-4  w-sm md:w-md bg-white max-w-lg p-8 rounded-lg shadow-md">
        <header className=" flex-center flex-col text-center md:gap-4 gap-2">
          <Image
            src="/flowpal1.png"
            width={100}
            height={50}
            alt="flowpal-logo"
          />
          <p className="text-sm font-normal text-black/80 mt-2">
            {type === "login"
              ? "Enter account details and proceed to login"
              : "Join thousands of online bisness owners who track their trades with Flowpal effortlessly"}
          </p>
        </header>
        <div className="flex flex-col gap-2 w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex flex-col mt-4 gap-2 rounded-md w-full">
                {type === "register" && (
                  <CustomInput
                    name="businessName"
                    control={form.control}
                    label="Business Name"
                    placeholder="Enter Business Name"
                  />
                )}
                <CustomInput
                  name="email"
                  control={form.control}
                  label="Email"
                  placeholder="Enter Email"
                />
                <CustomInput
                  name="password"
                  control={form.control}
                  label="Password"
                  placeholder="Enter password"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-10 mt-4 bg-[#8848e8] hover:bg-[#8848e8ad] hover:text-white">
                {type === "login" ? "Login" : "Create My Free Account"}
              </Button>
            </form>
          </Form>
        </div>
      </div>

      <div className="flex-center mt-6">
        <p className="flex text-gray-600 gap-1">
          Already have an Account?
          <span className="text-[#8848e8] font-semibold">
            {type === "login" ? (
              <Link href="/register">Create an account </Link>
            ) : (
              <Link href="/login">Log in here</Link>
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
