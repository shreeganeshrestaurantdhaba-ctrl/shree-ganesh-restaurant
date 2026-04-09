import { Category } from "@/types";

interface Props {
  categories: Category[];
  active: string;
  onChange: (id: string) => void;
}

const CategoryTabs: React.FC<Props> = ({ categories, active, onChange }) => (
  <div className="flex overflow-x-auto gap-2 pb-4 mb-8 scrollbar-hide -mx-4 px-4">
    {categories.map((cat) => (
      <button
        key={cat.id}
        onClick={() => onChange(cat.id)}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer ${active === cat.id ? "bg-primary text-white shadow-md" : "bg-white text-text-dark hover:bg-primary/10 border border-gray-200"}`}
      >
        <span>{cat.emoji}</span> {cat.label}
      </button>
    ))}
  </div>
);

export default CategoryTabs;
