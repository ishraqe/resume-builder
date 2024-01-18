export interface IPersonalInformation {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  description: string;
  references?: string[];
  linkedin?: string;
  designation?: string;
}

export interface IExperiences {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  description: string;
}

export interface IEducation {
  id: string;
  degree?: string;
  major?: string;
  school?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

export interface ICertifications {
  id: string;
  name: string;
  date: string;
}

export interface ISkils {
  id: string;
  name: string;
  score: number;
}
