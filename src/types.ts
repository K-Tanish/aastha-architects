export interface Project {
  id: string;
  index: string;
  title: string;
  category: 'Residential' | 'Hospitality' | 'Commercial' | 'Institutional';
  image: string;
  location: string;
  description: string;
  year?: string;
  area?: string;
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export interface InquiryFormState {
  fullName: string;
  email: string;
  message: string;
  projectType: string;
}
