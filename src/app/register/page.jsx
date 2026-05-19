"use client";

import { authClient } from "@/lib/auth-client";
import {
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const [isShowPassword, setIsShowPassword] = useState(false);

  // ✅ Submit handler
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error("Password must have 1 uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      return toast.error("Password must have 1 lowercase letter");
    }


    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      photoURL: photo,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Registration successful");
      router.push("/login");
    }
  };

  return (
    <Card className="mx-auto max-w-md w-full p-8 mt-10 rounded-2xl shadow-lg">
      <h1 className="text-center text-2xl font-bold">Register</h1>

      <Form onSubmit={onSubmit} className="flex flex-col gap-4 mt-4">

        {/* Name */}
        <TextField isRequired name="name">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
          <FieldError />
        </TextField>

        {/* Photo URL */}
        <TextField isRequired name="photo">
          <Label>Photo URL</Label>
          <Input placeholder="Enter photo URL" />
          <FieldError />
        </TextField>

        {/* Password */}
        <div className="relative">
          <TextField
            isRequired
            name="password"
            type={isShowPassword ? "text" : "password"}
            validate={(value) => {
              if (value.length < 6) return "Min 6 characters required";
              if (!/[A-Z]/.test(value)) return "Need 1 uppercase letter";
              if (!/[a-z]/.test(value)) return "Need 1 lowercase letter";
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter password" className="pr-10" />

            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>

            <Description>
              At least 6 characters, 1 uppercase, 1 lowercase
            </Description>

            <FieldError />
          </TextField>
        </div>

        {/* Confirm Password */}
        <TextField
          isRequired
          name="confirmPassword"
          type={isShowPassword ? "text" : "password"}
          validate={(value, form) => {
            const password = form?.password?.value;

            if (value !== password) {
              return "Passwords do not match";
            }
            return null;
          }}
        >
          <Label>Confirm Password</Label>
          <Input placeholder="Confirm password" />
          <FieldError />
        </TextField>

        {/* Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 transition p-2 rounded-full text-white font-medium">
          Register
        </button>
      </Form>

      {/* Login link */}
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