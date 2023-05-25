import React, { Fragment } from 'react';
import DropdownOption from 'src/components/atoms/DropdownOption';
import Divider from 'src/components/atoms/Divider';
import { IconType } from 'src/types/icon';
import * as s from './style';

interface DropdownListProps<T> {
  items: T[];
  dropdownWidth: number | undefined;
  handleOptionClick: (value: T) => void;
  icons?: IconType[] | undefined;
}

const defaultProps = {
  icons: undefined,
};

const DropdownList = <T extends string | number>({
  items,
  dropdownWidth,
  icons,
  handleOptionClick,
}: DropdownListProps<T>) => (
  <s.DropdownListWrapper width={dropdownWidth}>
    {items.map((item, idx) => (
      <Fragment key={item}>
        <DropdownOption
          value={item}
          icon={icons ? icons[idx] : null}
          onClick={() => handleOptionClick(item)}
        />
        <Divider vertical={false} length={100} />
      </Fragment>
    ))}
  </s.DropdownListWrapper>
);

DropdownList.defaultProps = defaultProps;

export default DropdownList;
