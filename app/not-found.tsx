"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, ArrowBack } from "@mui/icons-material";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="py-6 px-6 lg:px-12">
        <Link href="/">
          <div className="relative w-40 h-12">
            <Image
              src="/logo.png"
              alt="CannyMinds"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <button className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
                <Home fontSize="small" />
                Go Home
              </button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-gray-400 transition-colors inline-flex items-center gap-2"
            >
              <ArrowBack fontSize="small" />
              Go Back
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} CannyMinds Technology Solutions</p>
      </footer>
    </div>
  );
}
