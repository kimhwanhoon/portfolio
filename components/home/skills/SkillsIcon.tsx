import type { Icon, IconProps } from "@tabler/icons-react";

interface SkillsIconProps {
  Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  name: string;
}

export const SkillsIcon = ({ Icon, name }: SkillsIconProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Icon className="h-10 w-10" />
      <div className="text-sm font-medium ">{name}</div>
    </div>
  );
};
