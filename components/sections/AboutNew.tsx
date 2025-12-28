"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Verified as VerifiedIcon,
  Public as GlobalIcon,
  TrendingUp as GrowthIcon,
  Security as SecurityIcon,
  Groups as TeamIcon,
  SupportAgent as SupportIcon,
  ArrowForward as ArrowIcon,
} from "@mui/icons-material";

const stats = [
  { value: "20+", label: "Years of Excellence", icon: GrowthIcon, color: "text-blue-600" },
  { value: "500+", label: "Happy Clients", icon: TeamIcon, color: "text-green-600" },
  { value: "4", label: "Global Offices", icon: GlobalIcon, color: "text-purple-600" },
  { value: "24/7", label: "Expert Support", icon: SupportIcon, color: "text-orange-600" },
];

const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    image: "/certifications/iso-9001-2015.png"
  },
  {
    name: "ISO 15489:2016",
    description: "Records Management",
    image: "/certifications/iso-15489-2016.png"
  },
  {
    name: "FDA 21 CFR Part 11",
    description: "Compliance Ready",
    image: "/certifications/fda-21-cfr-part-11.png"
  },
  {
    name: "ISO 22716:2007",
    description: "Cosmetics GMP",
    image: "/certifications/iso-22716-2007.jpg"
  },
];

export default function AboutNew() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              About CannyMinds
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              CannyMinds Technology Solutions is a leading provider of enterprise software solutions,
              specializing in digital transformation, AI automation, and business process optimization.
              With offices in India, USA, and Nigeria, we serve clients across healthcare,
              manufacturing, banking, government, and education sectors with ISO-certified,
              FDA-compliant solutions.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center"
                >
                  <IconComponent className="text-primary mx-auto mb-3" sx={{ fontSize: 32 }} />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certifications & Compliance</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert) => {
                return (
                  <div
                    key={cert.name}
                    className="bg-white border border-gray-200 rounded-lg p-4 text-center"
                  >
                    <div className="relative w-full h-32 mb-3 flex items-center justify-center">
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">{cert.name}</div>
                    <div className="text-xs text-gray-500">{cert.description}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <Link href="/about">
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                Learn More About Us
                <ArrowIcon fontSize="small" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
