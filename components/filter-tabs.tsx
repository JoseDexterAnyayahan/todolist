export default function FilterTabs() {
  return (
    <div className="flex gap-2">
      <button className="px-3 py-1 rounded-full bg-primary text-white text-sm">
        All
      </button>
      <button className="px-3 py-1 rounded-full border text-sm">
        Active
      </button>
      <button className="px-3 py-1 rounded-full border text-sm">
        Done
      </button>
    </div>
  );
}
