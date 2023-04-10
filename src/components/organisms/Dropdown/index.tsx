import { useState, useRef, useEffect } from 'react';
import { useTheme } from 'styled-components';
import * as s from './style';
import DropdownOption from '../../atoms/DropdownOption';
import ToggleButton from '../../atoms/ToggleButton';

type ToggleSelectorProps = {
  items: string[];
}

const Dropdown = ({ items }: ToggleSelectorProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [dropdownWidth, setDropdownWidth] = useState<number | undefined>(0);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();


  useEffect(() => {
    setDropdownWidth(dropdownRef.current?.getBoundingClientRect().width);
  }, []);

  const handleOptionClick = (idx: number) => {
    setSelectedItem(idx);
    setOpen(false);
  };

  return (
    <s.DropdownWrapper ref={dropdownRef}>
      <s.SelectedItemPlaceHolder onClick={() => setOpen(!open)}>
        {items[selectedItem]}
        <ToggleButton clicked={open} onClick={() => setOpen(!open)} />
      </s.SelectedItemPlaceHolder>
      {open ?
        <s.DropdownListWrapper width={dropdownWidth} theme={theme}>
          {items.map((item, idx) => (
            <DropdownOption key={item} value={item} onClick={() => handleOptionClick(idx)} />
          ))}
        </s.DropdownListWrapper>
        : null}
    </s.DropdownWrapper>
  );
};

export default Dropdown;
