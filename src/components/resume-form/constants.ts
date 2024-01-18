import {
  ICertifications,
  IEducation,
  IExperiences,
  IPersonalInformation,
  ISkils
} from "./types";

export interface IState {
  personalInfo?: IPersonalInformation;
  experiences?: IExperiences[];
  education?: IEducation;
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
  degree: "",
  major: "",
  school: "",
  location: "",
  startDate: "",
  endDate: "",
  description: ""
};

export const experienceInitialState: IExperiences = {
  title: "",
  company: "",
  location: "",
  startDate: "",
  endDate: "",
  description: ""
};

export const certificationsInitialState: ICertifications = {
  name: "",
  date: ""
};

export const skillsInitialState: ISkils = {
  name: "",
  score: 0
};

export const initialState: IState = {
  personalInfo: personalInfoInitialState,
  experiences: [],
  education: educatinInitialState,
  certifications: [],
  skills: []
};
