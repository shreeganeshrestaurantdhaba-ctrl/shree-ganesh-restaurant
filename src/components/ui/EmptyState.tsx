interface Props {
  onReset: () => void;
}

const EmptyState: React.FC<Props> = ({ onReset }) => (
  <div className="text-center py-16">
    <p className="text-6xl">🔍</p>
    <h3 className="text-xl font-heading">No items found</h3>
    <p className="text-text-light mt-2">
      Try searching with different keywords or browse a different category.
    </p>
    <button onClick={onReset} className="text-primary mt-4">
      View All
    </button>
  </div>
);

export default EmptyState;
