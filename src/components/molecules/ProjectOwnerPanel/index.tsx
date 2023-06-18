import { MouseEvent } from 'react';
import { Project } from 'src/types/project';
import { useTheme } from 'styled-components';
import UserPanel from 'src/components/molecules/UserPanel';

const ProjectOwnerPanel = ({ project }: { project: Project }) => {
  const theme = useTheme();

  const projectColorPanelColor =
    theme.nodeColors[project.owner.color].root || project.owner.color;

  const projectColorPanelLetter = project.owner.id.toUpperCase()[0];

  return (
    <UserPanel
      projectColorPanelColor={projectColorPanelColor}
      projectColorPanelLetter={projectColorPanelLetter}
      onClick={(e: MouseEvent) => {
        e.stopPropagation();
        alert(`clicked ${project.name} owner`);
      }}
    />
  );
};

export default ProjectOwnerPanel;
