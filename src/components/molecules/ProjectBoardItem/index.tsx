import { MouseEvent } from 'react';
import { useTheme } from 'styled-components';
import { Project } from 'src/types/project';
import Item from 'src/components/molecules/Item';
import ColorPanel from 'src/components/atoms/ColorPanel';
import IconButton from 'src/components/molecules/IconButton';
import * as s from './style';

type ProjectBoardItemProps = {
  project: Project;
  projectDatePhrase: string;
  isGridLayout: boolean;
};

const ProjectBoardItem = ({
  project,
  projectDatePhrase,
  isGridLayout,
}: ProjectBoardItemProps) => {
  const handleProjectBoardItemClick = (e: MouseEvent) => {
    e.stopPropagation();
    alert(`clicked ${project.name}`);
  };

  const handleProjectInfoClick = (e: MouseEvent) => {
    e.stopPropagation();
    alert(`clicked ${project.name} info`);
  };

  const handleProjectOwnerClick = (e: MouseEvent) => {
    e.stopPropagation();
    alert(`clicked ${project.name} owner`);
  };

  const theme = useTheme();

  return (
    <s.ProjectBoardItemWrapper isGridLayout={isGridLayout}>
      <Item
        hoverColor={theme.colors.main[0]}
        onClick={handleProjectBoardItemClick}
      >
        <s.ProjectBoardItem>
          <s.ProjectTitle>{project.name}</s.ProjectTitle>
          <s.ProjectDatePhrase>{projectDatePhrase}</s.ProjectDatePhrase>
          <s.ProjectSettings>
            <ColorPanel
              color={
                theme.nodeColors[project.owner.color].root ||
                project.owner.color
              }
              size={36}
              onClick={(e: MouseEvent) => handleProjectOwnerClick(e)}
            >
              {project.owner.id[0]}
            </ColorPanel>
            <IconButton icon="more_vertical" onClick={handleProjectInfoClick} />
          </s.ProjectSettings>
        </s.ProjectBoardItem>
      </Item>
    </s.ProjectBoardItemWrapper>
  );
};
export default ProjectBoardItem;
