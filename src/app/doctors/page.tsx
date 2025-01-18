import DoctorCard from "@/components/DoctorCard";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Doctor } from "@/types";

// This would typically come from an API or database
const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    qualifications: ["MD", "FACC", "FESC"],
    image: "/doctors/doctor-1.jpg",
    schedule: {
      days: ["Monday", "Wednesday", "Friday"],
      hours: "9:00 AM - 5:00 PM"
    },
    bio: "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating complex cardiovascular conditions.",
    areasOfExpertise: [
      "Preventive Cardiology",
      "Women's Heart Health",
      "Cardiac Rehabilitation",
      "Echocardiography",
      "Nuclear Cardiology"
    ],
    education: [
      {
        institution: "Harvard Medical School",
        degree: "Doctor of Medicine (MD)"
      },
      {
        institution: "Mayo Clinic",
        degree: "Cardiology Fellowship"
      },
      {
        institution: "Massachusetts General Hospital",
        degree: "Residency in Internal Medicine"
      }
    ]
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    qualifications: ["MD", "PhD"],
    image: "/doctors/doctor-2.jpg",
    schedule: {
      days: ["Tuesday", "Thursday"],
      hours: "10:00 AM - 6:00 PM"
    },
    bio: "Dr. Chen specializes in neurological disorders and has conducted extensive research in brain mapping.",
    areasOfExpertise: [
      "Brain Mapping",
      "Neurological Disorders",
      "Stroke Treatment",
      "Epilepsy Management"
    ],
    education: [
      {
        institution: "Stanford University School of Medicine",
        degree: "Doctor of Medicine (MD)"
      },
      {
        institution: "Johns Hopkins University",
        degree: "PhD in Neuroscience"
      },
      {
        institution: "UCSF Medical Center",
        degree: "Neurology Residency"
      }
    ]
  },
  // Add more doctors as needed
];

export default function DoctorsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Our Medical Team</h1>
            <p className="text-xl">
              Meet our experienced and dedicated healthcare professionals
            </p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="max-w-7xl mx-auto px-4 py-8">

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 