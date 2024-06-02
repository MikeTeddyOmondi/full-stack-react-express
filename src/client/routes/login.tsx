import { toast } from "sonner";
import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
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

export function Login() {
  const { user, loginUser } = useAuth();
  const navigate = useNavigate();

  const loginForm = useRef(null);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // @ts-ignore
      const email = loginForm.current.email.value;
      // @ts-ignore
      const password = loginForm.current.password.value;
  
      const userInfo = { email, password };
      loginUser(userInfo);
    } catch (error) {
      toast.error("Passwords did not match!");
    }
  };
  return (
    <Root>
      <Card className='mx-auto max-w-sm'>
        <CardHeader>
          <CardTitle className='text-2xl'>Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            <form onSubmit={handleSubmit} ref={loginForm}>
              <div className='grid gap-2 py-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='m@example.com'
                  required
                />
              </div>
              <div className='grid gap-2 py-2'>
                <div className='flex items-center'>
                  <Label htmlFor='password'>Password</Label>
                  <Link
                    to={"/forgot-password"}
                    className='ml-auto inline-block text-sm underline'
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id='password' type='password' required />
              </div>
              <Button type='submit' className='w-full'>
                Login
              </Button>
            </form>
            <Button variant='outline' className='w-full'>
              Login with Google
            </Button>
          </div>
          <div className='mt-4 text-center text-sm'>
            Don&apos;t have an account?{" "}
            <Link to={"/sign-up"} className='underline'>
              Sign up
            </Link>
          </div>
          <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
            By clicking login, you agree to our{" "}
            <a
              href='/terms'
              className='underline underline-offset-4 hover:text-primary'
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href='/privacy'
              className='underline underline-offset-4 hover:text-primary'
            >
              Privacy Policy
            </a>
            .
          </p>
        </CardContent>
      </Card>
    </Root>
  );
}
