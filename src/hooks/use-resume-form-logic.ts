import type { FormikHelpers } from "formik";
import { useFormik } from "formik";

import { IState, initialState } from "../constant/form";
import {
  ICertifications,
  IEducation,
  IExperiences,
  IPersonalInformation,
  ISkils
} from "../components/resume-form/types";

export const useResumeFormLogic = () => {
  const onSubmit = async (
    values: IState,
    { resetForm }: FormikHelpers<IState>
  ) => {};

  const { values, errors, setFieldValue, handleSubmit, touched, setValues } =
    useFormik({
      initialValues: initialState,
      //   validationSchema,
      onSubmit,
      enableReinitialize: true
    });

  const setPersonalInformation = (personalInfo: IPersonalInformation) => {
    setValues({ ...values, personalInfo });
  };

  const setEducationalInfo = (educations: IEducation[]) => {
    setValues({ ...values, educations });
  };

  const setExperiences = (experiences: IExperiences[]) => {
    setValues({ ...values, experiences });
  };
  const setCertifications = (certifications: ICertifications[]) => {
    setValues({ ...values, certifications });
  };
  const setSkills = (skills: ISkils[]) => {
    setValues({ ...values, skills });
  };
  return {
    values,
    errors,
    handleSubmit,
    setFieldValue,
    touched,
    setPersonalInformation,
    setCertifications,
    setEducationalInfo,
    setExperiences,
    setSkills
  };
};
