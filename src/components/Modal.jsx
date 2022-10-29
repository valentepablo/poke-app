import { useContext, useRef } from "react";
import TeamContext from "../context/TeamContext";
import Button from "./Button";

const Modal = () => {
  const { openModal, setOpenModal, myTeam } = useContext(TeamContext);
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
      className="dialog-border max-w-2xl border-4 border-zinc-900 p-8"
    >
      {myTeam.length >= 6 ? (
        <p>
          Your Team is full, remove a Pokemon if you want to recruit another
          one!
        </p>
      ) : (
        <p>This Pokemon is already in your Team!</p>
      )}

      <div className="mx-auto mt-6 max-w-fit">
        <Button text="Close" onClick={handleCloseModal} />
      </div>
    </dialog>
  );
};

export default Modal;
