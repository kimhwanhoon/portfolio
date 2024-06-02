import Image from "next/image";

interface SkillsIconProps {
  src: string;
  name: string;
  width: number;
  height: number;
}

export const SkillsIcon = ({ src, name, width, height }: SkillsIconProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image src={src} alt={name} width={width} height={height} />
      <div className="text-sm font-medium ">{name}</div>
    </div>
  );
};
