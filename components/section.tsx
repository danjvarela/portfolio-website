import { cn } from '@/utils/cn';

type SectionProps = React.ComponentProps<'section'> & {
  sectionTitle?: string;
};

export default function Section({
  children,
  className,
  sectionTitle,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn('w-full p-4 md:pt-12 md:min-w-[320px]', className)}
      {...props}
    >
      {sectionTitle && (
        <h1 className="md:hidden uppercase text-base sticky top-0 p-4 bg-transparent backdrop-blur-lg -mx-4">
          {sectionTitle}
        </h1>
      )}
      {children}
    </section>
  );
}
