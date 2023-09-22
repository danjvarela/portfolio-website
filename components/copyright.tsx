import { cn } from '@/utils/cn';

export default function Copyright({ className }: { className?: string }) {
  const year = new Date().getFullYear();

  return (
    <div className={cn('text-sm whitespace-break-spaces', className)}>
      &copy; 2023 - {year} Dan Varela
    </div>
  );
}
