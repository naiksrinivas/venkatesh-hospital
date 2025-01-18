import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { notFound } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

// This would typically come from your database
const doctors = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    image: "/doctors/doctor-1.webp", // Add actual image path
    education: "MD - Harvard Medical School",
    experience: "15+ years",
    description: "Dr. Johnson is a board-certified cardiologist specializing in preventive cardiology and cardiac rehabilitation.",
    languages: ["English", "Spanish"],
    certifications: ["American Board of Internal Medicine", "Cardiovascular Disease"]
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    image: "/doctors/doctor-2.webp", // Add actual image path
    education: "MD - Johns Hopkins University",
    experience: "12+ years",
    description: "Dr. Chen is a leading neurologist specializing in diagnostic neurology and treatment of complex neurological conditions.",
    languages: ["English", "Mandarin"],
    certifications: ["American Board of Psychiatry and Neurology"]
  }
];

export default async function DoctorPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const doctor = doctors.find(d => d.id === id);
  
  if (!doctor) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Breadcrumb Navigation */}
        <div className="bg-gray-100 border-b">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <Link 
              href="/doctors" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaChevronLeft className="w-4 h-4 mr-2" />
              Back to Doctors
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Doctor Profile */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold mb-2">Quick Info</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Languages:</span> {doctor.languages.join(", ")}</p>
                  <p><span className="font-medium">Experience:</span> {doctor.experience}</p>
                  <p><span className="font-medium">Education:</span> {doctor.education}</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{doctor.specialty}</p>

              <p className="text-gray-700 mb-6">{doctor.description}</p>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Certifications</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {doctor.certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </div>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Book Appointment
              </button>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}