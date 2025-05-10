import { Mail, Phone, Copyright } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#bb48e8] text-gray-200">
      {/* Upper Footer */}
      <div className="flex flex-col md:flex-row justify-between gap-10 max-w-6xl mx-auto px-4 py-10">
        {/* Column 1 - Logo and Contact */}
        <div>
          <div className="flex items-center mb-4">
            <Image
              src="/flowpal-3.png"
              alt="FlowPal Logo"
              width={70}
              height={50}
            />
          </div>

          <p className="mb-4">
            Helping small businesses simplify <br /> finacial management
            effortlessly.
          </p>

          <div className="flex items-center gap-1 mb-2">
            <Mail className="w-4 h-4 text-gray-200" />
            <a href="mailto:flowpal@gmail.com" className="hover:underline">
              flowpal@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4 text-gray-200" />
            <span>+235982448877</span>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>

          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                Features
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Key Features */}
        <div>
          <h3 className="text-xl font-bold mb-4">Key Features</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              Real-Time Profit Tracking
            </li>
            <li className="flex items-center gap-2">
              Smart Inventory Management
            </li>
            <li className="flex items-center gap-2">
              Automated Expenses Tracking
            </li>
            <li className="flex items-center gap-2">
              Instant Invoicing & Receipt
            </li>
            <li className="flex items-center gap-2">
              Fincial Alerts & Insights
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-gray-200" />

      {/* Lower Footer */}
      <div className="max-w-6xl mx-auto py-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <Copyright className="w-4 h-4" />
          <span>2025 FlowPal. All Rights Reserved.</span>
        </div>
        <div className="flex gap-4">
          <Link href="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
