"use client";
import { useState, useEffect } from "react";
import { FaBullhorn } from "react-icons/fa";

interface Announcement {
  id: number;
  title: string;
  date: string;
  description: string;
}

export default function NoticeBoard() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [visibleCount, setVisibleCount] = useState(5); // initially show 5

  useEffect(() => {
    const allAnnouncements: Announcement[] = [
      { id: 1, title: "Exam Schedule Released", date: "2025-11-20", description: "Check your timetable for the upcoming exams." },
      { id: 2, title: "Deadline Extended", date: "2025-11-18", description: "Assignment submission deadline extended to Nov 25." },
      { id: 3, title: "Guest Lecture", date: "2025-11-17", description: "Join the online lecture on AI innovations." },
      { id: 4, title: "Scholarship Announced", date: "2025-11-15", description: "Merit-based scholarship for top 10% students." },
      { id: 5, title: "Sports Meet Registration", date: "2025-11-14", description: "Register your team for the inter-college sports meet." },
      // extra 10 notices
      { id: 6, title: "Holiday Notice", date: "2025-11-10", description: "College will remain closed on Friday due to festival." },
      { id: 7, title: "Library Update", date: "2025-11-09", description: "New books added to computer science section." },
      { id: 8, title: "Hackathon", date: "2025-11-08", description: "48-hour hackathon starts next week. Register now!" },
      { id: 9, title: "Placement Drive", date: "2025-11-06", description: "TCS placement drive scheduled for final years." },
      { id: 10, title: "Hostel Maintenance", date: "2025-11-05", description: "Water supply will be off from 2-4 PM on Sunday." },
      { id: 11, title: "New Course", date: "2025-11-03", description: "AI & ML elective introduced for next semester." },
      { id: 12, title: "Fee Reminder", date: "2025-11-01", description: "Submit your semester fees before Nov 30." },
      { id: 13, title: "Lab Closure", date: "2025-10-29", description: "Computer lab will be closed for maintenance." },
      { id: 14, title: "Cultural Fest", date: "2025-10-27", description: "Auditions open for dance & music events." },
      { id: 15, title: "Notice", date: "2025-10-25", description: "Important announcement will be shared soon." },
    ];

    setAnnouncements(allAnnouncements);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10); // show 10 more
  };

  return (
    <div className="bg-[#0b1f34]/70 rounded-3xl p-6 w-full lg:w-96 backdrop-blur-md shadow-2xl border border-yellow-400">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <FaBullhorn className="text-yellow-400 w-5 h-5" />
        <h4 className="text-lg text-yellow-300 font-bold uppercase tracking-wide">Notice Board</h4>
      </div>

      {/* Announcement List */}
      <ul className="space-y-4 max-h-72 overflow-y-auto pr-2">
        {announcements.slice(0, visibleCount).map((item, idx) => (
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

      {/* Footer Button */}
      {visibleCount < announcements.length && (
        <div className="mt-4 text-right">
          <button
            onClick={handleLoadMore}
            className="text-yellow-400 text-sm font-semibold hover:underline"
          >
            View All Notices →
          </button>
        </div>
      )}
    </div>
  );
}
