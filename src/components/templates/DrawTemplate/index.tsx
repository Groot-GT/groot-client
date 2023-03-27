import ProjectPanel from 'src/components/organisms/ProjectPanel';
import SideBar from 'src/components/organisms/SideBar';
import SideBarItem from 'src/components/atoms/SideBarItem';
import ToggleButton from 'src/components/atoms/ToggleButton';
import { RootVariant } from 'src/constants/node';
import Root from 'src/components/organisms/Root';
import * as s from './style';

const LeftBarItems = [
  <SideBarItem
    title="Map theme"
    element={<ToggleButton onClick={() => alert('searchIcon')} />}
  />,
  <SideBarItem
    title="Theme direction"
    element={<ToggleButton onClick={() => alert('Theme direction')} />}
  />,
  <SideBarItem
    title="Pages"
    element={<ToggleButton onClick={() => alert('pages')} />}
  />,
];

const RightBarItems = [
  <SideBarItem
    title="Map theme"
    element={<ToggleButton onClick={() => alert('searchIcon')} />}
  />,
];

const DrawTemplate = () => (
  <s.DrawTemplateWrapper>
    <s.SideWrapper>
      <ProjectPanel projectName="Untitled_1" />
      <SideBar SideBarItems={LeftBarItems} />
    </s.SideWrapper>
    <Root rootVariant={RootVariant.BOTH_SIDE} />
    <s.SideWrapper>
      <ProjectPanel projectName="Untitled_1" />
      <SideBar SideBarItems={RightBarItems} />
    </s.SideWrapper>
  </s.DrawTemplateWrapper>
);

export default DrawTemplate;
