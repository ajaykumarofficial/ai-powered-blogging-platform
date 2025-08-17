"use client";
import React from "react";

export default function SignIn() {
    return (
        <form className="max-w-sm mx-auto space-y-5">
            <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

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
                    Your password
                </label>
                <input
                    type="password"
                    id="password"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
                <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300"
                />
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">
                    Remember me
                </label>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full text-white bg-brand hover:bg-brand focus:ring-4 
        focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
                Login
            </button>

            {/* Social login */}
            <div className="space-y-3">
                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-gray-100"
                >
                    <img src="/google.svg" alt="Google" className="w-5 h-5" />
                    Continue with Google
                </button>
                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-gray-100"
                >
                    <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
                    Continue with Facebook
                </button>
            </div>
        </form>
    );
}
