import { ToggleButtonAssets } from 'src/assets/asset';
import { IconType } from 'src/types/icon';
import * as s from './style';

const Icon = ({ iconImg }: { iconImg: IconType }) => (
  <s.Img src={ToggleButtonAssets[iconImg]} alt={iconImg} />
);
export default Icon;
