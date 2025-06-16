import styles from "./CarouselButton.module.css";

type CarouselButtonProps = {
  symbol: string;
  handlePress?: () => void;
};

export default function CarouselButton({
  symbol,
  handlePress,
}: CarouselButtonProps) {
  return (
    <button className={styles.button} onClick={handlePress}>
      {symbol}
    </button>
  );
}
