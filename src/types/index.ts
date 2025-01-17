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
  areasOfExpertise: string[];
  education: {
    institution: string;
    degree: string;
  }[];
  languages?: string[];
  publications?: {
    title: string;
    journal: string;
    year: number;
    link?: string;
  }[];
  awards?: {
    name: string;
    year: number;
    issuer: string;
  }[];
  professionalMemberships?: string[];
  certifications?: {
    name: string;
    issuer: string;
    year: number;
    validUntil?: string;
  }[];
  experience?: {
    position: string;
    institution: string;
    startYear: number;
    endYear?: number;
    current?: boolean;
  }[];
  contactInfo?: {
    email?: string;
    phone?: string;
    office?: string;
  };
  specialClinicHours?: {
    type: string;
    days: string[];
    hours: string;
  }[];
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