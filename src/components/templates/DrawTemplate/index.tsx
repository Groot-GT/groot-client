import ProjectPanel from 'src/components/organisms/ProjectPanel';
import SideBar from 'src/components/organisms/SideBar';
import SideBarItem from 'src/components/atoms/SideBarItem';
import ToggleButton from 'src/components/atoms/ToggleButton';
import * as s from './style';
import Dropdown from '../../organisms/Dropdown';

const exampleListItems: string[] =
  Array.from({ length: 10 }).map((_, i) => `Item ${i}`);

const LeftBarItems: JSX.Element[] = [
  <SideBarItem
    title='Map theme'
    element={<ToggleButton onClick={() => alert('searchIcon')} />}
  />,
  <SideBarItem
    title='Theme direction'
    element={<ToggleButton onClick={() => alert('Theme direction')} />}
  />,
  <SideBarItem
    title='Pages'
    element={<ToggleButton onClick={() => alert('pages')} />}
  />,
  <SideBarItem
    title='Themes'
    element={<Dropdown items={exampleListItems} />}
  />,
  <SideBarItem
    title='Pages'
    element={<ToggleButton onClick={() => alert('pages')} />}
  />,
];


const RightBarItems = [
  <SideBarItem
    title='Map theme'
    element={<ToggleButton onClick={() => alert('searchIcon')} />}
  />,
];

const DrawTemplate = () => (
  <s.DrawTemplateWrapper>
    <s.SideWrapper>
      <ProjectPanel projectName='Untitled_1' />
      <SideBar SideBarItems={LeftBarItems} />
    </s.SideWrapper>
    <s.SideWrapper>
      <ProjectPanel projectName='Untitled_1' />
      <SideBar SideBarItems={RightBarItems} />
    </s.SideWrapper>
  </s.DrawTemplateWrapper>
);

export default DrawTemplate;
