import { toast } from "sonner";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import Root from "../components/Root";
import { useAuth } from "../components/AuthContext";

export function SignUp() {
  const registerForm = useRef(null);
  const { registerUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    // @ts-ignore
    const name = registerForm.current.name.value;
    // @ts-ignore
    const email = registerForm.current.email.value;
    // @ts-ignore
    const password = registerForm.current.password.value;
    // @ts-ignore
    const confirmPassword = registerForm.current.confirmPassword.value;

    if (password !== confirmPassword) {
      toast.error("Passwords did not match!");
      return;
    }

    const userInfo = { name, email, password, confirmPassword };

    registerUser(userInfo);
  };
  return (
    <Root>
      <Card className='mx-auto max-w-sm'>
        <CardHeader>
          <CardTitle className='text-xl'>Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            <form onSubmit={handleSubmit} ref={registerForm}>
              <div className='grid gap-2 py-2'>
                <Label htmlFor='username'>Username</Label>
                <Input id='username' placeholder='Username' required />
              </div>
              <div className='grid gap-2 py-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='Email here...'
                  required
                />
              </div>
              <div className='grid gap-2 py-2'>
                <Label htmlFor='password'>Password</Label>
                <Input id='password' name='password' type='password' />
              </div>
              <div className='grid gap-2 py-2'>
                <Label htmlFor='password'>Confirm Password</Label>
                <Input
                  id='confirm-password'
                  name='confirmPassword'
                  type='password'
                />
              </div>
              <Button type='submit' className='w-full'>
                Create an account
              </Button>
            </form>
            <Button variant='outline' className='w-full'>
              Sign up with GitHub
            </Button>
          </div>
          <div className='mt-4 text-center text-sm'>
            Already have an account?{" "}
            <Link to={"/login"} className='underline'>
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </Root>
  );
}
