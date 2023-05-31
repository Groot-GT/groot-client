import { Project } from 'src/types/project';
import Item from 'src/components/molecules/Item';
import ColorPanel from 'src/components/atoms/ColorPanel';
import { useTheme } from 'styled-components';
import * as s from './style';

type ProjectBoardItemProps = {
  project: Project;
  isGridLayout: boolean;
};

const ProjectBoardItem = ({ project, isGridLayout }: ProjectBoardItemProps) => {
  const handleProjectBoardItemClick = () => {
    alert('handleProjectBoardItemClick');
  };

  const theme = useTheme();

  return (
    <s.ProjectBoardItemWrapper
      onClick={handleProjectBoardItemClick}
      isGridLayout={isGridLayout}
    >
      <Item>
        <s.ProjectBoardItem>
          {project.name}
          <ColorPanel
            color={
              theme.nodeColors[project.owner.color].root || project.owner.color
            }
          />
        </s.ProjectBoardItem>
      </Item>
    </s.ProjectBoardItemWrapper>
  );
};
export default ProjectBoardItem;
