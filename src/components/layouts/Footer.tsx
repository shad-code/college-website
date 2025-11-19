export default function Footer() {
  return (
    <footer className="bg-[#0A2A43] text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="font-bold text-lg">Premier Academic University</h3>
          <p className="text-sm opacity-80">Shaping the future through quality education.</p>
        </div>

        <div className="text-sm opacity-90">
          © {new Date().getFullYear()} Premier Academic University. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
