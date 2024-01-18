import type { FormikErrors, FormikTouched } from "formik";
import type { FormEvent } from "react";
import { createContext, useContext } from "react";
import noop from "lodash/noop";
import {
  ICertifications,
  IEducation,
  IExperiences,
  IPersonalInformation,
  ISkils
} from "../components/resume-form/types";
import { IState } from "../components/resume-form/constants";

export interface IResumeFormContext {
  handleSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void;
  values: IState;
  errors: FormikErrors<IState>;
  touched: FormikTouched<IState>;
  setPersonalInformation: (personalInfo: IPersonalInformation) => void;
  setEducationalInfo: (education: IEducation) => void;
  setExperiences: (experiences: IExperiences[]) => void;
  setCertifications: (certifications: ICertifications[]) => void;
  setSkills: (skills: ISkils[]) => void;
}

export const ResumeFormContext = createContext<IResumeFormContext>({
  handleSubmit: noop,
  values: {},
  errors: {},
  touched: {},
  setPersonalInformation: noop,
  setEducationalInfo: noop,
  setExperiences: noop,
  setCertifications: noop,
  setSkills: noop
});

export const useResumeFormContext = () => {
  return useContext(ResumeFormContext);
};
