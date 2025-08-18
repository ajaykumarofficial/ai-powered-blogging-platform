"use client";
import Link from "next/link";
import React from "react";

export default function SignUp() {
    return (
        <form className="max-w-sm mx-auto space-y-5">
            <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

            {/* Full Name */}
            <div>
                <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>

            {/* Email */}
            <div>
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Your email
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="name@example.com"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>

            {/* Password */}
            <div>
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>

            {/* Confirm Password */}
            <div>
                <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Confirm password
                </label>
                <input
                    type="password"
                    id="confirm-password"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full text-white bg-brand hover:bg-brand focus:ring-4 
        focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
                Sign Up
            </button>

            {/* Social login */}
            <div className="space-y-3">
            <p className="text-center">Already Have a Account? <Link href={'/auth/sign-in'} className="text-brand underline" >Sign in</Link></p>
                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-gray-100"
                >
                    <img src="/google.svg" alt="Google" className="w-5 h-5" />
                    Sign up with Google
                </button>
                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-gray-100"
                >
                    <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
                    Sign up with Facebook
                </button>
            </div>
        </form>
    );
}
