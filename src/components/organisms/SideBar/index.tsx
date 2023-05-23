import { useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { nodeRootVariantState } from 'src/recoil/nodeThemeState';
import { IconType } from 'src/types/icon';
import { RootVariant } from 'src/constants/node';
import Dropdown from 'src/components/organisms/Dropdown';
import PageList from 'src/components/organisms/PageList';
import SearchBar from 'src/components/molecules/SearchBar';
import SideBarDivider from 'src/components/molecules/SideBarDivider';
import SideBarItem from 'src/components/molecules/SideBarItem';
import ColorPanelCollection from 'src/components/molecules/ColorPanelCollection';
import Gap from 'src/components/atoms/Gap';
import SearchMode from './Searchmode';
import * as s from './style';

const rootVariantIcons: IconType[] = [
  'bothSideTree',
  'verticalTree',
  'horizontalTree',
];

const RightBar = () => {
  const [rootVariant, setRootVariant] =
    useRecoilState<RootVariant>(nodeRootVariantState);

  const rootVariantOptions = Object.keys(RootVariant).map(
    (key) => RootVariant[key as keyof typeof RootVariant],
  );

  const isNodeRootVariantOption = (x: string): x is RootVariant =>
    Object.values(RootVariant).includes(x as RootVariant);
  const handleNodeRootVariantChange = (option: string) => {
    if (!isNodeRootVariantOption(option)) return;
    const RootVariantOption = option as RootVariant;
    setRootVariant(RootVariantOption);
  };

  return (
    <s.SideBar>
      <SideBarItem title="Map Theme" />
      <SideBarDivider />
      <SideBarItem
        title="Theme direction"
        element={
          <Dropdown
            icons={rootVariantIcons}
            items={rootVariantOptions}
            setSelectedItem={handleNodeRootVariantChange}
            selectedItem={rootVariant}
          />
        }
      />
      <SideBarItem title="Theme colors" element={<ColorPanelCollection />} />
      <Gap />
    </s.SideBar>
  );
};

const LeftBar = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  const sideBarRef = useRef<HTMLDivElement>(null);
  return (
    <s.SideBar fullHeight ref={sideBarRef}>
      <SideBarItem
        title=""
        element={
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        }
      />
      {searchInput.length ? <SearchMode searchInput={searchInput} /> : null}
      <SideBarDivider />
      <SideBarItem title="Pages" element={<PageList />} noPadding />
      <SideBarDivider />
    </s.SideBar>
  );
};

export { RightBar, LeftBar };
