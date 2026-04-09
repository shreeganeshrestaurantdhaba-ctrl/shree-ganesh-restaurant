import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => (
  <div className="relative max-w-md mx-auto mb-8">
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light" size={20} />
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search menu items..."
      className="input pl-12"
    />
  </div>
);

export default SearchBar;