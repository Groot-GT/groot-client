import Divider from 'src/components/atoms/Divider';
import Icon from 'src/components/atoms/Icon';
import Dropdown from 'src/components/organisms/Dropdown';
import * as s from './style';

const StatusPanel = () => (
  <s.PanelsWrapper>
    <s.StatusPanel>
      <s.IconWrapper>
        <Icon iconImg='share' />
      </s.IconWrapper>
      <Divider />
      <s.MagnificationWrapper>
        <Dropdown borderNone items={['100%', '200%', '300%']} />
      </s.MagnificationWrapper>
    </s.StatusPanel>
  </s.PanelsWrapper>
);

export default StatusPanel;
