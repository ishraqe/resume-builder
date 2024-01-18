import cntl from "cntl";
import { SectionHeadingTemplate } from "./section-heading";

const classes = {
  summaryText: cntl`
    text-sm font-regular  text-[#38464B]
    `
};

const PersonalSummary = ({ summary }: { summary?: string }) => {
  if (!summary) return null;
  return (
    <>
      <SectionHeadingTemplate title="Summary" />
      <p className={classes.summaryText}>{summary}</p>
    </>
  );
};

export default PersonalSummary;
