import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
          <h1 className="text-2xl text-white">Resap<span className="text-[#df6853] font-bold">Resep</span></h1>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Open an account in minutes, get full financial control for much longer.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-[#df6853] hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-[#df6853] hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-[#df6853] hover:text-white transition"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Mobile</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">How we work?</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-bold mb-3">Information</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Help/FAQ</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Affiliates</a></li>
            <li><a href="#">Hotel owners</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="font-bold mb-3">More</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Recipe</a></li>
            <li><a href="#">Gallery</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
        <p>@2025 - Chef&apos;s Kitchen. Distributed By ThemeWagon and Developed by GetNextjsTemplates</p>
        <div className="flex gap-5 mt-3 md:mt-0">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & conditions</a>
        </div>
      </div>
    </footer>
  );
}
