import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Doctor } from "@/types";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

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
  teamMembers: Doctor[];
  facilities: {
    name: string;
    description: string;
    image: string;
  }[];
  treatments: {
    name: string;
    description: string;
  }[];
  researchHighlights?: {
    title: string;
    description: string;
    year: number;
  }[];
}

// This would typically come from an API or database
const getSpecialtyById = async (id: string): Promise<Specialty> => {
  const specialties: Record<string, Specialty> = {
    "cardiology": {
      id: "cardiology",
      name: "Cardiology",
      description: "Our cardiology department provides comprehensive care for all types of heart conditions, utilizing state-of-the-art technology and evidence-based treatments. We focus on both preventive care and advanced treatments for complex cardiac conditions.",
      image: "/specialties/cardiology.jpg",
      services: [
        "Echocardiography",
        "Cardiac Catheterization",
        "Stress Testing",
        "Holter Monitoring",
        "Cardiac Rehabilitation",
        "Preventive Cardiology",
        "Heart Failure Management",
        "Electrophysiology Studies"
      ],
      leadDoctor: {
        name: "Dr. Sarah Johnson",
        title: "Head of Cardiology",
        id: "1"
      },
      equipment: [
        "3D Echocardiography Machine",
        "Cardiac CT Scanner",
        "ECG Machines",
        "Nuclear Medicine Cameras",
        "Cardiac MRI"
      ],
      conditions: [
        "Coronary Artery Disease",
        "Heart Failure",
        "Arrhythmias",
        "Hypertension",
        "Valvular Heart Disease"
      ],
      teamMembers: [], // This would be populated with actual doctor data
      facilities: [
        {
          name: "Cardiac Catheterization Lab",
          description: "State-of-the-art facility for diagnostic and interventional procedures",
          image: "/specialties/cardiology-cath-lab.jpg"
        },
        {
          name: "Cardiac Rehabilitation Center",
          description: "Dedicated space for cardiac rehabilitation and recovery programs",
          image: "/specialties/cardiology-rehab.jpg"
        }
      ],
      treatments: [
        {
          name: "Coronary Angioplasty",
          description: "Minimally invasive procedure to open blocked arteries"
        },
        {
          name: "Cardiac Ablation",
          description: "Treatment for heart rhythm disorders"
        },
        {
          name: "Pacemaker Implantation",
          description: "Device implantation for heart rhythm management"
        }
      ],
      researchHighlights: [
        {
          title: "Advanced Heart Failure Treatment Study",
          description: "Breakthrough research in managing advanced heart failure cases",
          year: 2023
        }
      ]
    }
    // Add more specialties as needed
  };

  return specialties[id];
};

export default async function SpecialtyPage({ params, searchParams }: Props) {
  const { id } = await params;
  const specialty = await getSpecialtyById(id);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <Image
            src={specialty.image}
            alt={specialty.name}
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-bold mb-4">{specialty.name}</h1>
            <p className="text-xl max-w-3xl text-center px-4">
              {specialty.description}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Services */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Our Services</h2>
              <ul className="space-y-2">
                {specialty.services.map((service) => (
                  <li key={service} className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Conditions Treated */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Conditions We Treat</h2>
              <ul className="space-y-2">
                {specialty.conditions?.map((condition) => (
                  <li key={condition} className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {condition}
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Advanced Equipment</h2>
              <ul className="space-y-2">
                {specialty.equipment?.map((item) => (
                  <li key={item} className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Treatments */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Treatments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialty.treatments.map((treatment) => (
                <div key={treatment.name} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2">{treatment.name}</h3>
                  <p className="text-gray-600">{treatment.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Facilities */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specialty.facilities.map((facility) => (
                <div key={facility.name} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{facility.name}</h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Research Highlights */}
          {specialty.researchHighlights && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Research Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specialty.researchHighlights.map((research) => (
                  <div key={research.title} className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-2">{research.title}</h3>
                    <p className="text-gray-600 mb-2">{research.description}</p>
                    <p className="text-sm text-gray-500">Year: {research.year}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Book Appointment CTA */}
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Consultation?</h2>
            <p className="text-gray-600 mb-6">
              Book an appointment with one of our specialists today
            </p>
            <Link
              href="/schedule"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 