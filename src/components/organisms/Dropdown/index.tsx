import React, { useState, useRef, useEffect, Fragment } from 'react';
import { useTheme } from 'styled-components';
import * as s from './style';
import DropdownOption from '../../atoms/DropdownOption';
import ToggleButton from '../../atoms/ToggleButton';
import Divider from '../../atoms/Divider';

type ToggleSelectorProps = {
  items: string[];
  icons: string[] | undefined;
}


const Dropdown = ({ items, icons }: ToggleSelectorProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [dropdownWidth, setDropdownWidth] = useState<number | undefined>(0);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();


  useEffect(() => {
    setDropdownWidth(dropdownRef.current?.getBoundingClientRect().width);
  }, []);

  useEffect(() => {
    const handleClickOutside = (ev: globalThis.MouseEvent): void => {
      const target = ev.target as HTMLElement;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', ev => handleClickOutside(ev));
    return () => document.removeEventListener('mousedown', ev => handleClickOutside(ev));

  }, [dropdownRef, setOpen]);

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
            <Fragment key={item}>
              <DropdownOption value={item} icon={icons ? icons[idx] : null}
                              onClick={() => handleOptionClick(idx)} />
              <Divider vertical={false} length={100} />
            </Fragment>
          ))}
        </s.DropdownListWrapper>
        : null}
    </s.DropdownWrapper>
  );
};

export default Dropdown;
