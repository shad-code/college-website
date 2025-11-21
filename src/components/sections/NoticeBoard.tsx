"use client";
import { useState, useEffect } from "react";
import { FaBullhorn } from "react-icons/fa"; // Make sure to install react-icons

interface Announcement {
  id: number;
  title: string;
  date: string;
  description: string;
}

export default function NoticeBoard() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    const latestAnnouncements: Announcement[] = [
      { id: 1, title: "Exam Schedule Released", date: "2025-11-20", description: "Check your timetable for the upcoming exams." },
      { id: 2, title: "Deadline Extended", date: "2025-11-18", description: "Assignment submission deadline extended to Nov 25." },
      { id: 3, title: "Guest Lecture", date: "2025-11-17", description: "Join the online lecture on AI innovations." },
      { id: 4, title: "Scholarship Announced", date: "2025-11-15", description: "Merit-based scholarship for top 10% students." },
      { id: 5, title: "Sports Meet Registration", date: "2025-11-14", description: "Register your team for the inter-college sports meet." },
    ];

    setAnnouncements(latestAnnouncements);
  }, []);

  return (
    <div className="bg-[#0b1f34]/70 rounded-3xl p-6 w-full lg:w-96 backdrop-blur-md shadow-2xl border border-yellow-400">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <FaBullhorn className="text-yellow-400 w-5 h-5" />
        <h4 className="text-lg text-yellow-300 font-bold uppercase tracking-wide">Notice Board</h4>
      </div>

      {/* Announcement List */}
      <ul className="space-y-4 max-h-72 overflow-y-auto pr-2">
        {announcements.map((item, idx) => (
          <li
            key={item.id}
            className={`p-3 rounded-lg transition-all duration-300 cursor-pointer 
              hover:bg-yellow-400/10 hover:translate-x-1
              ${idx === 0 ? "bg-yellow-400/20 border-l-4 border-yellow-400" : ""}`}
          >
            <p className="font-semibold text-white">{item.title}</p>
            <p className="text-gray-300 text-xs">{item.date}</p>
            <p className="text-gray-400 text-sm mt-1">{item.description}</p>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="mt-4 text-right">
        <button className="text-yellow-400 text-sm font-semibold hover:underline">
          View All Notices →
        </button>
      </div>
    </div>
  );
}
