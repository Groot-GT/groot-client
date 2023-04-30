import Divider from 'src/components/atoms/Divider';
import Icon from 'src/components/atoms/Icon';
import * as s from './style';
import Dropdown from '../Dropdown';

const StatusPanel = () => (
  <s.StatusPanel>
    <s.IconWrapper>
      <Icon iconImg='share' />
    </s.IconWrapper>
    <Divider />
    <s.MagnificationWrapper>
      <Dropdown borderNone items={['100%', '200%', '300%']} />
    </s.MagnificationWrapper>
  </s.StatusPanel>

);

export default StatusPanel;
