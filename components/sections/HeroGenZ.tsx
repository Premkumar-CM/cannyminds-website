"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowForward as ArrowIcon,
  CheckCircle as CheckIcon,
} from "@mui/icons-material";

export default function HeroGenZ() {
  return (
    <section className="relative bg-white pt-32 pb-20 overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Enterprise Software Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Digital Transformation for
              <br />
              <span className="text-primary">Modern Enterprises</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Comprehensive document management, HR automation, and business process solutions.
              Serving 500+ organizations worldwide since 2003.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link href="/contact">
                <button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-primary/25">
                  Request Demo
                  <ArrowIcon fontSize="small" />
                </button>
              </Link>
              <Link href="/#solutions">
                <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-primary hover:text-primary transition-colors">
                  View Solutions
                </button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <CheckIcon className="text-green-600" fontSize="small" />
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="text-green-600" fontSize="small" />
                <span>FDA 21 CFR Part 11 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="text-green-600" fontSize="small" />
                <span>20+ Years Experience</span>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-600">Active Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-sm text-gray-600">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </motion.div>

          {/* Client Logos Placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-20 pt-12 border-t border-gray-200"
          >
            <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wide font-semibold">
              Trusted by Leading Organizations
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-40">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-400 font-bold text-sm">CLIENT {i}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
