import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link 
              href="/"
              className="flex items-center text-gray-800 hover:text-blue-600"
            >
              Home
            </Link>
            <Link 
              href="/doctors"
              className="flex items-center text-gray-800 hover:text-blue-600"
            >
              Doctors
            </Link>
            <Link 
              href="/specialties"
              className="flex items-center text-gray-800 hover:text-blue-600"
            >
              Specialties
            </Link>
            <Link 
              href="/testimonials"
              className="flex items-center text-gray-800 hover:text-blue-600"
            >
              Testimonials
            </Link>
            <Link 
              href="/affiliated"
              className="flex items-center text-gray-800 hover:text-blue-600"
            >
              Affiliated Hospitals
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 