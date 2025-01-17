import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

interface Specialty {
  id: string;
  name: string;
  description: string;
  image: string;
  services: string[];
  leadDoctor: {
    name: string;
    title: string;
    id: string;
  };
  equipment?: string[];
  conditions?: string[];
}

const specialties: Specialty[] = [
  {
    id: "cardiology",
    name: "Cardiology",
    description: "Our cardiology department provides comprehensive care for all types of heart conditions, utilizing state-of-the-art technology and evidence-based treatments.",
    image: "/specialties/cardiology.jpg",
    services: [
      "Echocardiography",
      "Cardiac Catheterization",
      "Stress Testing",
      "Holter Monitoring",
      "Cardiac Rehabilitation"
    ],
    leadDoctor: {
      name: "Dr. Sarah Johnson",
      title: "Head of Cardiology",
      id: "1"
    },
    equipment: [
      "3D Echocardiography Machine",
      "Cardiac CT Scanner",
      "ECG Machines"
    ],
    conditions: [
      "Coronary Artery Disease",
      "Heart Failure",
      "Arrhythmias",
      "Hypertension"
    ]
  },
  {
    id: "neurology",
    name: "Neurology",
    description: "Our neurology department specializes in the diagnosis and treatment of disorders of the nervous system, including the brain, spinal cord, and nerves.",
    image: "/specialties/neurology.jpg",
    services: [
      "Neurological Examinations",
      "EEG Testing",
      "EMG Studies",
      "Sleep Studies",
      "Movement Disorder Treatment"
    ],
    leadDoctor: {
      name: "Dr. Michael Chen",
      title: "Head of Neurology",
      id: "2"
    },
    equipment: [
      "MRI Scanner",
      "EEG Machine",
      "EMG Equipment"
    ],
    conditions: [
      "Stroke",
      "Epilepsy",
      "Multiple Sclerosis",
      "Parkinson's Disease"
    ]
  }
  // Add more specialties as needed
];

export default function SpecialtiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Our Medical Specialties</h1>
            <p className="text-xl">
              Comprehensive healthcare services delivered by expert medical professionals
            </p>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialties.map((specialty) => (
              <div
                key={specialty.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={specialty.image}
                    alt={specialty.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{specialty.name}</h2>
                  <p className="text-gray-600 mb-6">{specialty.description}</p>

                  {/* Services */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Our Services</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {specialty.services.map((service) => (
                        <li
                          key={service}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <svg
                            className="w-4 h-4 text-blue-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lead Doctor */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Department Head</h3>
                    <Link
                      href={`/doctors/${specialty.leadDoctor.id}`}
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <span className="mr-2">{specialty.leadDoctor.name}</span>
                      <span className="text-sm text-gray-500">
                        {specialty.leadDoctor.title}
                      </span>
                    </Link>
                  </div>

                  {/* Equipment */}
                  {specialty.equipment && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        Advanced Equipment
                      </h3>
                      <ul className="grid grid-cols-2 gap-2">
                        {specialty.equipment.map((item) => (
                          <li
                            key={item}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <svg
                              className="w-4 h-4 text-blue-500 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Learn More Button */}
                  <Link
                    href={`/specialties/${specialty.id}`}
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 