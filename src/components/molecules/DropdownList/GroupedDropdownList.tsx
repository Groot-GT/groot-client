import React, { Fragment } from 'react';
import DropdownOption from 'src/components/atoms/DropdownOption';
import * as s from './style';

interface DropdownListProps<T> {
  items: T[];
  groupName: string;
  selectedItem: T;
  handleOptionClick: (value: T) => void;
}

const GroupedDropdownList = <T extends string>({
  items,
  groupName,
  selectedItem,
  handleOptionClick,
}: DropdownListProps<T>) => (
  <>
    <s.GroupName>{groupName}</s.GroupName>
    {items.map((item) => (
      <Fragment key={item}>
        {selectedItem === item ? (
          <DropdownOption
            value={item}
            icon="check_small"
            onClick={() => handleOptionClick(item)}
          />
        ) : (
          <DropdownOption
            value={item}
            onClick={() => handleOptionClick(item)}
          />
        )}
      </Fragment>
    ))}
  </>
);

export default GroupedDropdownList;
