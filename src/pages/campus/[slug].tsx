import Image from "next/image";
import { useRouter } from "next/router";

export default function CampusDetails() {
  const router = useRouter();

  if (!router.isReady) return <div className="text-white p-10">Loading...</div>;

  const { slug } = router.query;

  const campusData = [
    {
      slug: "library",
      title: "Campus Library",
      description: `
Our modern library serves as the academic heart of the campus. With thousands of books, 
digital study resources, peaceful reading zones, and group discussion rooms, it creates 
the perfect environment for learning. The library also offers extended hours during 
exam season, providing students with a quiet and focused study atmosphere.`,
      img: "/c3.jpg",
    },
    {
      slug: "sports",
      title: "Sports Complex",
      description: `
The sports complex offers indoor courts, a modern gym, running tracks, and outdoor 
grounds for cricket, football, and basketball. Regular tournaments and fitness programs 
help students stay active and balanced while developing teamwork and leadership skills.`,
      img: "/sport.jpg",
    },
    {
      slug: "hostel",
      title: "Hostel Life",
      description: `
Our canteen is a vibrant space offering freshly prepared meals, snacks, and beverages at 
affordable prices. It is a favorite hangout spot where students relax, socialize, and 
enjoy delicious food between classes.`,
      img: "/hostel.jpg",
    },
    {
      slug: "garden",
      title: "College Garden",
      description: `
The college garden offers a peaceful escape filled with greenery, flowers, and shaded 
seating areas. Students often come here to relax, read, meditate, or enjoy the refreshing 
environment after a long academic day.`,
      img: "/lab.jpg",
    },
  ];

  const data = campusData.find((item) => item.slug === slug);

  if (!data) return <div className="text-white p-10">No details found</div>;

  return (
    <div className="p-10 bg-[#071226] text-white min-h-screen">
      <div className="flex flex-col md:flex-row gap-10 items-start">

        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={data.img}
            width={600}
            height={400}
            alt={data.title}
            className="rounded-2xl shadow-2xl object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>

          <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
            {data.description}
          </p>

          <button
            onClick={() => router.back()}
            className="mt-8 px-6 py-2 bg-yellow-500 text-black rounded-lg 
                       font-semibold hover:bg-yellow-400 transition"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}

