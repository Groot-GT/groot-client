import SideBarItem from 'src/components/molecules/SideBarItem';
import Dropdown from 'src/components/organisms/Dropdown';
import IconButton from 'src/components/molecules/IconButton';
import SideBarDivider from 'src/components/molecules/SideBarDivider';
import List from 'src/components/molecules/List';
import ListItem from 'src/components/atoms/ListItem';


type SideBarModeProps = {
  changeMode: () => void;
}


const exampleListItems: JSX.Element[] =
  Array.from({ length: 10 }).map(() => <ListItem itemTitle='List item' />);

const DefaultMode = ({ changeMode }: SideBarModeProps) => (
  <>
    <SideBarItem
      title='Search'
      element={<IconButton icon='search' onClick={changeMode} />} />
    <SideBarDivider />
    <SideBarItem
      title='Pages'
      element={<List items={exampleListItems} />}
      noPadding
    />
    <SideBarDivider />
  </>
);

export default DefaultMode;
