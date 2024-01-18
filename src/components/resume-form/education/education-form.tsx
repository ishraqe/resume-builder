import React, { ChangeEvent } from "react";
import { IEducation } from "../types";

import InputElement from "../../common/form/input-element";
import { DatePickerInput } from "../../common/form/date-picker";
import cntl from "cntl";
import { TextBox } from "../../common/form/text-area";

import { PrimaryButton } from "@/components/common/button/primary-button";

const classes = {
  inputWrapper: cntl`
    flex gap-[10px] w-[100%]
    justify-between items-center
    mb-[10px] flex-col sm:flex-row
  `
};

interface IEducationFormProps {
  educationData: IEducation;
  saveEducation: (educationData: IEducation) => void;
  handleChangeInput: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleChangeDate: (date: Date | null, name: string) => void;
  onSaveEducationClick: () => void;
}

export const EducationForm = ({
  educationData,
  onSaveEducationClick,
  handleChangeInput,
  handleChangeDate
}: IEducationFormProps) => {
  return (
    <>
      <div className={classes.inputWrapper}>
        <InputElement
          label="Degree"
          name="degree"
          placeholder="Bachelor of Science"
          value={educationData?.degree || ""}
          onChange={handleChangeInput}
          type="text"
        />
        <InputElement
          label="Major"
          name="major"
          placeholder="Computer Science"
          value={educationData?.major || ""}
          onChange={handleChangeInput}
          type="text"
        />
      </div>
      <div className={classes.inputWrapper}>
        <InputElement
          label="University"
          name="school"
          placeholder="University of ABC"
          value={educationData?.school || ""}
          onChange={handleChangeInput}
          type="text"
        />

        <InputElement
          label="Address"
          name="location"
          placeholder="San Francisco, CA"
          value={educationData?.location || ""}
          onChange={handleChangeInput}
          type="text"
        />
      </div>

      <div className={classes.inputWrapper}>
        <DatePickerInput
          name="startDate"
          label="Start Date"
          value={educationData?.startDate}
          onChange={(e) => handleChangeDate(e, "startDate")}
          placeholder="DD/MM/YYYY"
        />
        <DatePickerInput
          name="startDate"
          label="Start Date"
          value={educationData?.endDate}
          onChange={(e) => handleChangeDate(e, "endDate")}
          placeholder="DD/MM/YYYY"
        />
      </div>

      <TextBox
        label="Description"
        value={educationData?.description || ""}
        name="description"
        onChange={handleChangeInput}
      />
      <div className="w-full flex justify-center items-center mt-10">
        <PrimaryButton onClick={onSaveEducationClick}>
          Save Experience
        </PrimaryButton>
      </div>
    </>
  );
};
