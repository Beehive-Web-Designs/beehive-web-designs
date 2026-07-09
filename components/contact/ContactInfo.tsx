"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { BeeMark } from "@/components/bee-logo";

const contactInfo = [
  {
    id: "email",
    icon: Mail,
    title: "Email Us",
    value: "spencer@beehivewebdesigns.com",
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
      <h2 className="text-3xl font-extrabold tracking-tight mb-8">
        Get in <span className="text-honey">touch</span>
      </h2>

      <div className="space-y-6">
        {contactInfo.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-honey/15 flex items-center justify-center">
              <item.icon className="h-5 w-5 text-honey-dark" />
            </div>
            <div>
              <h3 className="font-bold text-sm">{item.title}</h3>
              <p className="text-honey-dark text-sm font-medium">
                {item.value}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative bee */}
      <div className="hidden lg:flex mt-12 items-center justify-center">
        <div className="w-24 h-24 rounded-3xl bg-honey flex items-center justify-center">
          <BeeMark className="w-18 h-18 text-white" />
        </div>
      </div>
    </FadeIn>
  );
}
