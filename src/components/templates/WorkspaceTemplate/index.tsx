import CurrentUsersPanel from 'src/components/organisms/CurrentUsersPanel';
import WorkspaceProjectBoard from 'src/components/organisms/WorkspaceProjectBoard';
import LogoButton from 'src/components/atoms/LogoButton';
import ProjectControlPanel from 'src/components/organisms/ProjectControlPanel';
import * as s from './style';

const WorkspaceTemplate = () => (
  <s.WorkspaceWrapper>
    <s.LayerWrapper>
      <LogoButton fullLogo bgTransparent />
      <s.TopRightWrapper>
        <CurrentUsersPanel />
        <ProjectControlPanel />
      </s.TopRightWrapper>
    </s.LayerWrapper>
    <s.MiddleWrapper>
      <WorkspaceProjectBoard />
    </s.MiddleWrapper>
  </s.WorkspaceWrapper>
);

export default WorkspaceTemplate;
