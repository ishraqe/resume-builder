import cntl from "cntl";
import { FaLinkedin, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useResumeFormContext } from "../../context";

const classes = {
  container: cntl`
      flex 
    `,
  left: cntl`
      bg-white
      w-3/5 p-6
    `,
  right: cntl`
      bg-[red] w-2/5 p-6 flex-1
    `,
  personalInfo: cntl`
      flex flex-col h-[100px]
    `,
  name: cntl`
      text-xl text-[#38464B] font-bold mb-1 uppercase
    `,
  designation: cntl`
      text-[#FF9F5E] text-basis mb-1
    `,
  contactInfoContainer: cntl`
    flex
    `,
  contactWrapper: cntl`
    flex items-center mr-3
    `,
  contactIcon: cntl`
      mr-1 text-[gray] h-[10px] w-[10px]
    `,
  contactText: cntl`
      text-[#38464B] text-[13px]
    `,
  summaryContainer: cntl`
      my-10
    `,
  summaryText: cntl`
    text-sm font-regular  text-[#38464B]
    `,
  experienceContainer: cntl`
      my-10
    `,
  educationContainer: cntl`
    my-10
    `,
  strengthContainer: cntl`
      my-10
    `
};

const PersonalInfoTemplate = () => {
  const { values } = useResumeFormContext();
  const { personalInfo } = values;
  return (
    <section className={classes.personalInfo}>
      <h1 className={classes.name}>
        {personalInfo?.firstName} {personalInfo?.lastName}
      </h1>
      <h3 className={classes.designation}>{personalInfo?.designation}</h3>
      <div className={classes.contactInfoContainer}>
        <span className={classes.contactWrapper}>
          <FaLinkedin className={classes.contactIcon} />
          <span className={classes.contactText}>
            <a href={personalInfo?.linkedin}>{personalInfo?.linkedin}</a>
          </span>
        </span>
        <span className={classes.contactWrapper}>
          <FaEnvelope className={classes.contactIcon} />
          <span className={classes.contactText}>
            <a href={`mailto:${personalInfo?.email}`}>{personalInfo?.email}</a>
          </span>
        </span>
        <span className={classes.contactWrapper}>
          <FaLocationArrow className={classes.contactIcon} />
          <span className={classes.contactText}>
            <a href="#">{personalInfo?.address}</a>
          </span>
        </span>
      </div>
    </section>
  );
};

export default PersonalInfoTemplate;
