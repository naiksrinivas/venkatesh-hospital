import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function InstitutesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-12">
            <Image
              src="/images/nursing-college.jpg" // Add your college image
              alt="Nursing College Building"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Venkatesh Nursing College
                </h1>
                <p className="text-xl md:text-2xl">
                  Shaping Tomorrow&apos;s Healthcare Leaders
                </p>
              </div>
            </div>
          </div>

          {/* About Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">About Our Institution</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Established in 2022, Venkatesh Nursing College has been at the forefront 
                of nursing education, providing comprehensive training and practical experience 
                to aspiring healthcare professionals. Our institution is recognized by the 
                Indian Nursing Council and affiliated with the Karnataka State Nursing Council.
              </p>
              <p>
                Located in Mahalingpur, Karnataka, our campus features state-of-the-art 
                facilities, experienced faculty, and strong clinical partnerships with 
                leading healthcare institutions.
              </p>
            </div>
          </section>

          {/* Programs Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Programs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">B.Sc. Nursing</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Duration: 4 Years</li>
                  <li>• Intake Capacity: [NUMBER] seats</li>
                  <li>• Comprehensive curriculum following INC guidelines</li>
                  <li>• Extensive practical training</li>
                  <li>• Modern laboratory facilities</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">GNM (General Nursing and Midwifery)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Duration: 3 Years</li>
                  <li>• Intake Capacity: [NUMBER] seats</li>
                  <li>• Focused practical approach</li>
                  <li>• Hands-on clinical experience</li>
                  <li>• State-of-the-art training facilities</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Facilities Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Facilities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/lab.jpg" // Add actual image
                    alt="Nursing Laboratory"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Modern Laboratories</h3>
                  <p className="text-gray-600">
                    Well-equipped labs with latest nursing equipment and simulation facilities.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/library.jpg" // Add actual image
                    alt="Library"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Library</h3>
                  <p className="text-gray-600">
                    Extensive collection of medical literature, journals, and digital resources.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/hostel.jpg" // Add actual image
                    alt="Hostel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Hostel Facilities</h3>
                  <p className="text-gray-600">
                    Comfortable accommodation with modern amenities for students.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Admission Enquiry</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  For admission related queries, please contact our admission office:
                </p>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    083503 22140
                  </p>
                  <p className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    admissions@venkateshnursing.com
                  </p>
                </div>
              </div>
              <div>
                <p className="text-gray-700 mb-4">
                  Visit us at:
                </p>
                <p className="text-gray-700">
                  Main Road, SH 18<br />
                  Mahalingpur, Karnataka 587312
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
} 