import { useRecoilState } from 'recoil';
import MagnifyAmountState from 'src/recoil/magnifyAmountState';
import Divider from 'src/components/atoms/Divider';
import Icon from 'src/components/atoms/Icon';
import Dropdown from 'src/components/organisms/Dropdown/DefaultDropdown';
import { magnifyAmountOptions } from 'src/constants/magnify';
import * as s from './style';

const StatusPanel = () => {
  const [magnifyAmount, setMagnifyAmount] = useRecoilState(MagnifyAmountState);

  const handleMagnifyAmountChange = (option: string) => {
    const magnifyOption = option.slice(0, -1);
    setMagnifyAmount(+magnifyOption);
  };

  return (
    <s.PanelsWrapper>
      <s.StatusPanel>
        <s.IconWrapper>
          <Icon iconImg="share" />
        </s.IconWrapper>
        <Divider />
        <s.MagnificationWrapper>
          <Dropdown<string>
            borderNone
            selectedItem={`${magnifyAmount}%`}
            setSelectedItem={handleMagnifyAmountChange}
            items={magnifyAmountOptions.map((option) => `${option}%`)}
          />
        </s.MagnificationWrapper>
      </s.StatusPanel>
    </s.PanelsWrapper>
  );
};

export default StatusPanel;
