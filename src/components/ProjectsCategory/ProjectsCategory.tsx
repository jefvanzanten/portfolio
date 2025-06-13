type ProjectCategoryProps = {
  category?: "Recent" | "Frontend" | "Backend" | "Mobile" | "Fullstack";
};

export default function ProjectCategory({ category }: ProjectCategoryProps) {
  return <div>{category}</div>;
}
