"use client";

import { motion } from "framer-motion";
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Schedule as ScheduleIcon,
  Public as GlobeIcon,
} from "@mui/icons-material";

const offices = [
  {
    country: "India",
    badge: "Headquarters",
    city: "Chennai",
    address: "No 88 Ram Nagar 6th St, Velachery\nChennai-600042, Tamil Nadu",
    phone: "+91 93618 01926",
    phone2: "044-35100366",
    email: "info@cannymindstech.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM IST",
    color: "from-blue-500 to-cyan-500",
    flag: "🇮🇳",
  },
  {
    country: "United States",
    badge: "North America",
    city: "Houston, Texas",
    address: "17350 State Highway 249, Suite 220\nHouston, TX-77064",
    phone: "+1 (281) 810-1926",
    email: "usa@cannymindstech.com",
    hours: "Mon-Fri: 9:00 AM - 5:00 PM CST",
    color: "from-purple-500 to-pink-500",
    flag: "🇺🇸",
  },
  {
    country: "Nigeria",
    badge: "West Africa",
    city: "Lagos",
    address: "Victoria Island\nLagos, Nigeria",
    phone: "+234 (0) 813 618 0192",
    email: "nigeria@cannymindstech.com",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM WAT",
    color: "from-green-500 to-emerald-500",
    flag: "🇳🇬",
  },
];

export default function GlobalOfficesNew() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Our Global Offices
            </h2>
            <p className="text-lg text-gray-600">
              Strategic offices positioned to provide 24/7 support and local expertise
            </p>
          </motion.div>
        </div>

        {/* Office Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {offices.map((office, index) => (
            <motion.div
              key={office.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-lg p-6 border border-gray-200 h-full">
                {/* Country & Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{office.country}</h3>
                    <div className="text-primary font-medium text-sm">{office.city}</div>
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                    {office.badge}
                  </span>
                </div>

                {/* Contact Details */}
                <div className="space-y-3">
                  {/* Address */}
                  <div className="flex gap-2">
                    <LocationIcon className="text-primary flex-shrink-0 mt-0.5" sx={{ fontSize: 18 }} />
                    <div className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                      {office.address}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <PhoneIcon className="text-primary flex-shrink-0" sx={{ fontSize: 18 }} />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="text-sm text-gray-700 hover:text-primary transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                    {office.phone2 && (
                      <div className="flex items-center gap-2 ml-6">
                        <a
                          href={`tel:${office.phone2.replace(/\s/g, "")}`}
                          className="text-sm text-gray-700 hover:text-primary transition-colors"
                        >
                          {office.phone2}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-2">
                    <EmailIcon className="text-primary flex-shrink-0" sx={{ fontSize: 18 }} />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-sm text-gray-700 hover:text-primary transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                    <ScheduleIcon className="text-primary flex-shrink-0" sx={{ fontSize: 18 }} />
                    <div className="text-sm text-gray-600">{office.hours}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
