import CurrentUsersPanel from 'src/components/organisms/CurrentUsersPanel';
import StatusPanel from 'src/components/organisms/StatusPanel';
import WorkspaceProjectBoard from 'src/components/organisms/WorkspaceProjectBoard';
import * as s from './style';
import LogoButton from '../../atoms/LogoButton';

const WorkspaceTemplate = () => (
  <s.WorkspaceWrapper>
    <s.LayerWrapper>
      <LogoButton fullLogo bgTransparent />
      <s.TopRightWrapper>
        <CurrentUsersPanel />
        <StatusPanel />
      </s.TopRightWrapper>
    </s.LayerWrapper>
    <s.MiddleWrapper>
      <WorkspaceProjectBoard />
    </s.MiddleWrapper>
  </s.WorkspaceWrapper>
);

export default WorkspaceTemplate;
