import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function Signup() {
  return (
    <>
      <div className=" md:w-1/2 mx-auto text-center">
        <h2 className="text-3xl font-bold text-neutralDGray mb-20 pt-20">
        Sign Up
        </h2>
      </div>
      <div className="  flex items-center justify-center">
        <form className="flex  flex-col gap-4 w-96">
          <div>
            <div className="mb-2 block ">
              <Label htmlFor="email2" value="Your username" />
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="Enter your username"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder="Enter your password"
              required
              shadow
            />
          </div>

          <div className="flex justify-end">
            <a
              href="#"
              className="text-brandPrimary hover:underline dark:text-brandPrimary"
            >
              Forget password
            </a>
          </div>
          <Button
            className="bg-brandPrimary hover:bg-neutralGray"
            type="submit"
          >
            Register new account
          </Button>
        </form>
      </div>
    </>
  );
}
