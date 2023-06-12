import React, { Fragment } from 'react';
import DropdownOption from 'src/components/atoms/DropdownOption';
import * as s from './style';

interface DropdownListProps<T> {
  items: T[];
  groupName: string;
  handleOptionClick: (value: T) => void;
}

const GroupedDropdownList = <T extends string>({
  items,
  groupName,
  handleOptionClick,
}: DropdownListProps<T>) => (
  <>
    <s.GroupName>{groupName}</s.GroupName>
    {items.map((item) => (
      <Fragment key={item}>
        <DropdownOption value={item} onClick={() => handleOptionClick(item)} />
      </Fragment>
    ))}
  </>
);

export default GroupedDropdownList;
