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

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

  const formData = new FormData(e.currentTarget);
const user = Object.fromEntries(formData.entries());

const { name, email, photo } = user;

    // 🔴 validation
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
          <Input name="name" placeholder="Enter your name" />
          <FieldError />
        </TextField>

        {/* Email */}
        <TextField isRequired name="email">
          <Label>Email</Label>
          <Input name="email" type="email" placeholder="Enter your email" />
          <FieldError />
        </TextField>

        {/* Photo */}
        <TextField isRequired name="photo">
          <Label>Photo URL</Label>
          <Input name="photo" placeholder="Enter photo URL" />
          <FieldError />
        </TextField>

        {/* Password */}
        <div className="relative">
          <TextField isRequired name="password">
            <Label>Password</Label>
            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-10"
            />

            <span
              className="absolute right-3 top-9 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
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
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="pr-10"
            />

            <span
              className="absolute right-3 top-9 cursor-pointer"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FaEye /> : <FaEyeSlash />}
            </span>

            <FieldError />
          </TextField>
        </div>

        {/* Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 transition p-2 rounded-full text-white font-medium">
          Register
        </button>
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