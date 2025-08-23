import { ReactNode, useState } from "react";
import FilterButton from "./FilterButton/FilterButton";
import FilterMenu from "./FilterMenu/FilterMenu";

export default function FilterWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <FilterButton handleClick={() => setIsOpen(!isOpen)} />
      {isOpen && <FilterMenu />}
    </div>
  );
}
