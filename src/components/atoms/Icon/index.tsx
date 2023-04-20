import { ToggleButtonAssets } from 'src/assets/asset';
import { IconType } from 'src/types/icon';

const Icon = ({ iconImg }: { iconImg: IconType }) =>
  <img src={ToggleButtonAssets[iconImg]} alt={iconImg} />;
export default Icon;
