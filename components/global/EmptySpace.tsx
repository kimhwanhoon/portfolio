interface EmptySpaceProps {
  height: number;
}

// dummy component to hide empty space
export const EmptySpace: React.FC<EmptySpaceProps> = ({ height }) => (
  <div style={{ height: height }}></div>
);
