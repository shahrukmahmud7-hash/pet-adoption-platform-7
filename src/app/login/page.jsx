"use client";
import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

const LogInPage = () => {

   const searchParams = useSearchParams();
   const redirect = searchParams.get("redirect") || "/";

   const onSubmit = async(e) =>{
      e.preventDefault()

    //  const email = e.target.email.value;
    // const password = e.target.password.value;
       const formData = new FormData(e.currentTarget);
     const user = Object.fromEntries(formData.entries())
     
     const {data, error} = await authClient.signIn.email({
            email: user.email,
            password: user.password,
            callbackURL: redirect,
        })
           console.log({data, error})
            if(error){
      toast.error (error.message)
    } else {
      toast.success ('Login succesfull');
    }
   }  

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
     
    const [isShowPassword , setIsShowPassword ] = useState(false)

    return (
        
       <Card className="mx-auto max-w-md w-full p-8 mt-10 rounded-2xl shadow-lg " > 

       <h1 className="text-center text-2xl font-bold" > Login </h1>
         <Form className="flex mx-auto flex-col gap-4" onSubmit={onSubmit}>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="Enter Your Email" />
        <FieldError />
      </TextField>

      <div className="relative">
         <TextField
         isRequired
         minLength={8}
         name="password"
        type={isShowPassword ? "text" : "password"}
        >
       <Label>Password</Label>
       <Input placeholder="Enter your password" className="pr-10" />
     <span
      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
      onClick={() => setIsShowPassword(!isShowPassword)}
     >
      {isShowPassword ? <FaEye /> : <FaEyeSlash />}
     </span>

       <Description>
        Must be at least 8 characters with 1 uppercase and 1 number
      </Description>
      <FieldError />
      </TextField>
   </div>

      <div className="flex gap-2">
      <button className="w-full bg-blue-500 hover:bg-blue-600 
      transition-colors duration-200 p-2 rounded-full
     text-white font-medium" >
              Login
         </button>
      
      </div>
    </Form>
        <div className="flex items-center">
           <Separator className="flex-1" />
           <div className="whitespace-nowrap">
                  Or sign up with
          </div>
        <Separator className="flex-1" />
        
     </div>
      <Button variant="outline" className="w-full " onClick={handleGooleLogin}
      >
        <GrGoogle /> Login In With Google
      </Button>
          
        <p className="text-[#706F6F] my-3 text-center">
        Don’t have an account?{" "}
        <Link href="/register" className="text-orange-500">
          Register
        </Link>
      </p>

    </Card>
    );
};

export default LogInPage; 