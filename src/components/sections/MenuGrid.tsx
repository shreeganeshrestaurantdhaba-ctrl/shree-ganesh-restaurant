import { MenuItem } from "@/types";
import MenuCard from "@/components/ui/MenuCard";
import AnimateSection from "@/components/AnimateSection";

interface Props {
  items: MenuItem[];
}

const MenuGrid: React.FC<Props> = ({ items }) => {
  if (!items.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, i) => (
        <AnimateSection key={item.id} delay={i * 50}>
          <MenuCard item={item} />
        </AnimateSection>
      ))}
    </div>
  );
};

export default MenuGrid;
