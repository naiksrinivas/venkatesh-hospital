import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Testimonial } from "@/types";

interface TestimonialWithDetails extends Testimonial {
  doctorName: string;
  doctorSpecialty: string;
  doctorId: string;
  patientImage?: string;
  treatment: string;
}

const testimonials: TestimonialWithDetails[] = [
  {
    id: "1",
    patientName: "John Smith",
    patientImage: "/testimonials/patient-1.jpg",
    content: "The care I received at the cardiology department was exceptional. Dr. Johnson and her team were not only highly professional but also incredibly supportive throughout my treatment journey. The follow-up care has been excellent.",
    rating: 5,
    date: "2024-02-15",
    doctorName: "Dr. Sarah Johnson",
    doctorSpecialty: "Cardiology",
    doctorId: "1",
    treatment: "Cardiac Rehabilitation"
  },
  {
    id: "2",
    patientName: "Emily Davis",
    content: "After struggling with neurological symptoms for months, Dr. Chen provided a clear diagnosis and treatment plan. His expertise and the department's advanced diagnostic equipment made all the difference in my recovery.",
    rating: 5,
    date: "2024-02-10",
    doctorName: "Dr. Michael Chen",
    doctorSpecialty: "Neurology",
    doctorId: "2",
    treatment: "Neurological Treatment"
  }
  // Add more testimonials as needed
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Patient Testimonials</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Read about the experiences of our patients and their journey to recovery
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Patient Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">Patients Treated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Filter Options */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            <select className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Departments</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              {/* Add more departments */}
            </select>
            <select className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">Sort by Date</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {testimonial.patientImage ? (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.patientImage}
                          alt={testimonial.patientName}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <span className="text-blue-600 text-xl font-semibold">
                          {testimonial.patientName[0]}
                        </span>
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold">{testimonial.patientName}</h3>
                      <p className="text-sm text-gray-500">{testimonial.treatment}</p>
                    </div>
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.content}</p>
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold">{testimonial.doctorName}</p>
                        <p className="text-sm text-gray-500">{testimonial.doctorSpecialty}</p>
                      </div>
                      <p className="text-sm text-gray-500">
                        {new Date(testimonial.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Share Your Story CTA */}
          <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Share Your Story</h2>
            <p className="text-gray-600 mb-6">
              We&apos;d love to hear about your experience at our hospital
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Submit Your Testimonial
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 