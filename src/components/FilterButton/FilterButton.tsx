import styles from "./FilterButton.module.css";

type FilterButtonProps = {
  handleClick: () => void;
};

export default function FilterButton({ handleClick }: FilterButtonProps) {
  return (
    <button className={styles.button} onClick={handleClick}>
      Filter
    </button>
  );
}
