import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { FaUserMd, FaMicroscope, FaClock } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/hospital-hero.jpg"
          alt="Hospital Building"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4 text-center">
          Compassionate Care, World-Class Expertise
          </h1>
          <p className="text-xl mb-8 text-center max-w-2xl px-4">
            Providing exceptional medical care with cutting-edge technology and compassionate professionals
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUserMd className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Expert Doctors</h3>
            <p className="text-gray-600">
              Our team of experienced medical professionals provides the highest quality care
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMicroscope className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Modern Technology</h3>
            <p className="text-gray-600">
              State-of-the-art facilities and equipment for accurate diagnosis and treatment
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">24/7 Care</h3>
            <p className="text-gray-600">
              Round-the-clock emergency services and patient care
            </p>
          </div>
        </div>
      </section>

      {/* Featured Specialties */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics'].map((specialty) => (
              <Link
                key={specialty}
                href={`/specialties#${specialty.toLowerCase()}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{specialty}</h3>
                <p className="text-gray-600">
                  Learn more about our {specialty.toLowerCase()} department →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
