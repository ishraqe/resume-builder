import React, { forwardRef } from "react";
import PersonalInfoTemplate from "./personalInfo";
import { SectionHeading } from "./sectionheading";
import ExperienceTemplate from "./experience";
import { EducationTemplate } from "./education";
import cntl from "cntl";
import { CertificateTemplate } from "./certificate";
import Skills from "../resume-form/skills";

const classes = {
  summaryText: cntl`
  text-sm font-regular  text-[#38464B]
  `,
  sectionMarginTop: cntl`
    mt-4
  `
};

const AnotheResume = forwardRef(({ theme }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        margin: 0,
        height: "297mm"
      }}
    >
      <div
        className="grid grid-cols-2 h-full"
        style={{ gridTemplateColumns: "70% 30%" }}
      >
        <div className="p-7 h-full">
          <PersonalInfoTemplate />

          <SectionHeading title="Summary" />
          <p className={classes.summaryText}>
            A creative thinker, adept in software development and working with
            various data structures. Innovative Programmer and Internet
            Entrepreneur striving to make the world a more unified and connected
            place.
          </p>
          <div className={classes.sectionMarginTop}>
            <SectionHeading title="Experience" theme={theme} />
            <ExperienceTemplate theme={theme} />
          </div>
        </div>
        <div className={`bg-${theme}-500  p-4 pt-[127px] h-full`}>
          <SectionHeading title="SKILLS" isWhite />

          <Skills theme={theme} />

          <div className={classes.sectionMarginTop}>
            <SectionHeading title="Education" isWhite />

            <EducationTemplate />
            {/* // <Education theme={theme} /> */}
          </div>

          <div className={classes.sectionMarginTop}>
            <SectionHeading title="Certifications" isWhite />
            <ol className="list-inside list-disc text-gray-700">
              <CertificateTemplate />
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
});

AnotheResume.displayName = "AnotheResume";

export default AnotheResume;
