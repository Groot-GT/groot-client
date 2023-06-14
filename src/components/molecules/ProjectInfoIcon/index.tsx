import { MouseEvent } from 'react';
import { Project } from 'src/types/project';
import IconButton from 'src/components/molecules/IconButton';

const ProjectInfoIcon = ({ project }: { project: Project }) => (
  <IconButton
    icon="more_vertical"
    onClick={(e: MouseEvent) => {
      e.stopPropagation();
      alert(`clicked ${project.name} info`);
    }}
  />
);

export default ProjectInfoIcon;
