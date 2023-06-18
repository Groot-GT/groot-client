import * as s from './style';

type GapProps = {
  height?: number;
};

const Gap = ({ height = 32 }: GapProps) => <s.Gap height={height} />;

export default Gap;
