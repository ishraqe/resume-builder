import {
  ICertifications,
  IEducation,
  IExperiences,
  IPersonalInformation,
  ISkils
} from "../components/resume-form/types";

export interface IState {
  personalInfo?: IPersonalInformation;
  experiences?: IExperiences[];
  educations?: IEducation[];
  certifications?: ICertifications[];
  skills?: ISkils[];
}

export const personalInfoInitialState: IPersonalInformation = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
  linkedin: "",
  references: [],
  description: ""
};

export const educatinInitialState: IEducation = {
  id: "",
  degree: "",
  major: "",
  school: "",
  location: "",
  startDate: "",
  endDate: "",
  description: ""
};

export const experienceInitialState: IExperiences = {
  id: "",
  title: "",
  company: "",
  location: "",
  startDate: "",
  endDate: "",
  description: ""
};

export const certificationsInitialState: ICertifications = {
  id: "",
  name: "",
  date: ""
};

export const skillsInitialState: ISkils = {
  id: "",
  name: "",
  score: 0
};

export const initialState: IState = {
  personalInfo: personalInfoInitialState,
  experiences: [],
  educations: [],
  certifications: [],
  skills: []
};
