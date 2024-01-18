"use client";

import cntl from "cntl";
import { PrimaryButton } from "../common/button/primary-button";
import { PersonalInfo } from "./personal-information";
import { Experience } from "./experience";
import { Education } from "./education";
import { Certifications } from "./certifications";
import { SkillsForm } from "./skills";
import { useRouter } from "next/navigation";

const classes = {
  container: cntl`
    flex flex-col 
    items-center 
  `
};

export const ResumeForm = () => {
  const router = useRouter();

  const onClickBtn = () => {
    router.push("/preview");
  };

  return (
    <div>
      <div className={classes.container}>
        <PersonalInfo />
        <Education />
        <Experience />
        <Certifications />
        <SkillsForm />
      </div>

      <div className="flex w-[100%] mt-10 justify-between">
        <PrimaryButton className="w-full" onClick={onClickBtn}>
          Generate Preview
        </PrimaryButton>
      </div>
    </div>
  );
};
