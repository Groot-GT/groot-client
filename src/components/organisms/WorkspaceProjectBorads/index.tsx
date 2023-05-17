import { useRecoilValue } from 'recoil';
import Dropdown from 'src/components/organisms/Dropdown';
import IconButton from 'src/components/molecules/IconButton';
import Item from 'src/components/molecules/Item';
import projectState, { projectCreatedAtDatesSelector, projectOwnersSelector } from 'src/recoil/projectState';
import * as s from './style';

const WorkspaceProjectBorads = () => {
  const projects = useRecoilValue(projectState);
  const projectOwners = useRecoilValue(projectOwnersSelector);
  const projectCreatedAtDates = useRecoilValue(projectCreatedAtDatesSelector);

  return (
    <s.BoardsWrapper>
      <s.OptionsWrapper>
        <s.TitleWrapper>
          Project Boards
        </s.TitleWrapper>
        <Dropdown items={projectOwners} />
        <Dropdown items={projectCreatedAtDates} />
        <IconButton icon='menu' onClick={() => {
        }} />
        <IconButton icon='viewBoxes' onClick={() => {
        }} />
      </s.OptionsWrapper>
      {Object.entries(projects).map(([projectId, project]) => (
        <Item key={projectId} itemTitle={project.name} deleteItem={undefined} />))
      }
    </s.BoardsWrapper>
  );
};

export default WorkspaceProjectBorads;
