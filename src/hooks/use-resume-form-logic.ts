import type { FormikHelpers } from "formik";
import { useFormik } from "formik";
import { ChangeEvent, useState } from "react";

import { IState, initialState } from "../components/resume-form/constants";
import {
  ICertifications,
  IEducation,
  IExperiences,
  IPersonalInformation,
  ISkils
} from "../components/resume-form/types";

export const useResumeFormLogic = () => {
  const handleError = (error: unknown) => {
    // setShowErrorAlert(true);
  };

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

  const setEducationalInfo = (education: IEducation) => {
    setValues({ ...values, education });
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
