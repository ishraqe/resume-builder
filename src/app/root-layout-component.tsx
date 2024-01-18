"use client";

import Header from "@/app/nav-header";
import {
  IResumeFormContext,
  ResumeFormContext
} from "@/context/resume-form-context";
import { useResumeFormLogic } from "@/hooks/use-resume-form-logic";
import { IThemeContextValue, ThemeContext } from "@/context/theme-context";
import React, { ReactNode, useRef, useState } from "react";
const RootLayoutComponent = ({ children }: { children: ReactNode }) => {
  const {
    values,
    touched,
    errors,
    setPersonalInformation,
    setEducationalInfo,
    setCertifications,
    setExperiences,
    setSkills,
    handleSubmit
  } = useResumeFormLogic();

  const [theme, setTheme] = useState("teal");
  const themeRef = useRef();

  const resumeContextValue: IResumeFormContext = {
    values,
    touched,
    errors,
    setPersonalInformation,
    setEducationalInfo,
    setCertifications,
    setExperiences,
    setSkills,
    handleSubmit
  };
  const themeContextValue: IThemeContextValue = {
    theme,
    setTheme,
    myRef: themeRef
  };

  return (
    <ResumeFormContext.Provider value={resumeContextValue}>
      <ThemeContext.Provider value={themeContextValue}>
        <Header />
        <div className="p-10">{children}</div>
      </ThemeContext.Provider>
    </ResumeFormContext.Provider>
  );
};

export default RootLayoutComponent;
