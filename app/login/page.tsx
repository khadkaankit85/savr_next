"use client";

import type React from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { Loader, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleGoogleBtn = () => {
    if (!email || !password) return
    document.cookie = "user-signup-intent=login; max-age:60; path=/"
    signIn("google", { email, password });
  };

  const handleFacebookBtn = () => {
    signIn("facebook");
  };

  const customLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsFetching(true);
    setErrMsg("");
    if (email && password) {
      const result = await signIn("textfield-google-login", {
        email,
        password,
        redirect: false
      });
      if (result?.error) {
        if (result.status === 401) {
          setErrMsg("Invalid username or password");
        } else {
          setErrMsg(result.error);
        }
      } else {
        window.location.href = "/dashboard";
      }
    }
    setIsFetching(false);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-sm">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Link href="/" className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Savr</span>
            </Link>
            <div className="absolute top-4 right-4">
              <ThemeToggle />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email to sign in to your account
            </p>
          </div>
          <div className="mt-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {errMsg && <p className="text-sm text-red-600">{errMsg}</p>}
              <Button
                onClick={customLogin}
                type="submit"
                className="w-full"
                disabled={isFetching}
              >
                {isFetching && <Loader className="spin" />}
                Sign In
              </Button>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-4">
                <Button
                  variant="outline"
                  onClick={handleGoogleBtn}
                  className="w-full"
                >
                  Google
                </Button>
                {/*
                 *
                <Button
                  onClick={handleFacebookBtn}
                  variant="outline"
                  className="w-full"
                >
                  Facebook
                </Button>
                 */}
              </div>
            </div>
            <div className="mt-6 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
