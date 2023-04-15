import ProjectPanel from 'src/components/organisms/ProjectPanel';
import SideBar from 'src/components/organisms/SideBar';
import SideBarItem from 'src/components/molecules/SideBarItem';
import ToggleButton from 'src/components/atoms/ToggleButton';
import * as s from './style';
import Dropdown from '../../organisms/Dropdown';
import { ToggleButtonAssets } from '../../../assets/asset';
import List from '../../molecules/List';
import ListItem from '../../atoms/ListItem';


const exampleListItems: JSX.Element[] =
  Array.from({ length: 10 }).map(() => <ListItem itemTitle='item' />);

const dropdownItems: string[] =
  Array.from({ length: 10 }).map((_, idx) => `item ${idx}`);

const exampleToggleButtons: string[] =
  Array.from({ length: 10 }).map(() => ToggleButtonAssets.tree);

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
    element={<Dropdown icons={exampleToggleButtons} items={dropdownItems} />}
  />,
  <SideBarItem
    title='Pages'
    element={<ToggleButton onClick={() => alert('pages')} />}
  />,
  <SideBarItem
    title='Pages'
    element={<List items={exampleListItems} />}
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
