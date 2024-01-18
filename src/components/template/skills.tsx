import cntl from "cntl";
import { ISkils } from "../resume-form/types";
import StarRatings from "react-star-ratings";

const classes = {
  container: cntl`
     grid grid-cols-1 
    `,
  skill: cntl`
      text-white text-sm font-regular
    `
};

interface ISkillsTemplateProps {
  skill: ISkils;
}

export const SkillsTemplate = ({ skill }: ISkillsTemplateProps) => {
  return (
    <div className={classes.container}>
      <div className="flex mx-4" key={skill.name}>
        <div className="mr-5">
          <span className="mr-4 text-sm font-regular capitalize text-[#fff]">
            {skill.name}
          </span>
          <StarRatings numberOfStars={skill.score} starDimension="20" />
        </div>
      </div>
    </div>
  );
};
