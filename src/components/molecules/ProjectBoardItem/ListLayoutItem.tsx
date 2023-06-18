import { useTheme } from 'styled-components';
import Item from 'src/components/molecules/Item';
import ProjectOwnerPanel from 'src/components/molecules/ProjectOwnerPanel';
import ProjectInfoIcon from 'src/components/molecules/ProjectInfoIcon';
import { Project } from 'src/types/project';
import * as s from './style';

export type LayoutItemProps = {
  project: Project;
  projectDatePhrase: string;
  handleProjectItemClick: () => void;
};

const ListLayoutItem = ({
  project,
  projectDatePhrase,
  handleProjectItemClick,
}: LayoutItemProps) => {
  const theme = useTheme();

  return (
    <s.ProjectBoardListItemWrapper>
      <Item hoverColor={theme.colors.main[0]} onClick={handleProjectItemClick}>
        <s.ProjectBoardListItem>
          <s.ProjectTitle>{project.name}</s.ProjectTitle>
          <s.ProjectDatePhrase>{projectDatePhrase}</s.ProjectDatePhrase>
          <s.ProjectSettings>
            <ProjectOwnerPanel project={project} />
            <ProjectInfoIcon project={project} />
          </s.ProjectSettings>
        </s.ProjectBoardListItem>
      </Item>
    </s.ProjectBoardListItemWrapper>
  );
};
export default ListLayoutItem;
