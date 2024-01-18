import { ChangeEvent, useState } from "react";
import { PrimaryButton } from "../../common/button/primary-button";
import { SeactionHeadingForm } from "../form-section-heading";
import { ICertifications } from "../types";
import Modal from "../../common/modal";
import CertificateForm from "./certificate-form";
import { CertificationsList } from "./certifications-list";
import { useResumeFormContext } from "@/context/resume-form-context";
import { certificationsInitialState } from "@/constant/form";
import { v4 as uuidv4 } from "uuid";

export const Certifications = () => {
  const {
    values: { certifications },
    setCertifications
  } = useResumeFormContext();

  const [showModalForm, setShowModalForm] = useState(false);
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

  const saveCertificates = () => {
    if (certifications && certificateData) {
      if (certificateData.id) {
        const updatedData = certifications.map((item) => {
          if (item.id === certificateData.id) {
            return certificateData;
          }
          return item;
        });

        setCertifications(updatedData);
      } else {
        setCertifications([
          ...certifications,
          { ...certificateData, id: uuidv4() }
        ]);
      }
      setShowModalForm(false);
      setCertificateData(certificateData);
    }
  };

  const onEdit = (formData: ICertifications) => {
    setCertificateData(formData);
    setShowModalForm(true);
  };
  const onRemove = (id: string) => {
    const updatedList: ICertifications[] = (certifications || []).filter(
      (certificate) => certificate.id !== id
    );
    setCertifications(updatedList);
  };

  return (
    <>
      <div className="flex w-full mt-5">
        <SeactionHeadingForm title="Certificates" />
      </div>
      {(certifications || []).map((certificate) => (
        <CertificationsList
          key={certificate.date}
          certifications={certificate}
          onEdit={() => onEdit(certificate)}
          onRemove={() => onRemove(certificate.id)}
        />
      ))}
      <div className="flex w-full justify-center items-center">
        <PrimaryButton
          className="bg-transparent border-none !text-[#1a91f0] hover:bg-transparent hover:border-none"
          onClick={() => setShowModalForm(true)}
        >
          {certifications && certifications.length > 0
            ? "+ Add Another Certifications"
            : "+ Add Certifications"}
        </PrimaryButton>
      </div>
      <Modal openModal={showModalForm}>
        <CertificateForm
          certificateData={certificateData}
          handleChangeInput={handleChangeInput}
          handleChangeDate={handleChangeDate}
          onSaveCertificationseClick={saveCertificates}
        />
      </Modal>
    </>
  );
};
