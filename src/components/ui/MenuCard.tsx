import { Flame, Utensils } from "lucide-react";
import { MenuItem } from "@/types";

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <div className="menu-card group">
      {item.popular && (
        <div className="badge">
          <Flame size={10} /> Popular
        </div>
      )}

      <div className="flex gap-4">
        <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
          {item.emoji}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-text-dark text-sm truncate">
              {item.name}
            </h3>
            <span
              title="Pure Veg"
              className="w-3 h-3 border-2 border-green-600 rounded-sm flex items-center justify-center"
            >
              <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
            </span>
          </div>

          <p className="text-text-light text-xs leading-relaxed mb-2 line-clamp-2">{item.description}</p>

          <div className="flex-center justify-between">
            <p className="text-primary font-bold text-lg">₹{item.price}</p>

            <Utensils className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
