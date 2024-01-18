import { ISkils } from "@/components/resume-form/types";

export interface SkillsValidationErrors {
  name?: string;
  score?: string;
}

export const validateSkills = (skill: ISkils) => {
  const errors: SkillsValidationErrors = {};

  if (!skill.name.trim()) {
    errors.name = "Name is a required field.";
  }

  if (skill.score === 0) {
    errors.score = "Score is required ";
  }

  return Object.keys(errors).length > 0 ? errors : null;
};
