import ProjectPanel from 'src/components/organisms/ProjectPanel';
import CurrentUsersPanel from 'src/components/organisms/CurrentUsersPanel';
import StatusPanel from 'src/components/organisms/StatusPanel';
import * as s from './style';
import WorkspaceProjectBorads from '../../organisms/WorkspaceProjectBorads';

const WorkspaceTemplate = () => (
  <s.WorkspaceWrapper>
    <s.LayerWrapper>
      <ProjectPanel projectName='Untitled_1' />
      <s.TopRightWrapper>
        <CurrentUsersPanel />
        <StatusPanel />
      </s.TopRightWrapper>
    </s.LayerWrapper>
    <s.MiddleWrapper>
      <WorkspaceProjectBorads />
    </s.MiddleWrapper>
  </s.WorkspaceWrapper>
);


export default WorkspaceTemplate;
