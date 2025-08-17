import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Recently at the Job Board */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-3">
                        Recently at the Job Board
                    </h2>
                    <p className="text-sm mb-2">
                        This feed has moved and will be deleted soon.
                    </p>
                    <a
                        href="#"
                        className="text-blue-400 hover:underline text-sm"
                    >
                        Please update your subscription now.
                    </a>
                </div>

                {/* ProBlogger Top Articles */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-3">
                        ProBlogger Top Articles
                    </h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">How to Start a Blog</a></li>
                        <li><a href="#" className="hover:underline">How to Create Great Blog Content</a></li>
                        <li><a href="#" className="hover:underline">How to Find Readers for Your Blog</a></li>
                        <li><a href="#" className="hover:underline">7 Strategies to Build Community on Your Blog</a></li>
                        <li><a href="#" className="hover:underline">How to Make Money Blogging</a></li>
                        <li><a href="#" className="hover:underline">5 Ways to Make Your Blogging Life Easier</a></li>
                    </ul>
                </div>

                {/* Top Resources */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-3">
                        Top Resources
                    </h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">31 Days to Build a Better Blog</a></li>
                        <li><a href="#" className="hover:underline">ProBlogger’s Guide to Your First Week of Blogging</a></li>
                        <li><a href="#" className="hover:underline">ProBlogger’s Guide to Blogging for Your Business</a></li>
                        <li><a href="#" className="hover:underline">Blog Wise: How to Do More with Less</a></li>
                        <li><a href="#" className="hover:underline">The Blogger’s Guide to Online Marketing</a></li>
                    </ul>
                </div>

                {/* Recommended Blogging Resources */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-3">
                        Recommended Blogging Resources
                    </h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Blog</a></li>
                        <li><a href="#" className="hover:underline">Podcast</a></li>
                        <li><a href="#" className="hover:underline">eBooks</a></li>
                        <li><a href="#" className="hover:underline">Resources</a></li>
                        <li><a href="#" className="hover:underline">Jobs</a></li>
                        <li><a href="#" className="hover:underline">Courses</a></li>
                        <li><a href="#" className="hover:underline">Speaking</a></li>
                        <li><a href="#" className="hover:underline">Privacy</a></li>
                        <li><a href="#" className="hover:underline">Terms</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Ai Blogs. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
