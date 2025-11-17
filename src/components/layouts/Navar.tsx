import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0A2A43] text-white px-10 py-4 flex justify-between items-center shadow-md z-50">
      
      {/* Logo + Title */}
      <div className="flex items-center gap-3">
    
        
        <div>
          <h1 className="text-lg font-bold">PREMIER ACADEMIC</h1>
          <p className="text-xs -mt-1 opacity-80">UNIVEST ARCHENTS</p>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-8 text-sm font-medium">
        <li className="hover:text-yellow-400 cursor-pointer">Admissions</li>
        <li className="hover:text-yellow-400 cursor-pointer">Academics</li>
        <li className="hover:text-yellow-400 cursor-pointer">Faculty</li>
        <li className="hover:text-yellow-400 cursor-pointer">Campus Life</li>
        <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
      </ul>

    </nav>
  );
}
