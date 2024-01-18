"use client";

import { PrimaryButton } from "@/components/common/button/primary-button";
import { IResumeFormContext, ResumeFormContext } from "@/context";
import { useResumeFormLogic } from "@/hooks/use-resume-form-logic";
import ThemeContext from "@/themecontext";
import React, { useState } from "react";

const ContextWrapper = ({ children }) => {
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

  const themeHook = useState("teal");

  const contextValue: IResumeFormContext = {
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

  return (
    <ResumeFormContext.Provider value={contextValue}>
      <ThemeContext.Provider value={themeHook}>
        <nav className="h-20 bg-teal-500">
          <PrimaryButton onClick={() => {}}>Preview</PrimaryButton>
        </nav>
        {children}
      </ThemeContext.Provider>
    </ResumeFormContext.Provider>
  );
};

export default ContextWrapper;
