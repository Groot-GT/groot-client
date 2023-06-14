import { MouseEvent } from 'react';
import ColorPanel from 'src/components/atoms/ColorPanel';

type UserPanelProps = {
  projectColorPanelLetter: string;
  projectColorPanelColor: string;
  onClick: (e: MouseEvent) => void;
  size?: number;
};

const UserPanel = ({
  projectColorPanelLetter,
  projectColorPanelColor,
  onClick,
  size = 36,
}: UserPanelProps) => (
  <ColorPanel size={size} color={projectColorPanelColor} onClick={onClick}>
    {projectColorPanelLetter}
  </ColorPanel>
);

export default UserPanel;
