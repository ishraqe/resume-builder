import cntl from "cntl";
import { PrimaryButton } from "../common/button/primary-button";
import { PersonalInfo } from "./personal-information";
import { Experience } from "./experience";
import { EducationForm } from "./education";
import { Certifications } from "./certifications";
import { Skills } from "./skills";
import { useResumeFormContext } from "../../context";

const classes = {
  container: cntl`
      flex flex-col 
      items-center 
    `
};

export const ResumeForm = () => {
  const onClickBtn = () => {};

  return (
    <div>
      <div className={classes.container}>
        <PersonalInfo />

        <EducationForm />
        <Experience />
        <Certifications />
        <Skills />
      </div>

      <div className="flex w-[100%] mt-10 justify-between">
        <PrimaryButton onClick={onClickBtn}>Save</PrimaryButton>
      </div>
    </div>
  );
};
