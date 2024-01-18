import { ReactNode } from "react";

interface IModalProps {
  openModal: boolean;
  children: ReactNode;
}

const Modal = ({ openModal, children }: IModalProps) => {
  if (!openModal) {
    return null;
  }

  return (
    <div
      id="default-modal"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full bg-white p-6"
    >
      {children}
    </div>
  );
};

export default Modal;
