import cntl from "cntl";

const classes = {
  sectionContainer: (isWhite?: boolean): string => cntl`
    py-2 border-b-[2px] border-[gray] mb-2
    ${isWhite ? `border-[#fff]` : "border-[#e6e6e6]"}
  `,
  sectionTitle: (isWhite?: boolean): string => cntl`
    uppercase text-[#38464B] text-base font-semibold
    ${isWhite ? `text-[#fff]` : ""}
  `,
  subTitle: cntl`
    text-[10px]
  `
};

interface ISectionHeadingProps {
  title: string;
  isWhite?: boolean;
}

export const SectionHeadingTemplate = ({
  title,
  isWhite
}: ISectionHeadingProps) => {
  return (
    <div className={classes.sectionContainer(isWhite)}>
      <h2 className={classes.sectionTitle(isWhite)}>{title}</h2>
    </div>
  );
};
