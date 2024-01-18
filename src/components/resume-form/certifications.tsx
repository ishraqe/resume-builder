import { useState } from "react";
import { PrimaryButton } from "../common/button/primary-button";
import { SeactionHeading } from "./heading";
import { ICertifications } from "./types";
import Modal from "../common/modal";
import CertificateForm from "./certificateForm";
import { CertificationsList } from "./certificationsList";
import { useResumeFormContext } from "@/context";

export const Certifications = () => {
  const {
    values: { certifications },
    setCertifications
  } = useResumeFormContext();

  const [showModalForm, setShowModalForm] = useState(false);

  const saveCertificates = (certificateData: ICertifications) => {
    if (certifications && certifications) {
      setCertifications([...certifications, certificateData]);
      setShowModalForm(false);
    }
  };

  return (
    <>
      <div className="flex w-full mt-5">
        <SeactionHeading title="Certificates" />
      </div>
      {(certifications || []).map((certificate, index) => (
        <CertificationsList
          key={certificate.date}
          certifications={certificate}
          index={index}
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
        <CertificateForm saveCertificates={saveCertificates} />
      </Modal>
    </>
  );
};
