import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import SignInForm from "./auth/SignInForm";
import SignUpForm from "./auth/SignUpForm";

export default function CTA() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLoginOpen(true)}
        className="border border-cyan-600 cursor-pointer px-4 py-2 rounded-full">
        Login
      </button>
      <button
        onClick={() => setSignupOpen(true)}
        className="border border-cyan-600 bg-cyan-600 text-white cursor-pointer px-4 py-2 rounded-full">
        Get Started
      </button>

      {/* Login Dialog */}
      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
            <DialogDescription>
              <SignInForm setLoginOpen={setLoginOpen} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Signup Dialog */}
      <Dialog open={signupOpen} onOpenChange={setSignupOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Get Started</DialogTitle>
            <DialogDescription>
              <SignUpForm setSignupOpen={setSignupOpen} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
