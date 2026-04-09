import React from "react";
import { ContactItem } from "@/types";

interface Props {
  item: ContactItem;
}

const ContactCard: React.FC<Props> = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="flex items-start gap-4 p-5 bg-primary/5 rounded-xl border border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-md">
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
        {item.icon}
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>

        {item.action ? (
          <a
            href={item.action}
            className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium"
          >
            {item.details.join(", ")}
          </a>
        ) : (
          <p className="text-muted-foreground">{item.details.join(", ")}</p>
        )}
      </div>
    </div>
  );
};

export default React.memo(ContactCard);
