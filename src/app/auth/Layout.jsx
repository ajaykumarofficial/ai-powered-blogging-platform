"use client";
import React from "react";

export default function AuthLayout({ children }) {
    return (
        <div
            className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center overflow-hidden"
            style={{ backgroundImage: "url('/slider.jpg')" }}
        >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/20"></div>

            {/* Decorative blurred glows */}
         

            {/* Auth form card */}
            <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 
                border border-white/40 transition duration-300 hover:scale-[1.02]">
                
                {children}
            </div>
        </div>
    );
}
