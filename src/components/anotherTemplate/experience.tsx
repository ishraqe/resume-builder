import { useResumeFormContext } from "@/context";
import cntl from "cntl";

const classes = {
  container: cntl`
    flex flex-col mt-4 mb-6
    `,
  roleContainer: cntl`
    flex flex-col mb-2
  `,

  roleType: (isCompany?: boolean): string => cntl`
    text-lg font-semibold 
    ${isCompany ? "text-[#FF9F5E]" : "text-[#38464B]"}
  `,

  durationAndLocationText: cntl`
    text-[gray] text-sm
  `,
  responsibilitiesContainer: cntl`
    list-disc pl-3 mt-2
  `,
  responsibilities: cntl`
    text-sm font-regular text-[#38464B]
  `
};

const ExperienceTemplate = () => {
  const {
    values: { experiences }
  } = useResumeFormContext();
  return (
    <>
      {experiences?.map((experience) => {
        return (
          <div className={classes.container} key={experience.startDate}>
            <div className={classes.roleContainer}>
              <span className={classes.roleType(false)}>
                {experience.title}
              </span>
              <span className={classes.roleType(true)}>
                {experience.company} , {experience.company}
              </span>
              <span className={classes.durationAndLocationText}>
                {/* {experience.startDate} - {experience.endDate} */}
              </span>
            </div>
            <ul className={classes.responsibilitiesContainer}>
              <li className={classes.responsibilities}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, placeat?
              </li>
              <li className={classes.responsibilities}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, placeat?
              </li>
              <li className={classes.responsibilities}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, placeat?
              </li>
              <li className={classes.responsibilities}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, placeat?
              </li>
              <li className={classes.responsibilities}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, placeat?
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default ExperienceTemplate;
