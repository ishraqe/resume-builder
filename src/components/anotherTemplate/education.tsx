import { useResumeFormContext } from "@/context";
import cntl from "cntl";

const classes = {
  container: cntl`
    flex flex-col mb-4
  `,
  title: cntl`text-base text-white`,
  org: cntl`
    text-sm text-white
  `,
  timespan: cntl`
    text-[10px] text-white
  `
};

export const EducationTemplate = () => {
  const { values } = useResumeFormContext();
  const { education } = values;

  return (
    <div className={classes.container}>
      <span className={classes.title}>{education?.degree}</span>
      {education?.school && (
        <span className={classes.org}>
          {education?.school}, {education?.location}
        </span>
      )}

      {education?.startDate && education?.endDate && (
        <span className={classes.timespan}>
          {education?.startDate} - {education?.endDate}
        </span>
      )}
    </div>
  );
};
