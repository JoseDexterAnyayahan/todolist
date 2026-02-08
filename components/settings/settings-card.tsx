import { ReactNode } from "react";
import { ChevronRight, Crown } from "lucide-react";

interface SettingsCardProps {
  title: string;
  description?: string;
  right?: ReactNode;
  icon?: ReactNode;
  danger?: boolean;
  premium?: boolean;
  onClick?: () => void;
}

export default function SettingsCard({
  title,
  description,
  right,
  icon,
  danger = false,
  premium = false,
  onClick,
}: SettingsCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        w-full rounded-xl border p-4
        flex items-center gap-3
        transition-all
        ${onClick ? 'cursor-pointer' : ''}
        ${
          danger
            ? "border-red-200 bg-red-50 hover:bg-red-100 dark:border-red-900/50 dark:bg-red-950/20 dark:hover:bg-red-950/40"
            : premium
            ? "border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 dark:border-yellow-900/50 dark:from-yellow-950/20 dark:to-orange-950/20 dark:hover:from-yellow-950/40 dark:hover:to-orange-950/40"
            : "border-zinc-200 bg-white hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
        }
      `}
    >
      {/* ICON */}
      {icon && (
        <div
          className={`
            flex-shrink-0
            ${danger ? "text-red-600 dark:text-red-400" : premium ? "text-yellow-600 dark:text-yellow-400" : "text-zinc-600 dark:text-zinc-400"}
          `}
        >
          {icon}
        </div>
      )}

      {/* TEXT */}
      <div className="flex-1 text-left">
        <div className="flex items-center gap-2">
          <h3
            className={`
              font-medium text-sm
              ${danger ? "text-red-900 dark:text-red-100" : premium ? "text-yellow-900 dark:text-yellow-100" : "text-zinc-900 dark:text-white"}
            `}
          >
            {title}
          </h3>
          {premium && (
            <Crown size={14} className="text-yellow-600 dark:text-yellow-400" />
          )}
        </div>
        {description && (
          <p
            className={`
              text-xs mt-0.5
              ${danger ? "text-red-600 dark:text-red-400" : premium ? "text-yellow-600 dark:text-yellow-400" : "text-zinc-500 dark:text-zinc-400"}
            `}
          >
            {description}
          </p>
        )}
      </div>

      {/* RIGHT CONTENT OR CHEVRON */}
      {right ? (
        <div className="flex-shrink-0" onClick={(e) => e.stopPropagation()}>
          {right}
        </div>
      ) : (
        <ChevronRight
          size={18}
          className={`
            flex-shrink-0
            ${danger ? "text-red-400 dark:text-red-500" : premium ? "text-yellow-400 dark:text-yellow-500" : "text-zinc-400 dark:text-zinc-600"}
          `}
        />
      )}
    </div>
  );
}