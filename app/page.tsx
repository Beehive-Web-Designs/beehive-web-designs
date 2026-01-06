"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowRight, Code2, Hexagon, Layout, Rocket, ShoppingCart, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    try {
      const response = await fetch("/api/join-waitlist", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to join the waiting list");
      }

      // Placeholder: You can add toast notification or success message here
      toast.success("Thank you for joining the waiting list!", {
        position: "top-center",
      });
      setEmail("");

    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to join the waiting list. Please try again later.", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-8 sm:py-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--color-amber-500)_0%,transparent_100%)] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
            >
              <Hexagon className="h-4 w-4" />
              <span>Based in the Beehive State</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground max-w-4xl"
            >
              Building <span className="text-primary italic">Sweet</span> Digital Experiences for Modern Brands
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl text-muted-foreground max-w-2xl"
            >
              We provide comprehensive web design, development, hosting, and SEO services to help your business grow online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              {/* <Button asChild size="lg" className="h-14 px-8 text-lg font-semibold">
                <Link href="#join-waitlist">Join the Waiting List</Link>
              </Button> */}
              {/* <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold">
                <Link href="/services">View Our Services</Link>
              </Button> */}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card border rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Join the Waiting List
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Be the first to know when we launch. Get early access to our web design, development, hosting, and SEO services.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12"
              />
              <Button type="submit" size="lg" className="h-12 px-8 font-semibold">
                Join the Waiting List
              </Button>
            </form>
          </div>
        </motion.div>



      </section>

      {/* Waiting List Section */}
      <section id="join-waitlist" className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card border rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Join the Waiting List
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Be the first to know when we launch. Get early access to our web design, development, hosting, and SEO services.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12"
              />
              <Button type="submit" size="lg" className="h-12 px-8 font-semibold">
                Join the Waiting List
              </Button>
            </form>
          </div>
        </motion.div> */}
      </section>

      {/* <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Layout className="h-8 w-8 text-primary" />}
            title="Static Websites"
            description="Lightning-fast, SEO-optimized static sites built with the latest technologies like Next.js."
          />
          <ServiceCard 
            icon={<ShoppingCart className="h-8 w-8 text-primary" />}
            title="Shopify Solutions"
            description="Custom Shopify themes and apps designed to drive sales and scale your e-commerce business."
          />
          <ServiceCard 
            icon={<Code2 className="h-8 w-8 text-primary" />}
            title="Custom Development"
            description="Tailored web applications and features built to solve your unique business challenges."
          />
        </div>
      </section>

      <section className="bg-muted/50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">Why Beehive?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <Feature 
              icon={<Zap className="h-10 w-10 text-primary" />}
              title="Speed"
              text="Our websites are built for performance, ensuring your users never wait."
            />
            <Feature 
              icon={<Rocket className="h-10 w-10 text-primary" />}
              title="SEO Ready"
              text="Search engine optimization is baked into every line of code we write."
            />
            <Feature 
              icon={<Hexagon className="h-10 w-10 text-primary" />}
              title="Local Expertise"
              text="Proudly serving Utah businesses with a personal touch."
            />
            <Feature 
              icon={<ArrowRight className="h-10 w-10 text-primary" />}
              title="Growth"
              text="We don't just build websites; we build engines for your business growth."
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl p-12 md:p-20 text-primary-foreground text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Hexagon className="h-64 w-64 rotate-12" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Ready to join the colony?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Let's build something incredible together. Get in touch for a free consultation and quote.
          </p>
          <Button asChild variant="secondary" size="lg" className="h-14 px-10 text-lg font-bold">
            <Link href="/contact">Work With Us</Link>
          </Button>
        </div>
      </section> */}
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-8 rounded-2xl border bg-card hover:shadow-xl transition-all"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-display font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      <Link href="/services" className="mt-6 inline-flex items-center text-primary font-bold hover:underline">
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </motion.div>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-display font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{text}</p>
    </div>
  );
}
