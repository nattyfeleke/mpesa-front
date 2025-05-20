"use client";
import React from "react";
import MpesaLogo from "../../../public/logo.png";
import SafariLogo from "../../../public/safaricomLogo.png";
import LoginImage from "../../../public/login.png";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import useDynamicMutation from "@/lib/api/use-post-data";
import { loginSchema, LoginType } from "@/validation/auth.validation";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
const navLinks = [
  {
    title: "Apply",
    href: "/",
    cta: false,
  },
  {
    title: "Recommend",
    href: "/",
    cta: false,
  },
  {
    title: "Login",
    href: "/",
    cta: true,
  },
];
const initialValues: LoginType = {
  email: "",
  password: "",
};
const Login = () => {
  const postMutation = useDynamicMutation({});
  const loginSubmitHandler = async (values: LoginType) => {
    try {
      await postMutation.mutateAsync({
        url: `/auth/login`,
        method: "POST",
        body: values,
        onSuccess: (res) => {
          console.log("response");
          console.log(res);
          signIn("credentials", {
            data: JSON.stringify({ ...res.data, accessToken: res.accessToken }),
            callbackUrl: "/",
          });

          toast.success("Login Successful, Redirecting...");
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="bg-green-600 p-4 flex w-full justify-between items-center">
        <div className="flex items-center gap-1">
          <Image src={MpesaLogo} alt="mpesa logo" className="w-20 h-10" />
          <Image src={SafariLogo} alt="safaricom logo" className="w-20 h-10" />
        </div>

        <div className="flex  items-center">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`${
                link.cta ? "bg-white text-green-600" : "text-white"
              } px-4 py-2 rounded-md`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[800px mx-auto] w-full p-20">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-gray-900 ">MPesa Acquisition Portal</h2>
          <p className="text-gray-800">
            Wwlcome to Mpesa world of convinience . The portal provides an{" "}
            efficient way to access and manage your Mpesa account.
          </p>
          <div className="">
            <Formik
              initialValues={initialValues}
              validationSchema={loginSchema}
              onSubmit={loginSubmitHandler}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="flex w-full flex-col items-center space-y-3 pb-4">
                  <div className="w-full max-w-md">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={`mt-1 p-2 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 ${
                        errors.email && touched.email ? "border-red-500" : ""
                      }`}
                      placeholder="Enter your email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="w-full max-w-md">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className={`mt-1 p-2 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 ${
                        errors.password && touched.password
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="Enter your password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="w-full max-w-md">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      {isSubmitting ? "Logging in..." : "Login"}
                    </button>
                  </div>

                  <div className="w-full max-w-md text-right">
                    <Link
                      href="/forgot-password"
                      className="text-sm text-green-600 hover:text-green-500"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="h-80">
          <Image src={LoginImage} alt="mpesa logo" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Login;
