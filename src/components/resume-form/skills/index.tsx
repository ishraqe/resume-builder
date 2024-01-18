import { useResumeFormContext } from "@/context/resume-form-context";
import InputElement from "../../common/form/input-element";
import { ChangeEvent, useState } from "react";
import { SeactionHeadingForm } from "../form-section-heading";
import { ISkils } from "../types";
import { skillsInitialState } from "../../../constant/form";
import { PrimaryButton } from "../../common/button/primary-button";
import { Rating } from "../../common/form/rating";
import StarRatings from "react-star-ratings";
import { v4 as uuidv4 } from "uuid";
import { FaTrash } from "react-icons/fa";
import { SkillsValidationErrors, validateSkills } from "@/utils/validation";

export const SkillsForm = () => {
  const {
    values: { skills },
    setSkills
  } = useResumeFormContext();

  const [skillsData, setSkillsData] = useState<ISkils>(skillsInitialState);
  const [showSkillsForm, setShowSkillsForm] = useState(false);
  const [error, setError] = useState<SkillsValidationErrors>({});

  const handleChangeInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const fieldValue = e.target.value;
    setSkillsData({
      ...skillsData,
      name: fieldValue
    });
  };
  const onChangeStar = (score: number) => {
    setSkillsData({
      ...skillsData,
      score: score
    });
  };

  const saveSkills = () => {
    const validationErrors = validateSkills(skillsData);

    if (validationErrors) {
      setError(validationErrors);
      return;
    }
    if (skills && skillsData) {
      if (skillsData.id) {
        const updatedData = skills.map((item) => {
          if (item.id === skillsData.id) {
            return skillsData;
          }
          return item;
        });

        setSkills(updatedData);
      } else {
        setSkills([...skills, { ...skillsData, id: uuidv4() }]);
      }
      setShowSkillsForm(false);
      setSkillsData(skillsInitialState);
      setError({});
    }
  };

  const onRemove = (id: string) => {
    const updatedList: ISkils[] = (skills || []).filter(
      (skill) => skill.id !== id
    );
    setSkills(updatedList);
  };

  return (
    <>
      <div className="flex w-full mt-5">
        <SeactionHeadingForm
          title="Skills"
          subTitle="Show your relevant skills (last 10 years)."
        />
      </div>
      <div className="flex flex-col w-full">
        {(skills || []).map((skill) => {
          return (
            <div className="flex mx-4" key={skill.name}>
              <div className="mr-5">
                <span className="mr-4 capitalize text-sm font-regular text-[#333]">
                  {skill.name}
                </span>
                <StarRatings numberOfStars={skill.score} starDimension="20" />
              </div>
              <PrimaryButton
                className="bg-red-500"
                onClick={() => onRemove(skill.id)}
              >
                <FaTrash className="w-2 h-2" />
              </PrimaryButton>
            </div>
          );
        })}
      </div>
      {showSkillsForm ? (
        <div className="flex items-center justify-start w-full gap-5">
          <div className="w-[40%]">
            <InputElement
              label="Skills"
              type="text"
              placeholder="JavaScript"
              onChange={handleChangeInput}
              value={skillsData?.name || ""}
              name="name"
              error={error.name}
            />
          </div>

          <div className="w-[40%] flex">
            <Rating
              value={skillsData.score}
              name="skill"
              onChange={onChangeStar}
              numberOfStars={5}
              error={error.score}
            />
            <PrimaryButton className="flex" onClick={saveSkills}>
              Save
            </PrimaryButton>
            <PrimaryButton
              className="bg-transparent border-none !text-[#1a91f0] hover:bg-transparent hover:border-none"
              onClick={() => {
                setShowSkillsForm(false);
                setError({});
              }}
            >
              Close
            </PrimaryButton>
          </div>
        </div>
      ) : null}

      <div className="flex w-full justify-center items-center">
        <PrimaryButton
          className="bg-transparent border-none !text-[#1a91f0] hover:bg-transparent hover:border-none"
          onClick={() => setShowSkillsForm(true)}
        >
          {skills && skills.length > 0 ? "+ Add Another Skill" : "+ Add Skill"}
        </PrimaryButton>
      </div>
    </>
  );
};
