import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Doctor } from "@/types";

// Add these types for Next.js pages
type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

// This would typically come from an API or database
const getDoctorById = async (id: string): Promise<Doctor> => {
    const doctors: Record<string, Doctor> = {
        "1": {
            id: "1",
            name: "Dr. Sarah Johnson",
            specialty: "Cardiology",
            qualifications: ["MD", "FACC", "FESC"],
            image: "/doctors/doctor-1.jpg",
            schedule: {
                days: ["Monday", "Wednesday", "Friday"],
                hours: "9:00 AM - 5:00 PM"
            },
            bio: "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating complex cardiovascular conditions. She completed her medical degree at Harvard Medical School and her cardiology fellowship at Mayo Clinic. Dr. Johnson specializes in preventive cardiology and women's heart health.",
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
        "2": {
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
    };

    return doctors[id];
};

export default async function DoctorProfile({ params, searchParams }: Props) {
    const { id } = await params;
    const doctor = await getDoctorById(id);

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <Link
                            href="/doctors"
                            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Doctors
                        </Link>
                    </div>

                    {/* Doctor Profile Header */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                            <Image
                                src={doctor.image}
                                alt={doctor.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="md:col-span-2">
                            <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
                            <p className="text-xl text-gray-600 mb-4">{doctor.specialty}</p>
                            <div className="flex gap-2 mb-6">
                                {doctor.qualifications.map((qualification) => (
                                    <span
                                        key={qualification}
                                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                    >
                                        {qualification}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-8">{doctor.bio}</p>

                            {/* Schedule */}
                            <div className="bg-gray-50 p-6 rounded-lg mb-6">
                                <h2 className="text-xl font-semibold mb-4">Consultation Hours</h2>
                                <div className="space-y-2">
                                    <p className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {doctor.schedule.days.join(", ")}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {doctor.schedule.hours}
                                    </p>
                                </div>
                            </div>

                            {/* Book Appointment Button */}
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                Book Appointment
                            </button>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Expertise */}
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Areas of Expertise</h2>
                            <ul className="space-y-2">
                                {doctor.areasOfExpertise.map((expertise) => (
                                    <li key={expertise} className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {expertise}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Education & Training */}
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Education & Training</h2>
                            <ul className="space-y-4">
                                {doctor.education.map((edu) => (
                                    <li key={edu.institution}>
                                        <p className="font-semibold">{edu.institution}</p>
                                        <p className="text-gray-600">{edu.degree}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
} 