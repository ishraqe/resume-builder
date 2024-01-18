import InputElement from "../../common/form/input-element";
import { DatePickerInput } from "../../common/form/date-picker";
import { RichTextEditor } from "../../common/form/richtext-editor";
import { IExperiences } from "../types";
import cntl from "cntl";
import { PrimaryButton } from "../../common/button/primary-button";
import { ChangeEvent } from "react";
import { ContentEditableEvent } from "react-simple-wysiwyg";
const classes = {
  inputWrapper: cntl`
    flex gap-[10px] w-[100%]
    justify-between items-center
    mb-[10px] flex-col sm:flex-row
  `
};

interface IExperienceFormProps {
  experienceData: IExperiences;
  handleChangeInput: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleChangeDate: (date: Date | null, name: string) => void;
  onSaveExperienceClick: () => void;
  handleRichTextChange: (e: ContentEditableEvent) => void;
}

const ExperienceForm = ({
  experienceData,
  handleChangeInput,
  handleChangeDate,
  handleRichTextChange,
  onSaveExperienceClick
}: IExperienceFormProps) => {
  return (
    <>
      <InputElement
        label="Job title"
        name="title"
        placeholder="Software Engineer"
        value={experienceData?.title || ""}
        onChange={handleChangeInput}
        type="text"
      />
      <div className={classes.inputWrapper}>
        <InputElement
          label="Company name"
          name="company"
          placeholder="ABC Company"
          value={experienceData?.company || ""}
          onChange={handleChangeInput}
          type="text"
        />
        <InputElement
          label="Address"
          name="location"
          placeholder="San Francisco, CA"
          value={experienceData?.location || ""}
          onChange={handleChangeInput}
          type="text"
        />
      </div>

      <div className={classes.inputWrapper}>
        <DatePickerInput
          name="startDate"
          label="Start Date"
          value={experienceData?.startDate}
          onChange={(e) => handleChangeDate(e, "startDate")}
          placeholder="DD/MM/YYYY"
        />
        <DatePickerInput
          name="endDate"
          label="Start Date"
          value={experienceData?.endDate}
          onChange={(e) => handleChangeDate(e, "endDate")}
          placeholder="DD/MM/YYYY"
        />
      </div>

      <RichTextEditor
        label="Description"
        value={experienceData.description}
        onChange={handleRichTextChange}
        name="description"
      />
      <div className="w-full flex justify-center items-center mt-10">
        <PrimaryButton onClick={onSaveExperienceClick}>
          Save Experience
        </PrimaryButton>
      </div>
    </>
  );
};

export default ExperienceForm;
