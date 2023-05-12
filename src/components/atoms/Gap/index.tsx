import * as s from './style';

type GapProps = {
  height?: number;
}

const defaultProps = {
  height: 32,
};

const Gap = ({ height }: GapProps) => <s.Gap height={height} />;

Gap.defaultProps = defaultProps;

export default Gap;
