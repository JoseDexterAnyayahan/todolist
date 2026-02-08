type SlideProps = {
  emoji: string;
  title: string;
  description: string;
};

export default function Slide({ emoji, title, description }: SlideProps) {
  return (
    <div className="h-full w-full flex flex-col justify-center px-6 text-white">
      <div className="space-y-4">
        <span className="text-3xl">{emoji}</span>

        <h1 className="text-3xl font-semibold">{title}</h1>

        <p className="text-zinc-400 text-lg leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
}
