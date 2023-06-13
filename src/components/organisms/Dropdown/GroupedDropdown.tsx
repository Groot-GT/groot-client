import React, { useState, useRef, useEffect } from 'react';
import { IconType } from 'src/types/icon';
import ToggleButton from 'src/components/atoms/ToggleButton';
import Icon from 'src/components/atoms/Icon';
import GroupedDropdownList from 'src/components/molecules/DropdownList/GroupedDropdownList';
import * as s from './style';
import useDetectClickOutside from '../../../hooks/useDetectClickOutside';

interface GroupedDropdownProps<T extends string, R extends string> {
  groups: { [key in T]: { [key2 in R]: string } };
  selectedGroup: T;
  setSelectedGroup: (group: T) => void;
  selectedItem: R;
  setSelectedItem: (item: R) => void;
  dropdownIcon?: IconType | null;
  borderNone?: boolean;
}

const GroupedDropdown = <T extends string, R extends string>({
  groups,
  selectedGroup,
  setSelectedGroup,
  selectedItem,
  setSelectedItem,
  borderNone = false,
  dropdownIcon = null,
}: GroupedDropdownProps<T, R>) => {
  const [open, setOpen] = useState<boolean>(false);
  const [dropdownWidth, setDropdownWidth] = useState<number | undefined>(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDropdownWidth(dropdownRef.current?.getBoundingClientRect().width);
  }, []);

  useDetectClickOutside({
    ref: dropdownRef,
    callback: () => setOpen(false),
  });

  const groupKeys = Object.keys(groups) as T[];
  const itemValues = Object.values(groups[selectedGroup]) as R[];

  const handleGroupClick = (group: T) => {
    setSelectedGroup(group);
    setSelectedItem(itemValues[0]);
    setOpen(false);
  };

  const handleItemClick = (item: R) => {
    setSelectedItem(item);
    setOpen(false);
  };

  return (
    <s.DropdownWrapper ref={dropdownRef}>
      <s.SelectedItemPlaceHolder
        borderNone={borderNone}
        onClick={() => setOpen(!open)}
      >
        {dropdownIcon ? (
          <s.DropdownIconWrapper>
            <Icon iconImg={dropdownIcon} />
          </s.DropdownIconWrapper>
        ) : null}
        <s.SelectedItemWrapper>{selectedGroup}</s.SelectedItemWrapper>
        <ToggleButton clicked={open} onClick={() => setOpen(!open)} />
      </s.SelectedItemPlaceHolder>
      <s.DropdownListWrapper width={dropdownWidth}>
        {open ? (
          <>
            <GroupedDropdownList<T>
              groupName="Sort by"
              items={groupKeys}
              selectedItem={selectedGroup}
              handleOptionClick={handleGroupClick}
            />
            <GroupedDropdownList<R>
              groupName="Order"
              items={itemValues}
              selectedItem={selectedItem}
              handleOptionClick={handleItemClick}
            />
          </>
        ) : null}
      </s.DropdownListWrapper>
    </s.DropdownWrapper>
  );
};

export default GroupedDropdown;
