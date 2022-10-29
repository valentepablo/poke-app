import { useContext, useRef } from "react";
import TeamContext from "../context/TeamContext";
import Button from "./Button";

const DuplicateModal = () => {
  const { openModal, setOpenModal } = useContext(TeamContext);
  const dialogRef = useRef(null);
  const dialog = dialogRef.current;

  if (openModal) {
    dialog.removeAttribute("open");
    dialog.showModal();
  }

  const handleCloseModal = () => {
    setOpenModal(false);
    dialogRef?.current.close();
  };

  return (
    <dialog
      ref={dialogRef}
      className="dialog-border border-4 border-zinc-900 p-8"
    >
      <p>This Pokemon is already in your Team!</p>

      <div className="mx-auto mt-6 max-w-fit">
        <Button text="Close" onClick={handleCloseModal} />
      </div>
    </dialog>
  );
};

export default DuplicateModal;
