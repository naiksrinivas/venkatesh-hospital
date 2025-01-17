import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

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
            World-Class Healthcare
          </h1>
          <p className="text-xl mb-8 text-center max-w-2xl px-4">
            Providing exceptional medical care with cutting-edge technology and compassionate professionals
          </p>
          <Link
            href="/schedule"
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Image
                src="/icons/doctor.svg"
                alt="Expert Doctors"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
            <p className="text-gray-600">
              Our team of experienced medical professionals provides the highest quality care
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Image
                src="/icons/technology.svg"
                alt="Modern Technology"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Modern Technology</h3>
            <p className="text-gray-600">
              State-of-the-art facilities and equipment for accurate diagnosis and treatment
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Image
                src="/icons/care.svg"
                alt="24/7 Care"
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Care</h3>
            <p className="text-gray-600">
              Round-the-clock emergency services and patient care
            </p>
          </div>
        </div>
      </section>

      {/* Featured Specialties */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics'].map((specialty) => (
              <Link
                key={specialty}
                href={`/specialties#${specialty.toLowerCase()}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{specialty}</h3>
                <p className="text-gray-600">
                  Learn more about our {specialty.toLowerCase()} department →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Medical Attention?</h2>
          <p className="text-xl mb-8">
            Our team of medical professionals is here to help you
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/schedule"
              className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Schedule Appointment
            </Link>
            <Link
              href="/doctors"
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Find a Doctor
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
