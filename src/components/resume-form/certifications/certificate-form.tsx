import React, { ChangeEvent } from "react";
import InputElement from "../../common/form/input-element";
import { DatePickerInput } from "../../common/form/date-picker";
import { ICertifications } from "../types";
import { PrimaryButton } from "../../common/button/primary-button";

interface ICertificateFormProps {
  certificateData: ICertifications;
  handleChangeInput: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleChangeDate: (date: Date | null, name: string) => void;
  onSaveCertificationseClick: () => void;
}

const CertificateForm = ({
  certificateData,
  handleChangeInput,
  handleChangeDate,
  onSaveCertificationseClick
}: ICertificateFormProps) => {
  return (
    <>
      <InputElement
        label="Name"
        name="name"
        placeholder="AWS Certified Developer - Associate"
        value={certificateData.name}
        onChange={handleChangeInput}
        type="text"
      />
      <DatePickerInput
        name="date"
        label="Date"
        value={certificateData.date}
        onChange={(e) => handleChangeDate(e, "date")}
        placeholder="DD/MM/YYYY"
      />
      <div className="w-full flex justify-center items-center mt-10">
        <PrimaryButton onClick={onSaveCertificationseClick}>
          Save Certificate
        </PrimaryButton>
      </div>
    </>
  );
};

export default CertificateForm;
