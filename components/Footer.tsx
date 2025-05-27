import { Mail, Phone, Copyright } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#bb48e8] text-gray-200">
      <div className="flex flex-col md:flex-row justify-between gap-10 max-w-6xl mx-auto px-4 py-10">
        x{' '}
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
            Helping small businesses simplify <br /> financial management
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
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#our-Services" className="hover:underline">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Contact Us @ dedicated email & Phone number
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Key Features</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/profit" className="hover:underline">
                Real-Time Profit Tracking
              </Link>
            </li>
            <li>
              <Link href="/inventory" className="hover:underline">
                Smart Inventory Management
              </Link>
            </li>
            <li>
              <Link href="/expenses" className="hover:underline">
                Automated Expenses Tracking
              </Link>
            </li>
            <li>
              <Link href="/invoice" className="hover:underline">
                Instant Invoicing & Receipt
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Financial Alerts & Insights
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-200" />

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
