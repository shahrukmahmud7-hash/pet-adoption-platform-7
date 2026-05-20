"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { redirect, useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const router = useRouter();

  const [isOpenPassword, setIsOpenPassword] = useState(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);

  const [isPassword, setIsPassword] = useState("");
  const [isConfirmPassword, setIsConfirmPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const user = Object.fromEntries(formData.entries());

  const { name, email, image } = user;
    // 🔴 validation
    if (isPassword.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }
    if (!/[A-Z]/.test(isPassword)) {
      return toast.error("Password must have 1 uppercase letter");
    }
    if (!/[a-z]/.test(isPassword)) {
      return toast.error("Password must have 1 lowercase letter");
    }
    if (isPassword !== isConfirmPassword) {
      return toast.error("Passwords do not match");
    }
  console.log({email , isPassword , image , name});
    const { data, error } = await authClient.signUp.email({
  
      email,
      password: isPassword,
      image,
      name
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Registration successful");
      redirect("/login");
    }
  };

   const handleGooleLogin = async () => {
  
         const {data , error} = await authClient.signIn.social({
          provider: "google",
          // callbackURL: redirect,
    });
          console.log(data , 'data');
           if (error) {
          toast.error ("Google login failed");
        } else {
         toast.success ('Login succesfull');
      
        }
      } 


  return (
    <Card className="mx-auto max-w-md w-full p-8 mt-10 rounded-2xl shadow-lg mb-8">
      <h1 className="text-center text-2xl font-bold text-gray-800">Create your account</h1>
       <p className="text-center text-sm text-gray-600">
         Join our community and find your perfect pet companion.
       </p>
      <Form onSubmit={onSubmit} className="flex flex-col gap-4 mt-4">

        {/* Name */}
        <TextField isRequired name="name">
          <Label>Name</Label>
          <Input name="name" placeholder="Enter your name" />
          <FieldError />
        </TextField>

        {/* Email */}
        <TextField isRequired name="email">
          <Label>Email</Label>
          <Input name="email" type="email" placeholder="Enter your email" />
          <FieldError />
        </TextField>

        {/* Image URL */}
        <TextField isRequired name="image">
          <Label>Image URL</Label>
          <Input name="image" placeholder="Enter image URL" />
          <FieldError />
        </TextField>

        {/* Password */}
        <div className="relative">
          <TextField isRequired name="password">
            <Label>Password</Label>
            <Input
              name="password"
              type={isOpenPassword ? "text" : "password"}
              placeholder="Enter password"
              value={isPassword}
              onChange={(e) => setIsPassword(e.target.value)}
              className="pr-10"
            />

            <span
              className="absolute right-3 top-9 cursor-pointer"
              onClick={() => setIsOpenPassword(!isOpenPassword)}
            >
              {isOpenPassword ? <FaEye /> : <FaEyeSlash />}
            </span>

            <Description>
              At least 6 characters, 1 uppercase, 1 lowercase
            </Description>

            <FieldError />
          </TextField>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <TextField isRequired name="confirmPassword">
            <Label>Confirm Password</Label>
            <Input
              name="confirmPassword"
              type={isOpenConfirm ? "text" : "password"}
              placeholder="Confirm password"
              value={isConfirmPassword}
              onChange={(e) => setIsConfirmPassword(e.target.value)}
              className="pr-10"
            />

            <span
              className="absolute right-3 top-9 cursor-pointer"
              onClick={() => setIsOpenConfirm(!isOpenConfirm)}
            >
              {isOpenConfirm ? <FaEye /> : <FaEyeSlash />}
            </span>

            <FieldError />
          </TextField>
        </div>

        {/* Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 
          transition p-2 rounded-full text-white font-medium
        ">
          Create Account
        </button>
         <div className="flex justify-center items-center gap-3">
      <Separator className="flex-1" />
      <div className="whitespace-nowrap">
        Or sign up with
      </div>
      <Separator className="flex-1" />
    </div>
         <div>
       <Button onClick={handleGooleLogin}  variant="outline" className={'w-full rounded-full'}>
       <FcGoogle /> Sign Up With Google
       </Button>
       
    </div>
      </Form>
      <p className="text-center text-sm mt-4">
        Already have an account?{" "}
        <Link href="/login" className="text-orange-500">
          Login
        </Link>
      </p>
    </Card>
  );
};

export default RegisterPage;