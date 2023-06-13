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
};

const ListLayoutItem = ({
  project,
  projectDatePhrase,
}: ProjectBoardItemProps) => {
  const theme = useTheme();
  const projectColorPanelColor =
    theme.nodeColors[project.owner.color].root || project.owner.color;
  const projectColorPanelCapitalLetter = project.owner.id.toUpperCase()[0];

  return (
    <s.ProjectBoardListItemWrapper>
      <Item
        hoverColor={theme.colors.main[0]}
        onClick={(e: MouseEvent) => {
          e.stopPropagation();
          alert(`clicked ${project.name}`);
        }}
      >
        <s.ProjectBoardListItem>
          <s.ProjectTitle>{project.name}</s.ProjectTitle>
          <s.ProjectDatePhrase>{projectDatePhrase}</s.ProjectDatePhrase>
          <s.ProjectSettings>
            <ColorPanel
              color={projectColorPanelColor}
              size={36}
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
                alert(`clicked ${project.name} owner`);
              }}
            >
              {projectColorPanelCapitalLetter}
            </ColorPanel>
            <IconButton
              icon="more_vertical"
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
                alert(`clicked ${project.name} info`);
              }}
            />
          </s.ProjectSettings>
        </s.ProjectBoardListItem>
      </Item>
    </s.ProjectBoardListItemWrapper>
  );
};
export default ListLayoutItem;
