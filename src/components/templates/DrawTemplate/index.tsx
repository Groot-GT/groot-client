import ProjectPanel from 'src/components/organisms/ProjectPanel';
import { LeftBar, RightBar } from 'src/components/organisms/SideBar';
import Root from 'src/components/organisms/Root';
import { RootVariant } from 'src/constants/node';
import * as s from './style';

const DrawTemplate = () => (
  <s.DrawTemplateWrapper>
    <s.SideWrapper>
      <ProjectPanel projectName='Untitled_1' />
      <LeftBar />
    </s.SideWrapper>
    <Root rootVariant={RootVariant.BOTH_SIDE} />
    <s.SideWrapper>
      <ProjectPanel projectName='Untitled_1' />
      <RightBar />
    </s.SideWrapper>
  </s.DrawTemplateWrapper>
);

export default DrawTemplate;
