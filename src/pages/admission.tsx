import Navbar from "../components/layouts/Navar";
import Footer from "../components/layouts/Footer";
import Link from "next/link";

export default function AdmissionPage() {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-[#0A2A43] mb-4">Admission</h1>
        <p className="text-gray-700 mb-6">Information about eligibility, documents, fees and deadlines.</p>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold mb-2">How to Apply</h3>
          <ol className="list-decimal list-inside text-sm text-gray-700">
            <li>Complete the online application form</li>
            <li>Upload required documents</li>
            <li>Pay application fee</li>
            <li>Attend interview/entrance as applicable</li>
          </ol>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-[#0A2A43]">← Back to Home</Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
