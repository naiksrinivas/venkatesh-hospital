import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { notFound } from "next/navigation";

// This would typically come from your database
const specialties = [
  {
    id: "cardiology",
    name: "Cardiology",
    description: "Expert care for heart and cardiovascular conditions",
    icon: "🫀", // You might want to replace this with an actual icon component
  },
  {
    id: "neurology",
    name: "Neurology",
    description: "Specialized care for neurological disorders and conditions",
    icon: "🧠",
  },
  // Add more specialties as needed
];

const doctors = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "cardiology",
    image: "/doctors/doctor-1.jpg",
    education: "MD - Harvard Medical School",
    experience: "15+ years",
    description: "Dr. Johnson is a board-certified cardiologist specializing in preventive cardiology and cardiac rehabilitation.",
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "neurology",
    image: "/doctors/doctor-2.jpg",
    education: "MD - Johns Hopkins University",
    experience: "12+ years",
    description: "Dr. Chen is a leading neurologist specializing in diagnostic neurology and treatment of complex neurological conditions.",
  },
  // Add more doctors as needed
];

export default async function SpecialtyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const specialty = specialties.find(s => s.id === id);
  
  if (!specialty) {
    notFound();
  }

  const specialtyDoctors = doctors.filter(d => d.specialty === id);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Specialty Header */}
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">{specialty.icon}</div>
            <h1 className="text-4xl font-bold mb-4">{specialty.name}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {specialty.description}
            </p>
          </div>

          {/* Doctors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialtyDoctors.map((doctor) => (
              <Link 
                href={`/doctors/${doctor.id}`} 
                key={doctor.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{doctor.name}</h2>
                  <p className="text-sm text-gray-600 mb-3">{doctor.education}</p>
                  <p className="text-sm text-gray-600 mb-3">Experience: {doctor.experience}</p>
                  <p className="text-gray-700 line-clamp-3">{doctor.description}</p>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <span className="text-blue-600 font-medium">View Profile →</span>
                </div>
              </Link>
            ))}
          </div>

          {specialtyDoctors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No doctors currently available in this specialty.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Generate static params for all specialties
export function generateStaticParams() {
  return specialties.map((specialty) => ({
    id: specialty.id,
  }));
}