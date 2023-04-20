import ProjectPanel from 'src/components/organisms/ProjectPanel';
import SideBar from 'src/components/organisms/SideBar';
import Root from 'src/components/organisms/Root';
import Dropdown from 'src/components/organisms/Dropdown';
import SideBarItem from 'src/components/molecules/SideBarItem';
import List from 'src/components/molecules/List';
import ListItem from 'src/components/atoms/ListItem';
import ToggleButton from 'src/components/atoms/ToggleButton';
import { RootVariant } from 'src/constants/node';
import { ToggleButtonAssets } from 'src/assets/asset';
import * as s from './style';

const exampleListItems: JSX.Element[] =
  Array.from({ length: 10 }).map(() => <ListItem itemTitle='item' />);

const dropdownItems: string[] =
  Array.from({ length: 10 }).map((_, idx) => `item ${idx}`);

const exampleToggleButtons: string[] =
  Array.from({ length: 10 }).map(() => ToggleButtonAssets.tree);

const LeftBarItems: JSX.Element[] = [
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
      <SideBar sidebarItems={LeftBarItems} />
    </s.SideWrapper>
    <Root rootVariant={RootVariant.BOTH_SIDE} />
    <s.SideWrapper>
      <ProjectPanel projectName='Untitled_1' />
      <SideBar sidebarItems={RightBarItems} />
    </s.SideWrapper>
  </s.DrawTemplateWrapper>
);

export default DrawTemplate;
