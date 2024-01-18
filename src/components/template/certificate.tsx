import cntl from "cntl";
import { ICertifications } from "../resume-form/types";
import { formatDate } from "@/utils/utils";

const classes = {
  container: cntl`
    flex flex-col mb-2
  `,
  certificateTitle: cntl`
    text-[#fff] text-sm font-regular
  `,
  date: cntl`
    text-[#fff] text-[10px]
  `
};

export const CertificateTemplate = ({
  certificate
}: {
  certificate: ICertifications;
}) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.certificateTitle}>{certificate.name}</h3>
      <span className={classes.date}>{formatDate(certificate.date)}</span>
    </div>
  );
};
