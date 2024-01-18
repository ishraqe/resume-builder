import { FaEdit, FaTrash } from "react-icons/fa";
import { PrimaryButton } from "../../common/button/primary-button";
import { IEducation } from "../types";
import { formatDate } from "@/utils/utils";

interface IEducationListProps {
  education: IEducation;
  onEdit: () => void;
  onRemove: () => void;
}

export const EducationList = ({
  education,
  onEdit,
  onRemove
}: IEducationListProps) => {
  return (
    <div className="w-full h-20 border border-[#e7eaf4] rounded-md flex p-2 items-center mb-2">
      <div className="flex flex-col w-3/4">
        <span className="text-base leading-5">
          {education.degree} at {education.school}
        </span>
        <span className="text-base leading-5 text-[#828ba2]">
          {formatDate(education?.startDate || "")} -
          {formatDate(education?.endDate || "")}
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
