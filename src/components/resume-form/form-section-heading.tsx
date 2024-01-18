import cntl from "cntl";
import React from "react";

const classes = {
  formHeading: cntl`
          mb-5
      `,
  headingTitle: cntl`
          text-[20px] font-bold
      `,
  headingDesc: cntl`
          text-sm font-regular text-[#828ba2]
      `
};

interface ISeactionHeadingProps {
  title: string;
  subTitle?: string;
}

export const SeactionHeadingForm = ({
  title,
  subTitle
}: ISeactionHeadingProps) => {
  return (
    <div className={classes.formHeading}>
      <h1 className={classes.headingTitle}>{title}</h1>
      {subTitle ? <p className={classes.headingDesc}>{subTitle}</p> : null}
    </div>
  );
};
