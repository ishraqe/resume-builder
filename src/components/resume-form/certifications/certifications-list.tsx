import { FaEdit, FaTrash } from "react-icons/fa";
import { PrimaryButton } from "../../common/button/primary-button";
import { ICertifications } from "../types";
import { formatDate } from "@/utils/utils";

interface ICertificationsListProps {
  certifications: ICertifications;
  onEdit: () => void;
  onRemove: () => void;
}

export const CertificationsList = ({
  certifications,
  onEdit,
  onRemove
}: ICertificationsListProps) => {
  return (
    <div className="w-full h-20 border border-[#e7eaf4] rounded-md flex p-2 mb-2 items-center">
      <div className="flex flex-col w-3/4">
        <span className="text-base leading-5">{certifications.name}</span>
        <span className="text-base leading-5 text-[#828ba2]">
          {formatDate(certifications?.date || "")} -
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
