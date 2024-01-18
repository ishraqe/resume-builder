import { FaEdit, FaTrash } from "react-icons/fa";
import { PrimaryButton } from "../../common/button/primary-button";
import { IExperiences } from "../types";
import { formatDate } from "@/utils/utils";

interface IExperienceListProps {
  experience: IExperiences;
  onEdit: () => void;
  onRemove: () => void;
}

export const ExperienceList = ({
  experience,
  onEdit,
  onRemove
}: IExperienceListProps) => {
  return (
    <div className="w-full h-20 border border-[#e7eaf4] rounded-md flex p-2 items-center">
      <div className="flex flex-col w-3/4">
        <span className="text-base leading-5">
          {experience.title} at {experience.company}
        </span>
        <span className="text-base leading-5 text-[#828ba2]">
          {formatDate(experience?.startDate || "")} -
          {formatDate(experience?.endDate || "")}
        </span>
      </div>
      <div className="w-1/4 flex justify-end gap-2">
        <PrimaryButton onClick={onEdit}>
          <FaEdit />
        </PrimaryButton>

        <PrimaryButton className="bg-red-500" onClick={onRemove}>
          <FaTrash />
        </PrimaryButton>
      </div>
    </div>
  );
};
