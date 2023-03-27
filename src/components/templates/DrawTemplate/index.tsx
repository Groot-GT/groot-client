import ProjectPanel from 'src/components/organisms/ProjectPanel';
import SideBar from 'src/components/organisms/SideBar';
// import { RootVariant } from 'src/constants/node';
// import Root from 'src/components/organisms/Root';
import * as s from './style';

const DrawTemplate = () => (
  <s.DrawTemplateWrapper>
    <s.SideWrapper>
      <ProjectPanel projectName="Untitled_1" />
      <SideBar />
    </s.SideWrapper>
    {/* <Root rootVariant={RootVariant.BOTH_SIDE} /> */}
  </s.DrawTemplateWrapper>
);

export default DrawTemplate;
