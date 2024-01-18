import cntl from "cntl";
import InputElement from "../common/form/input-element";
import { TextBox } from "../common/form/textarea";
import { SeactionHeading } from "./heading";
import { ChangeEvent } from "react";
import { IPersonalInformation } from "./types";
import { useResumeFormContext } from "@/context";

const classes = {
  inputWrapper: cntl`
      flex gap-[10px] w-[100%]
      justify-between items-center
      mb-[10px] flex-col sm:flex-row
    `
};

export const PersonalInfo = () => {
  const {
    values: { personalInfo },

    setPersonalInformation
  } = useResumeFormContext();

  const handleChangeInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    if (personalInfo) {
      setPersonalInformation({
        ...personalInfo,
        [fieldName]: fieldValue
      });
    }
  };

  return (
    <>
      <div className="flex w-full mt-5">
        <SeactionHeading title="Personal Information" />
      </div>
      <div className={classes.inputWrapper}>
        <InputElement
          label="First Name"
          type="text"
          placeholder="Enter First Name"
          onChange={handleChangeInput}
          value={personalInfo?.firstName || ""}
          name="firstName"
        />
        <InputElement
          label="Last Name"
          type="text"
          placeholder="Enter Last Name"
          onChange={handleChangeInput}
          value={personalInfo?.lastName || ""}
          name="lastName"
        />
      </div>

      <div className={classes.inputWrapper}>
        <InputElement
          label="Email"
          type="email"
          placeholder="Enter your email"
          onChange={handleChangeInput}
          value={personalInfo?.email || ""}
          name="email"
        />
        <InputElement
          label="Phone"
          type="text"
          placeholder="Enter phone Name"
          onChange={handleChangeInput}
          value={personalInfo?.phoneNumber || ""}
          name="phoneNumber"
        />
      </div>
      <InputElement
        label="Designtion"
        type="text"
        placeholder="Software Engineer"
        onChange={handleChangeInput}
        value={personalInfo?.designation || ""}
        name="designation"
      />
      <InputElement
        label="Address"
        type="text"
        placeholder="Enter address"
        onChange={handleChangeInput}
        value={personalInfo?.address || ""}
        name="address"
      />
      <InputElement
        label="Linkedin"
        type="text"
        placeholder="https://linkedin.com/"
        onChange={handleChangeInput}
        value={personalInfo?.linkedin || ""}
        name="linkedin"
      />
      <TextBox
        label="Personal Summary"
        placeholder="Enter your personal summary"
        value={personalInfo?.description || ""}
        onChange={handleChangeInput}
        name="description"
      />
    </>
  );
};
