"use client";

import { Mail, Phone, MapPin, Clock, MessageSquare, Hexagon } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const contactInfo = [
  {
    id: "email",
    icon: Mail,
    title: "Email Us",
    value: "spencer.s.hodson@gmail.com",
    desc: "We respond within 24 hours on business days.",
  },
  {
    id: "phone",
    icon: Phone,
    title: "Call Us",
    value: "(949) 709-9241",
    desc: "24/7. We love hearing from you.",
  },
  {
    id: "location",
    icon: MapPin,
    title: "Location",
    value: "Serving Businesses in the USA and Canada",
    desc: "We work remotely with clients across North America.",
  },
  {
    id: "hours",
    icon: Clock,
    title: "Business Hours",
    value: "24/7",
    desc: "We are available to help you with your website 24/7.",
  },
];

export function ContactInfo() {
  return (
    <FadeIn>
      <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight mb-8">
        Get In <span className="gradient-text">Touch</span>
      </h2>

      <div className="space-y-6">
        {contactInfo.map((item) => (
          <div key={item.id} className="flex gap-4 group">
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-honey/10 flex items-center justify-center group-hover:bg-honey/20 transition-colors">
              <item.icon className="h-5 w-5 text-honey" />
            </div>
            <div>
              <h4 className="font-[family-name:var(--font-syne)] font-bold text-sm">
                {item.title}
              </h4>
              <p className="text-honey text-sm font-medium font-[family-name:var(--font-space-grotesk)]">
                {item.value}
              </p>
              <p className="text-xs text-[#8A8A9A] mt-0.5 font-[family-name:var(--font-space-grotesk)]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative hex */}
      <div className="hidden lg:flex mt-12 items-center justify-center">
        <div className="relative w-48 h-48">
          <Hexagon className="w-full h-full text-honey/10 stroke-[0.5]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-3xl bg-honey/10 flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-honey" />
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
