import Image from "next/image";

interface TestimonialProps {
  name: string;
  role: string;
  message: string;
  img: string;
}

export default function TestimonialCard({ name, role, message, img }: TestimonialProps) {
  return (
    <div className="bg-[#081c32] p-6 rounded-2xl shadow-lg border border-white/10 
                    hover:shadow-2xl hover:-translate-y-1 transition text-white">
      
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-400">
          <Image 
            src={img} 
            alt={name} 
            width={56} 
            height={56} 
            className="object-cover w-full h-full"
          />
        </div>

        {/* Name & role */}
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-300">{role}</p>
        </div>
      </div>

      {/* Message */}
      <p className="mt-4 text-gray-300 leading-relaxed">“{message}”</p>

      {/* Stars */}
      <div className="mt-3 flex gap-1 text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
    </div>
  );
}
