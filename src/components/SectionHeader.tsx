import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  /** "dark" = header sits on a dark (navy) background. */
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("font-serif text-3xl font-bold md:text-4xl", tone === "dark" ? "text-white" : "text-brand-navy")}>
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-lg", tone === "dark" ? "text-white/75" : "text-brand-muted")}>{description}</p>
      ) : null}
    </div>
  );
}
