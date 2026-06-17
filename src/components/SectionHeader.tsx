import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl font-bold text-brand-navy md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg text-brand-muted">{description}</p>
      ) : null}
    </div>
  );
}
