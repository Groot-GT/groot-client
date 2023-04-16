import { ToggleButtonAssets } from 'src/assets/asset';


// type IconProps = typeof ToggleButtonAssets[keyof typeof ToggleButtonAssets];
type IconProps = keyof typeof ToggleButtonAssets;

const Icon = ({ iconImg }: { iconImg: IconProps }) =>
  <img src={ToggleButtonAssets[iconImg]} alt={iconImg} />;
export default Icon;
