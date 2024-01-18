import { SeactionHeadingForm } from "../form-section-heading";
import { ChangeEvent, useState } from "react";
import { IExperiences } from "../types";
import { PrimaryButton } from "../../common/button/primary-button";
import Modal from "../../common/modal";
import ExperienceForm from "./experience-form";
import { ExperienceList } from "./experience-list";
import { useResumeFormContext } from "@/context/resume-form-context";
import { experienceInitialState } from "@/constant/form";
import { ContentEditableEvent } from "react-simple-wysiwyg";
import { v4 as uuidv4 } from "uuid";

export const Experience = () => {
  const {
    values: { experiences },
    setExperiences
  } = useResumeFormContext();

  const [showModalForm, setShowModalForm] = useState(false);
  const [experienceData, setExperienceData] = useState<IExperiences>(
    experienceInitialState
  );

  const handleChangeInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setExperienceData({ ...experienceData, [fieldName]: fieldValue || "" });
  };

  const handleChangeDate = (date: Date | null, name: string) => {
    if (experienceData) {
      setExperienceData({ ...experienceData, [name]: date });
    }
  };

  const handleRichTextChange = (e: ContentEditableEvent) => {
    const fieldValue = e.target.value || "";
    const fieldName = e.target.name || "description";

    setExperienceData({ ...experienceData, [fieldName]: fieldValue });
  };

  const saveExperience = () => {
    if (experiences && experienceData) {
      if (experienceData.id) {
        const updatedData = experiences.map((item) => {
          if (item.id === experienceData.id) {
            return experienceData;
          }
          return item;
        });

        setExperiences(updatedData);
      } else {
        setExperiences([...experiences, { ...experienceData, id: uuidv4() }]);
      }
      setShowModalForm(false);
      setExperienceData(experienceInitialState);
    }
  };

  const onEdit = (formData: IExperiences) => {
    setExperienceData(formData);
    setShowModalForm(true);
  };
  const onRemove = (id: string) => {
    const updatedList: IExperiences[] = (experiences || []).filter(
      (experience) => experience.id !== id
    );
    setExperiences(updatedList);
  };

  return (
    <>
      <div className="flex w-full mt-5">
        <SeactionHeadingForm
          title="Experiences"
          subTitle="Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z)."
        />
      </div>
      {(experiences || []).map((experience) => (
        <ExperienceList
          key={experience.startDate}
          experience={experience}
          onEdit={() => onEdit(experience)}
          onRemove={() => onRemove(experience.id)}
        />
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
        <ExperienceForm
          experienceData={experienceData}
          handleChangeInput={handleChangeInput}
          handleChangeDate={handleChangeDate}
          handleRichTextChange={handleRichTextChange}
          onSaveExperienceClick={saveExperience}
        />
      </Modal>
    </>
  );
};
