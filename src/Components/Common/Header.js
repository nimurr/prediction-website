'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname(); // Get current route

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Submit Prediction', href: '/submit-prediction' },
        { label: 'Casino Reviews', href: '/casino-reviews' },
        { label: 'Score Predictions', href: '/score-predictions' },
        { label: 'Price Predictions', href: '/price-predictions' },
        { label: 'Poker', href: '/join-poker-tornament' },
    ];

    return (
        <header className="w-full shadow-md bg-white sticky top-0 z-50 py-2">
            <div className="contiainer mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <div className="flex items-center gap-2 text-[#4c1d95] font-bold text-xl">
                        <img src="/Images/Auth/Header-logo.png" alt="logo" className='max-w-34' />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${isActive
                                    ? 'text-[#4c1d95] font-semibold'
                                    : 'text-gray-700 hover:text-[#4c1d95]'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}

                    <div className="flex gap-2 ml-4">
                        <Link href="/login">
                            <button className="px-4 cursor-pointer py-3 border border-[#4c1d95] text-[#4c1d95] rounded-md hover:bg-purple-50 text-sm font-medium">
                                Log In
                            </button>
                        </Link>
                        <Link href="/register">
                            <button className="px-4 py-3 cursor-pointer bg-[#4c1d95] text-white rounded-md hover:bg-[#4c1d95] text-sm font-medium">
                                Register
                            </button>
                        </Link>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-2xl text-purple-700"
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t px-4 pb-4">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`block py-2 text-sm ${isActive
                                    ? 'text-[#4c1d95] font-semibold'
                                    : 'text-gray-700 hover:text-[#4c1d95]'
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <div className="flex flex-col gap-2 mt-3">
                        <Link href="/login">
                            <button className="w-full px-4 py-2 border border-[#4c1d95] text-[#4c1d95] rounded-md hover:bg-purple-50 text-sm">
                                Log In
                            </button>
                        </Link>
                        <Link href="/register">
                            <button className="w-full px-4 py-2 bg-[#4c1d95] text-white rounded-md hover:bg-purple-800 text-sm">
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
