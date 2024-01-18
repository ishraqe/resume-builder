import React, { ChangeEvent, useState } from "react";
import { SeactionHeadingForm } from "../form-section-heading";
import { useResumeFormContext } from "../../../context/resume-form-context";
import { IEducation } from "../types";
import { EducationList } from "./education-list";
import { PrimaryButton } from "@/components/common/button/primary-button";
import Modal from "@/components/common/modal";
import { EducationForm } from "./education-form";
import { educatinInitialState } from "@/constant/form";
import { v4 as uuidv4 } from "uuid";

export const Education = () => {
  const {
    values: { educations },
    setEducationalInfo
  } = useResumeFormContext();

  const [showModalForm, setShowModalForm] = useState(false);
  const [educationData, setEducationData] =
    useState<IEducation>(educatinInitialState);

  const handleChangeInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setEducationData({ ...educationData, [fieldName]: fieldValue || "" });
  };

  const handleChangeDate = (date: Date | null, name: string) => {
    if (educationData) {
      setEducationData({ ...educationData, [name]: date });
    }
  };

  const saveEducation = () => {
    if (educations && educationData) {
      if (educationData.id) {
        const updatedData = educations.map((item) => {
          if (item.id === educationData.id) {
            return educationData;
          }
          return item;
        });

        setEducationalInfo(updatedData);
      } else {
        setEducationalInfo([...educations, { ...educationData, id: uuidv4() }]);
      }
      setShowModalForm(false);
      setEducationData(educatinInitialState);
    }
  };

  const onEdit = (formData: IEducation) => {
    setEducationData(formData);
    setShowModalForm(true);
  };
  const onRemove = (id: string) => {
    const updatedList: IEducation[] = (educations || []).filter(
      (education) => education.id !== id
    );
    setEducationalInfo(updatedList);
  };

  return (
    <>
      <div className="flex w-full mt-5">
        <SeactionHeadingForm
          title="Education"
          subTitle="Show your relevant education information"
        />
      </div>
      {(educations || []).map((education) => (
        <EducationList
          key={education.startDate}
          education={education}
          onEdit={() => onEdit(education)}
          onRemove={() => onRemove(education.id)}
        />
      ))}

      <div className="flex w-full justify-center items-center">
        <PrimaryButton
          className="bg-transparent border-none !text-[#1a91f0] hover:bg-transparent hover:border-none"
          onClick={() => setShowModalForm(true)}
        >
          {educations && educations.length > 0
            ? "+ Add Another Education"
            : "+ Add Education"}
        </PrimaryButton>
      </div>

      <Modal openModal={showModalForm}>
        <EducationForm
          educationData={educationData}
          onSaveEducationClick={saveEducation}
          handleChangeInput={handleChangeInput}
          handleChangeDate={handleChangeDate}
          saveEducation={saveEducation}
        />
      </Modal>
    </>
  );
};
