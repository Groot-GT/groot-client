import { MouseEvent } from 'react';
import { useTheme } from 'styled-components';
import Item from 'src/components/molecules/Item';
import IconButton from 'src/components/molecules/IconButton';
import ProjectOwnerPanel from 'src/components/molecules/ProjectOwnerPanel';
import { LayoutItemProps } from './ListLayoutItem';
import * as s from './style';

const GridLayoutItem = ({
  project,
  projectDatePhrase,
  handleProjectItemClick,
}: LayoutItemProps) => {
  const theme = useTheme();

  return (
    <s.ProjectBoardGridItemWrapper>
      <Item hoverColor={theme.colors.main[0]} onClick={handleProjectItemClick}>
        <s.ProjectBoardGridItem>
          <s.ProjectTitle>{project.name}</s.ProjectTitle>
          <IconButton
            icon="more_vertical"
            onClick={(e: MouseEvent) => {
              alert(`clicked ${project.name} info`);
              e.stopPropagation();
            }}
          />
          <s.ProjectSettings>
            <s.ProjectDatePhrase>{projectDatePhrase}</s.ProjectDatePhrase>
            <ProjectOwnerPanel project={project} />
          </s.ProjectSettings>
        </s.ProjectBoardGridItem>
      </Item>
    </s.ProjectBoardGridItemWrapper>
  );
};
export default GridLayoutItem;
