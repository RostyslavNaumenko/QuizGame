import { useState } from "react";
import styles from "./addPlayer.module.css";

interface AddPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (name: string) => void;
  closeOnOverlayClick?: boolean;
}

export const AddPlayer: React.FC<AddPlayerProps> = ({
  isOpen,
  onClose,
  onAdd,
  closeOnOverlayClick = true,
}) => {
  const [name, setName] = useState("");

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  const handleAdd = () => {
    onAdd(name);
    setName("");
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <h2 className={styles.modalTitle}>Add Player</h2>

        <input
          type="text"
          placeholder="Enter player name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />

        <button className={styles.submitButton} onClick={handleAdd}>
          Save
        </button>
      </div>
    </div>
  );
};
