import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className="w-full bg-[#0A2A43] text-white px-10 py-4 flex justify-between items-center shadow-md">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
           
             
          
          <div>
            <h1 className="text-lg font-bold">PREMIER ACADEMIC</h1>
            <p className="text-xs -mt-1 opacity-80">UNIVERSITY</p>
          </div>
        </div>

        {/* Navbar Links */}
        <ul className="flex gap-8 text-sm font-medium">
          <li className="hover:text-yellow-400 cursor-pointer">Admissions</li>
          <li className="hover:text-yellow-400 cursor-pointer">Academics</li>
          <li className="hover:text-yellow-400 cursor-pointer">Faculty</li>
          <li className="hover:text-yellow-400 cursor-pointer">Campus Life</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <header className="relative w-full h-[85vh]">
        
        {/* Background Image */}
        <Image
          src="/college.png"
          alt="College Campus"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2A43]/80 to-transparent"></div>

        {/* Text Content */}
        <div className="absolute top-1/2 -translate-y-1/2 left-10 md:left-20 max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome to Premier <br />
            Academic University 
          </h1>

          <p className="mt-4 text-lg opacity-90">
            Ranked among the top universities nationwide for academic excellence
          </p>

          {/* Button */}
          <button className="mt-6 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-3 rounded shadow-md transition">
            APPLY NOW
          </button>
        </div>
      </header>
    </div>
  );
}
