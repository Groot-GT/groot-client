import { useRecoilState } from 'recoil';
import { nodeRootVariantState } from 'src/recoil/nodeThemeState';
import Dropdown from 'src/components/organisms/Dropdown';
import { IconType } from 'src/types/icon';
import { RootVariant } from 'src/constants/node';

const rootVariantIcons: IconType[] = [
  'bothSideTree',
  'verticalTree',
  'horizontalTree',
];

const ThemeDirectionDropdown = () => {
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
    <Dropdown
      icons={rootVariantIcons}
      items={rootVariantOptions}
      setSelectedItem={handleNodeRootVariantChange}
      selectedItem={rootVariant}
    />
  );
};
export default ThemeDirectionDropdown;
