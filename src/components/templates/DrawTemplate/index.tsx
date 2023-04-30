import ProjectPanel from 'src/components/organisms/ProjectPanel';
import StatusPanel from 'src/components/organisms/StatusPanel';
import CurrentUsersPanel from 'src/components/organisms/CurrentUsersPanel';
import { LeftBar, RightBar } from 'src/components/organisms/SideBar';
import Root from 'src/components/organisms/Root';
import { RootVariant } from 'src/constants/node';
import * as s from './style';

const DrawTemplate = () => (
  <s.DrawTemplateWrapper>
    {/* Top side */}
    <s.TopWrapper>
      <ProjectPanel projectName='Untitled_1' />
      <s.TopRightWrapper>
        <CurrentUsersPanel />
        <StatusPanel />
      </s.TopRightWrapper>
    </s.TopWrapper>

    {/* Middle side */}
    <s.MiddleWrapper>
      {/* Left sidebar */}
      <s.SideWrapper>
        <LeftBar />
      </s.SideWrapper>
      <Root rootVariant={RootVariant.BOTH_SIDE} />
      {/* Right sidebar */}
      <s.SideWrapper>
        <RightBar />
      </s.SideWrapper>
    </s.MiddleWrapper>
  </s.DrawTemplateWrapper>
);

export default DrawTemplate;
