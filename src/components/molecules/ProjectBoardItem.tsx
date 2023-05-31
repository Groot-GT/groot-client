import { Project } from 'src/types/project';
import * as s from './style';

type ProjectBoardItemProps = {
  project: Project;
  isGridLayout: boolean;
};

const ProjectBoardItem = ({ project, isGridLayout }: ProjectBoardItemProps) => (
  <s.ProjectBoardItemWrapper isGridLayout={isGridLayout}>
    <div />
    {project.name}
  </s.ProjectBoardItemWrapper>
);

export default ProjectBoardItem;
