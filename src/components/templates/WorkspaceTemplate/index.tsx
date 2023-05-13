import ProjectPanel from 'src/components/organisms/ProjectPanel';
import CurrentUsersPanel from 'src/components/organisms/CurrentUsersPanel';
import StatusPanel from 'src/components/organisms/StatusPanel';
import * as s from './style';

const WorkspaceTemplate = () => (
  <s.WorkspaceWrapper>
    <s.TopWrapper>
      <ProjectPanel projectName='Untitled_1' />
      <s.TopRightWrapper>
        <CurrentUsersPanel />
        <StatusPanel />
      </s.TopRightWrapper>
    </s.TopWrapper>
    <s.MiddleWrapper>
      Project boards
    </s.MiddleWrapper>
  </s.WorkspaceWrapper>
);


export default WorkspaceTemplate;
