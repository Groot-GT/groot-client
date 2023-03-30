import { useState, useRef } from 'react';
import { useTheme } from 'styled-components';
import List from 'src/components/molecules/List';
import ToggleButton from 'src/components/atoms/ToggleButton';
import * as s from './style';

type ToggleSelectorProps = {
  title?: string | null;
  items: string[];
  itemIcons?: JSX.Element[]
}

const defaultProps = {
  title: null,
  itemIcons: [],
};

const Dropdown = ({ title, items, itemIcons }: ToggleSelectorProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownSize = dropdownRef.current?.getBoundingClientRect().width;
  console.log(dropdownSize);

  return (
    <s.DropdownWrapper ref={dropdownRef}>
      <s.DropdownTitleWrapper>
        {title ?? title}
        <ToggleButton clicked={open} onClick={() => setOpen(!open)} />
      </s.DropdownTitleWrapper>
      {open ?
        <s.DropdownListWrapper width={dropdownSize} theme={theme}>
          <List itemTitles={items} itemIcons={itemIcons} />
        </s.DropdownListWrapper> :
        null}

    </s.DropdownWrapper>
  );
};

Dropdown.defaultProps = defaultProps;

export default Dropdown;
