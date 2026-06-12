import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UtahBadWebsitesContent() {
  return (
    <div className="space-y-8 text-muted-foreground leading-relaxed">
      <p className="text-lg text-text-label">
        You have spent years building trust in your community. You show up early,
        you do great work, and your customers refer their friends. Then someone
        in Salt Lake City, Provo, or Ogden searches for what you offer, lands on
        your website, and leaves within ten seconds without calling. That is not
        a marketing problem. That is a website problem — and it is costing Utah
        small businesses real money every single day.
      </p>

      <p>
        At Beehive Web Designs, we work with small businesses across the Wasatch
        Front and beyond — from contractors in Davis County to salons in Utah
        County to professional services in the Salt Lake Valley. The pattern is
        always the same: the owner knows their website is not great, but they are
        not sure what is actually broken or what to fix first. This guide breaks
        it down so you can stop losing customers and start turning your site into
        a sales tool.
      </p>

      <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Your Website Is Your{" "}
        <span className="text-honey-text">Digital Storefront</span>
      </h2>

      <p>
        Think about your physical location. You would not leave the front door
        stuck, the lights flickering, and the sign faded from 2009. Yet thousands
        of Utah businesses run websites that do exactly that online. Shoppers
        judge credibility in seconds. If your site looks neglected, they assume
        your business is too — even when you are the better choice.
      </p>

      <p>
        Worse, they do not tell you they left. They just click back to Google and
        hire the competitor with the cleaner site, the faster load time, and the
        obvious &quot;Call Now&quot; button above the fold. You never get the
        lead, so you never know you lost it.
      </p>

      <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-foreground pt-4">
        1. Slow or Broken on Mobile
      </h2>

      <p>
        More than half of local searches happen on phones. If your site takes
        four seconds to load, pinches awkwardly on a small screen, or has buttons
        too tiny to tap, you are invisible to the customers who are ready to buy
        right now — standing in a parking lot, comparing three options before they
        pick up the phone.
      </p>

      <p>
        <strong className="text-foreground">How to fix it:</strong> Test your site
        on your own phone on cellular data, not office Wi‑Fi. Run Google&apos;s
        PageSpeed Insights. Compress large images, remove unused plugins if you
        are on WordPress, and make sure text is readable without zooming. Mobile
        performance is not a nice-to-have in Utah&apos;s competitive local markets;
        it is the baseline.
      </p>

      <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-foreground pt-4">
        2. Outdated Design and Missing Trust Signals
      </h2>

      <p>
        Stock photos from 2015, cluttered layouts, and generic &quot;Welcome to
        our website&quot; copy do not build confidence. Utah customers want to
        see real work, real reviews, and real people. They want to know you are
        licensed, insured, local, and active — not a ghost ship that might not
        answer the phone.
      </p>

      <p>
        <strong className="text-foreground">How to fix it:</strong> Use current
        photos of your team and projects. Add Google reviews or testimonials with
        names and cities when possible. Display your service area clearly
        (&quot;Serving Salt Lake City, Sandy, Draper, and surrounding areas&quot;).
        Update your copyright year. Small trust signals add up fast.
      </p>

      <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-foreground pt-4">
        3. Invisible on Google (Local SEO)
      </h2>

      <p>
        A pretty website nobody finds is still a bad website. If you are not
        showing up for &quot;your service + your city,&quot; you are handing
        leads to businesses with weaker offerings but stronger online presence.
        Common gaps we see: no dedicated service pages, missing or inconsistent
        NAP (name, address, phone) across the web, thin content, and a Google
        Business Profile that does not match the website.
      </p>

      <p>
        <strong className="text-foreground">How to fix it:</strong> Claim and
        optimize your Google Business Profile. Create one page per core service
        with Utah-specific language (without stuffing keywords). Add your city
        and neighborhoods naturally in titles and headings. Make sure your phone
        number and address match everywhere — website, GBP, Yelp, Facebook. Local
        SEO is a system, not a single checkbox.
      </p>

      <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-foreground pt-4">
        4. Confusing Navigation and Weak CTAs
      </h2>

      <p>
        Visitors should never wonder what to do next. If they have to hunt for
        pricing guidance, services, or contact info, they will not hunt long. One
        clear path — see what you do, believe you can do it, contact you — beats
        ten menu items and three competing buttons.
      </p>

      <p>
        <strong className="text-foreground">How to fix it:</strong> Put a primary
        CTA in the header: &quot;Get a Free Quote,&quot; &quot;Book a
        Consultation,&quot; or &quot;Call (xxx) xxx-xxxx.&quot; Repeat it at the
        end of every key section. Cut menu clutter. Every page should answer:
        what you do, who it is for, and how to start.
      </p>

      <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-foreground pt-4">
        5. Broken Forms and Contact Friction
      </h2>

      <p>
        We have audited Utah sites where the contact form silently fails, emails
        go to an old inbox, or the only option is a generic info@ address with a
        48-hour reply time. In 2026, that is unacceptable. People comparing
        emergency plumbers or same-week contractors are not waiting two days for
        a callback.
      </p>

      <p>
        <strong className="text-foreground">How to fix it:</strong> Submit your own
        form monthly. Add click-to-call on mobile. Show business hours and
        response expectations. If you use a third-party form tool, confirm
        notifications actually arrive. Friction at the finish line wastes all your
        other improvements.
      </p>

      <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-foreground pt-4">
        6. No Analytics — Flying Blind
      </h2>

      <p>
        If you do not know how many people visit, which pages they leave from, or
        whether anyone clicks your phone number, you cannot improve. Owners often
        say &quot;the website does not work&quot; but have no data on what
        &quot;not working&quot; means.
      </p>

      <p>
        <strong className="text-foreground">How to fix it:</strong> Install Google
        Analytics 4 (or privacy-friendly analytics) and Google Search Console.
        Check them monthly. Look for high-traffic pages with low conversions —
        that is where you fix first.
      </p>

      {/* Mid-article CTA */}
      <div className="my-12 rounded-2xl border border-border bg-gradient-to-br from-honey/10 to-transparent p-8 sm:p-10 text-center">
        <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-foreground mb-3">
          Not sure where to start?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          We offer free consultations for Utah small businesses ready to turn their
          website into a customer-generating asset — design, hosting, and SEO
          under one roof.
        </p>
        <Button
          asChild
          className="bg-honey hover:bg-honey-light text-primary-foreground font-semibold rounded-full px-8"
        >
          <Link href="/contact">
            Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Your Fix-It-This-Week Checklist
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
        <li>Run PageSpeed Insights and fix the top three mobile issues.</li>
        <li>Replace one outdated hero image with a real photo of your work.</li>
        <li>Audit Google Business Profile vs. website — names, phone, hours must match.</li>
        <li>Add or fix one service page targeting your city + main offer.</li>
        <li>Put one clear CTA in the header and footer on every page.</li>
        <li>Test your contact form and confirm you receive the email.</li>
        <li>Install Analytics and Search Console if missing.</li>
      </ul>

      <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-foreground pt-4">
        When It Makes Sense to Hire Help
      </h2>

      <p>
        DIY fixes go far — until they do not. If your site is on outdated
        technology, built on a bloated template, or spread across five vendors
        (designer, host, SEO person, form tool, analytics), you are paying in
        time and lost leads. A unified rebuild often pays for itself with a
        handful of new customers.
      </p>

      <p>
        That is why we built Beehive Web Designs for small businesses in Utah: one
        team for custom design, reliable hosting, and SEO that targets the
        searches your customers actually make. No finger-pointing between
        contractors. No mystery invoices. Just a site that loads fast, looks
        credible, and makes it easy to choose you.
      </p>

      <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Stop Losing Customers You Never Knew You Had
      </h2>

      <p>
        Every week you wait, competitors with better websites capture the leads
        that should have been yours. You do not need a million-dollar marketing
        budget. You need a site that works on mobile, earns trust, shows up locally,
        and makes contacting you effortless.
      </p>

      <p>
        Ready to fix it?{" "}
        <Link href="/contact" className="text-honey-text underline underline-offset-2 hover:text-honey-dark transition-colors">
          Reach out for a free consultation
        </Link>{" "}
        and we will walk through what is holding your site back — and what a
        clear path forward looks like for your business.
      </p>
    </div>
  );
}
