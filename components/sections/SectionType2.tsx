// Section_2 => Title, subtitle

interface SectionType2Props {
  title: string;
  subtitle: string;
  className?: string;
}

export const SectionType2: React.FC<SectionType2Props> = ({
  title,
  subtitle,
  className = "",
}) => {
  return (
    <section className={`flex justify-center py-8 md:py-14 ${className}`}>
      <div className="container space-y-10 px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-700">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};