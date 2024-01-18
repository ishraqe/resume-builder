import cntl from "cntl";

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

export const CertificateTemplate = () => {
  return (
    <div className={classes.container}>
      <h3 className={classes.certificateTitle}>
        ISTQB Certified Test Engineer
      </h3>
      <span className={classes.date}>February 2019</span>
    </div>
  );
};
