"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowBack, Search } from "@mui/icons-material";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-6">
            <div className="text-center max-w-lg">
                {/* Animated 404 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="relative mb-8"
                >
                    <span className="text-[10rem] font-extrabold leading-none bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent select-none">
                        404
                    </span>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Page Not Found
                    </h1>
                    <p className="text-gray-600 mb-10 leading-relaxed">
                        The page you're looking for doesn't exist or has been moved.
                        Let's get you back on track.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link href="/">
                        <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-all inline-flex items-center gap-2 shadow-lg shadow-primary/25">
                            <Home fontSize="small" />
                            Go Home
                        </button>
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-primary hover:text-primary transition-all inline-flex items-center gap-2"
                    >
                        <ArrowBack fontSize="small" />
                        Go Back
                    </button>
                    <Link href="/contact">
                        <button className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-primary hover:text-primary transition-all inline-flex items-center gap-2">
                            <Search fontSize="small" />
                            Contact Us
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
