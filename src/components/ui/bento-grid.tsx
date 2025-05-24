import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid my-6 grid-cols-1 gap-4 md:auto-rows-[9rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-border bg-card p-4 transition duration-200 hover:shadow-md dark:bg-black dark:shadow-none",
        className
      )}
    >
      <div className="transition group-hover/bento:translate-x-1 duration-200">
        <h3>{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
