"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";

type FormState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: "",
  });
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "lump-sum",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: "submitting", message: "" });

    const form = e.currentTarget;
    const formDataObj = new FormData(form);

    // Create URLSearchParams from FormData
    const params = new URLSearchParams();
    params.append("form-name", "contact");

    // Append all form fields
    formDataObj.forEach((value, key) => {
      // Skip the bot-field
      if (key !== "bot-field") {
        params.append(key, value.toString());
      }
    });

    try {
      // Submit to the current page path (Netlify forms work with any path)
      const response = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
        redirect: "manual", // Prevent automatic redirect following
      });

      // Netlify forms return 200 on success, or 302 redirect
      // Both indicate successful submission
      if (response.ok || response.status === 302 || response.status === 0) {
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "lump-sum",
          message: "",
        });
        setFormState({
          status: "success",
          message: "Thank you! We'll get back to you within 24 hours.",
        });
      } else {
        throw new Error(`Form submission failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormState({
        status: "error",
        message: "Something went wrong. Please try again or email us directly.",
      });
    }
  };

  return (
    <FadeIn delay={0.2}>
      <div className="rounded-2xl border border-[rgba(245,166,35,0.1)] bg-[#1A1A2E]/60 backdrop-blur-sm p-8 sm:p-10">
        <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold mb-2">
          Send Us a Message
        </h3>
        <p className="text-sm text-[#8A8A9A] mb-8 font-[family-name:var(--font-space-grotesk)]">
          Fill out the form below and we&apos;ll get back to you within 24 hours.
          No spam, no pressure — just a friendly conversation.
        </p>

        <form
          name="contact"
          method="POST"
          action="/contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="space-y-5"
          onSubmit={handleSubmit}
        >
          {/* Hidden field for Netlify bot protection */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don't fill this out if you're human:{" "}
              <input name="bot-field" />
            </label>
          </p>

          {/* Success/Error Messages */}
          {formState.status === "success" && (
            <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
              <p className="text-sm text-green-400 font-[family-name:var(--font-space-grotesk)]">
                {formState.message}
              </p>
            </div>
          )}

          {formState.status === "error" && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
              <p className="text-sm text-red-400 font-[family-name:var(--font-space-grotesk)]">
                {formState.message}
              </p>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-2 text-[#B0B0C0]"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="John"
                className="w-full rounded-xl border border-[rgba(245,166,35,0.15)] bg-[#0F0F1A]/60 px-4 py-3 text-sm text-[#F0EDE6] placeholder:text-[#555] focus:border-honey focus:outline-none focus:ring-1 focus:ring-honey/50 transition-colors font-[family-name:var(--font-space-grotesk)]"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-2 text-[#B0B0C0]"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Smith"
                className="w-full rounded-xl border border-[rgba(245,166,35,0.15)] bg-[#0F0F1A]/60 px-4 py-3 text-sm text-[#F0EDE6] placeholder:text-[#555] focus:border-honey focus:outline-none focus:ring-1 focus:ring-honey/50 transition-colors font-[family-name:var(--font-space-grotesk)]"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-[#B0B0C0]"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full rounded-xl border border-[rgba(245,166,35,0.15)] bg-[#0F0F1A]/60 px-4 py-3 text-sm text-[#F0EDE6] placeholder:text-[#555] focus:border-honey focus:outline-none focus:ring-1 focus:ring-honey/50 transition-colors font-[family-name:var(--font-space-grotesk)]"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-2 text-[#B0B0C0]"
              >
                Phone <span className="text-[#555]">(optional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 000-0000"
                className="w-full rounded-xl border border-[rgba(245,166,35,0.15)] bg-[#0F0F1A]/60 px-4 py-3 text-sm text-[#F0EDE6] placeholder:text-[#555] focus:border-honey focus:outline-none focus:ring-1 focus:ring-honey/50 transition-colors font-[family-name:var(--font-space-grotesk)]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium mb-2 text-[#B0B0C0]"
            >
              What service are you interested in?
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-[rgba(245,166,35,0.15)] bg-[#0F0F1A]/60 px-4 py-3 text-sm text-[#F0EDE6] focus:border-honey focus:outline-none focus:ring-1 focus:ring-honey/50 transition-colors font-[family-name:var(--font-space-grotesk)]"
            >
              <option value="lump-sum" className="bg-[#1A1A2E]">
                Lump Sum
              </option>
              <option value="monthly-subscription" className="bg-[#1A1A2E]">
                Monthly Subscription
              </option>
              <option value="other" className="bg-[#1A1A2E]">
                Custom website
              </option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-[#B0B0C0]"
            >
              Tell us about your project
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="What's your business about? What are your goals for the website? Any specific features or requirements?"
              className="w-full rounded-xl border border-[rgba(245,166,35,0.15)] bg-[#0F0F1A]/60 px-4 py-3 text-sm text-[#F0EDE6] placeholder:text-[#555] focus:border-honey focus:outline-none focus:ring-1 focus:ring-honey/50 transition-colors resize-none font-[family-name:var(--font-space-grotesk)]"
            />
          </div>

          <Button
            type="submit"
            disabled={formState.status === "submitting"}
            className="cursor-pointer w-full bg-honey hover:bg-honey-light text-[#0F0F1A] font-bold rounded-full py-6 text-base glow-honey disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formState.status === "submitting" ? (
              "Sending..."
            ) : (
              <>
                Send Message <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>

          <p className="text-center text-xs text-[#555] font-[family-name:var(--font-space-grotesk)]">
            We respect your privacy. No spam, ever.
          </p>
        </form>
      </div>
    </FadeIn>
  );
}
