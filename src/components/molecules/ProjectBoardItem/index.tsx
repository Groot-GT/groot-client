import { Project } from 'src/types/project';
import GridLayoutItem from './GridLayoutItem';
import ListLayoutItem from './ListLayoutItem';

type ProjectBoardItemProps = {
  project: Project;
  projectDatePhrase: string;
  isGridLayout: boolean;
};

const ProjectBoardItem = ({
  project,
  projectDatePhrase,
  isGridLayout,
}: ProjectBoardItemProps) =>
  isGridLayout ? (
    <GridLayoutItem project={project} projectDatePhrase={projectDatePhrase} />
  ) : (
    <ListLayoutItem project={project} projectDatePhrase={projectDatePhrase} />
  );
export default ProjectBoardItem;
