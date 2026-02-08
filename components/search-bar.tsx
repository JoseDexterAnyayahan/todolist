import { X, Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClose: () => void;
}

export default function SearchBar({ value, onChange, onClose }: SearchBarProps) {
  return (
    <div className="flex-1 flex items-center gap-2 px-4 py-2.5 rounded-xl border bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 transition-colors">
      <Search size={18} className="text-zinc-400 dark:text-zinc-600" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search tasks..."
        autoFocus
        className="flex-1 bg-transparent outline-none text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
      />
      <button
        onClick={onClose}
        className="text-zinc-400 hover:text-zinc-600 dark:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
      >
        <X size={18} />
      </button>
    </div>
  );
}