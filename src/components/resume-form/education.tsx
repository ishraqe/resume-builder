import React, { ChangeEvent } from "react";
import InputElement from "../common/form/input-element";
import { DatePickerInput } from "../common/form/date-picker";
import cntl from "cntl";
import { TextBox } from "../common/form/textarea";
import { SeactionHeading } from "./heading";
import { useResumeFormContext } from "../../context";
import { IEducation } from "./types";

const classes = {
  inputWrapper: cntl`
    flex gap-[10px] w-[100%]
    justify-between items-center
    mb-[10px] flex-col sm:flex-row
  `
};

export const EducationForm = () => {
  const {
    values: { education },
    setEducationalInfo
  } = useResumeFormContext();

  const handleChangeInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    if (education) {
      setEducationalInfo({ ...education, [fieldName]: fieldValue });
    }
  };

  const handleChangeDate = (date: Date | null, name: string) => {
    if (education) {
      setEducationalInfo({ ...education, [name]: date });
    }
  };

  return (
    <>
      <div className="flex w-full mt-5">
        <SeactionHeading title="Educations" />
      </div>
      <div className={classes.inputWrapper}>
        <InputElement
          label="Degree"
          name="degree"
          placeholder="Bachelor of Science"
          value={education?.degree || ""}
          onChange={handleChangeInput}
          type="text"
        />
        <InputElement
          label="Major"
          name="major"
          placeholder="Computer Science"
          value={education?.major || ""}
          onChange={handleChangeInput}
          type="text"
        />
      </div>
      <div className={classes.inputWrapper}>
        <InputElement
          label="University"
          name="school"
          placeholder="University of ABC"
          value={education?.school || ""}
          onChange={handleChangeInput}
          type="text"
        />

        <InputElement
          label="Address"
          name="location"
          placeholder="San Francisco, CA"
          value={education?.location || ""}
          onChange={handleChangeInput}
          type="text"
        />
      </div>

      <div className={classes.inputWrapper}>
        <DatePickerInput
          name="startDate"
          label="Start Date"
          value={education?.startDate}
          onChange={(e) => handleChangeDate(e, "startDate")}
          placeholder="DD/MM/YYYY"
        />
        <DatePickerInput
          name="startDate"
          label="Start Date"
          value={education?.endDate}
          onChange={(e) => handleChangeDate(e, "endDate")}
          placeholder="DD/MM/YYYY"
        />
      </div>

      <TextBox
        label="Description"
        value={education?.description || ""}
        name="description"
        onChange={handleChangeInput}
      />
    </>
  );
};
