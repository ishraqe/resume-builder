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
  title: string;
  company: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  description: string;
}

export interface IEducation {
  degree?: string;
  major?: string;
  school?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
}

export interface ICertifications {
  name: string;
  date: string;
}

export interface ISkils {
  name: string;
  score: number;
}
