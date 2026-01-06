import Link from "next/link";
import { Hexagon, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-primary rounded-lg">
                <Hexagon className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-display font-bold">Beehive Web Designs</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Building sweet digital experiences from the heart of the Beehive State. 
              We specialize in static sites and high-converting Shopify stores.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Static Websites</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Shopify Development</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">UI/UX Design</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">SEO Optimization</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm">Pricing</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div> */}
        </div>
        
        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Beehive Web Designs. Made with ❤️ in Utah.
          </p>
        </div>
      </div>
    </footer>
  );
}
