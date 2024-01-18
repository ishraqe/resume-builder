import React, { ChangeEvent, useState } from "react";
import InputElement from "../common/form/input-element";
import { DatePickerInput } from "../common/form/date-picker";
import { ICertifications } from "./types";
import { certificationsInitialState } from "./constants";
import { PrimaryButton } from "../common/button/primary-button";

interface ICertificateFormProps {
  saveCertificates: (certificateData: ICertifications) => void;
}

const CertificateForm = ({ saveCertificates }: ICertificateFormProps) => {
  const [certificateData, setCertificateData] = useState<ICertifications>(
    certificationsInitialState
  );

  const handleChangeInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setCertificateData({ ...certificateData, [fieldName]: fieldValue || "" });
  };

  const handleChangeDate = (date: Date | null, name: string) => {
    if (certificateData) {
      setCertificateData({ ...certificateData, [name]: date });
    }
  };

  const onSaveCertificationseClick = () => {
    if (certificateData) saveCertificates(certificateData);
  };

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
