import Image from 'next/image';
import Link from 'next/link';
import { Doctor } from '@/types';

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{doctor.name}</h3>
        <p className="text-gray-600">{doctor.specialty}</p>
        <div className="mt-2">
          <p className="text-sm text-gray-500">Available on:</p>
          <p className="text-sm">{doctor.schedule.days.join(', ')}</p>
          <p className="text-sm">{doctor.schedule.hours}</p>
        </div>
        <Link 
          href={`/doctors/${doctor.id}`}
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
} 