import { SeactionHeading } from "./heading";
import { useState } from "react";
import { IExperiences } from "./types";
import { PrimaryButton } from "../common/button/primary-button";
import Modal from "../common/modal";
import ExperienceForm from "./experienceForm";
import { ExperienceList } from "./experienceList";
import { useResumeFormContext } from "@/context";

export const Experience = () => {
  const {
    values: { experiences },
    setExperiences
  } = useResumeFormContext();

  const [showModalForm, setShowModalForm] = useState(false);

  const saveExperience = (experienceData: IExperiences) => {
    if (experiences && experienceData) {
      setExperiences([...experiences, experienceData]);
      setShowModalForm(false);
    }
  };

  return (
    <>
      <div className="flex w-full mt-5">
        <SeactionHeading
          title="Experiences"
          subTitle="Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z)."
        />
      </div>
      {(experiences || []).map((experience) => (
        <ExperienceList key={experience.startDate} experience={experience} />
      ))}

      <div className="flex w-full justify-center items-center">
        <PrimaryButton
          className="bg-transparent border-none !text-[#1a91f0] hover:bg-transparent hover:border-none"
          onClick={() => setShowModalForm(true)}
        >
          {experiences && experiences.length > 0
            ? "+ Add Another Employment"
            : "+ Add Employment"}
        </PrimaryButton>
      </div>

      <Modal openModal={showModalForm}>
        <ExperienceForm saveExperience={saveExperience} />
      </Modal>
    </>
  );
};
