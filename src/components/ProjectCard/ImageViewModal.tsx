import { useEffect, useRef } from "react";
import styles from "./ImageViewModal.module.css";

type ImageViewModalProps = {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
};

function ImageViewModal({ imageUrl, isOpen, onClose }: ImageViewModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setTimeout(() => onClose(), 300);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div className={styles.backdrop}>
          <div ref={containerRef} className={styles.dialog}>
            <header>
              <button className={styles["close-button"]} onClick={onClose}>
                X
              </button>
            </header>
            <img src={imageUrl} className={styles.image} />
          </div>
        </div>
      )}
    </>
  );
}

export default ImageViewModal;
