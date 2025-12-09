import { Phone } from "lucide-react";
import Link from "next/link";

export const TopNavbar = () => {
  return (
    <div className="bg-[#0E7A80] w-full text-white py-1">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Left side - Phone */}
        <div className="flex items-center gap-2">
          <Phone size={18} className="text-white" />
          <span className="text-sm">+880 1517-806044</span>
        </div>

        {/* Right side - Contact Link */}
        <div>
          <Link href="/contact" className="text-sm hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
