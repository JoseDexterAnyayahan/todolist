"use client";

interface FilterTabsProps {
  selected: "all" | "active" | "completed";
  onChange: (filter: "all" | "active" | "completed") => void;
}

export default function FilterTabs({ selected, onChange }: FilterTabsProps) {
  const tabs = [
    { value: "all" as const, label: "All" },
    { value: "active" as const, label: "Active" },
    { value: "completed" as const, label: "Completed" },
  ];

  return (
    <div className="relative flex gap-1 p-1.5 bg-muted/50 rounded-2xl border border-border backdrop-blur-sm">
      {tabs.map((tab) => {
        const isSelected = selected === tab.value;
        
        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={`
              relative flex-1 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden group
              ${
                isSelected
                  ? "bg-background text-foreground shadow-lg shadow-black/5 dark:shadow-black/20 scale-[1.02]"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50 active:scale-95"
              }
            `}
          >
            {isSelected && (
              <>
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent rounded-xl" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full" />
              </>
            )}
            
            <span className="relative z-10 tracking-wide">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}