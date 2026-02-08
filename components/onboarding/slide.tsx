export default function Slide({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center max-w-xs mx-auto flex flex-col items-center">

      {/* ICON BLOCK */}
      <div
        className="
          w-20 h-20 rounded-2xl
          backdrop-blur-xl shadow-inner
          flex items-center justify-center mb-8
          border
          bg-zinc-100/80 border-zinc-200
          dark:bg-zinc-900/80 dark:border-zinc-800
          transition-colors
        "
      >
        <div
          className="
            w-8 h-8 rounded-lg
            bg-gradient-to-br
            from-black/20 to-transparent
            dark:from-white/40
          "
        />
      </div>

      <h1
        className="
          text-2xl font-semibold tracking-tight
          text-black dark:text-white
          transition-colors
        "
      >
        {title}
      </h1>

      <p
        className="
          mt-4 text-sm leading-relaxed
          text-zinc-600 dark:text-zinc-400
          transition-colors
        "
      >
        {description}
      </p>
    </div>
  );
}
