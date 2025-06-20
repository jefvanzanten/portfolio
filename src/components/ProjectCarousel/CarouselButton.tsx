import styles from "./CarouselButton.module.css";

type Direction = "next" | "previous";

type CarouselButtonProps = {
  direction: Direction;
  handlePress?: () => void;
};

export default function CarouselButton({
  direction,
  handlePress,
}: CarouselButtonProps) {
  return (
    <button
      className={`
      ${styles.button}
      ${
        direction === "next" ? styles["next-button"] : styles["previous-button"]
      }
    `}
      onClick={handlePress}
    >
      {direction === "next" ? "▶" : "◀"}
    </button>
  );
}
