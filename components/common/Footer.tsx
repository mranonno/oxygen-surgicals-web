import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F3F5F9] text-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold  mb-3 bg-linear-to-r from-[#0E7A80] to-[#27568D] bg-clip-text text-transparent">
            Oxygen Surgicals
          </h2>
          <p className="text-sm text-gray-600">
            Supplier of medical equipment, oxygen cylinders, and surgical
            devices. We ensure quality, safety, and timely delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-[#0E7A80]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-[#0E7A80]">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/equipment" className="hover:text-[#0E7A80]">
                Equipment
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#0E7A80]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Contact Us
          </h3>
          <ul className="text-sm space-y-2 text-gray-600">
            <li>Email: oxygensurgicalsbd@gmail.com</li>
            <li>Phone: +880 1517-806044</li>
            <li>Location: Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-300 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Oxygen Surgicals. All rights reserved.
      </div>
    </footer>
  );
}
