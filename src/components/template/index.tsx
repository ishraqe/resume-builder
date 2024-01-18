import PersonalInfoTemplate from "./personal-Info";
import { SectionHeadingTemplate } from "./section-heading";
import ExperienceTemplate from "./experience";
import { EducationTemplate } from "./education";
import cntl from "cntl";
import { CertificateTemplate } from "./certificate";
import { useThemeContext } from "@/context/theme-context";
import { useResumeFormContext } from "@/context/resume-form-context";
import { SkillsTemplate } from "./skills";

const classes = {
  summaryText: cntl`
  text-sm font-regular  text-[#38464B]
  `,
  sectionMarginTop: cntl`
    mt-4
  `
};

const Resume = ({}) => {
  const { theme, myRef } = useThemeContext();

  const {
    values: { personalInfo, experiences, skills, educations, certifications }
  } = useResumeFormContext();

  return (
    <div
      ref={myRef}
      style={{
        margin: 0,
        height: "297mm",
        border: `1px solid ${theme}`
      }}
    >
      <div
        className="grid grid-cols-2 h-full"
        style={{ gridTemplateColumns: "70% 30%" }}
      >
        <div className="p-7 h-full">
          <PersonalInfoTemplate personalInfo={personalInfo} />
          {experiences && experiences.length > 0 ? (
            <div className={classes.sectionMarginTop}>
              <SectionHeadingTemplate title="Experience" />
              <ExperienceTemplate experiences={experiences} theme={theme} />
            </div>
          ) : null}
        </div>
        <div className={`bg-${theme}-500  p-4 pt-[127px] h-full`}>
          {skills && skills.length > 0 ? (
            <>
              <SectionHeadingTemplate title="SKILLS" isWhite />
              {skills.map((skill) => (
                <SkillsTemplate key={skill.name} skill={skill} />
              ))}
            </>
          ) : null}
          {educations && educations.length > 0 ? (
            <div className={classes.sectionMarginTop}>
              <SectionHeadingTemplate title="Education" isWhite />
              {educations.map((education) => (
                <EducationTemplate
                  key={education.school}
                  education={education}
                />
              ))}
            </div>
          ) : null}

          {certifications && certifications.length > 0 ? (
            <div className={classes.sectionMarginTop}>
              <SectionHeadingTemplate title="Certifications" isWhite />
              {certifications.map((certificate) => (
                <CertificateTemplate
                  key={certificate.name}
                  certificate={certificate}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Resume;
