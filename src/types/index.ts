export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualifications: string[];
  image: string;
  schedule: {
    days: string[];
    hours: string;
  };
  bio: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  content: string;
  rating: number;
  date: string;
}

export interface Hospital {
  id: string;
  name: string;
  address: string;
  contact: string;
  specialties: string[];
  image: string;
} 