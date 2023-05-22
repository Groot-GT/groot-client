import React, { Fragment } from 'react';
import DropdownOption from 'src/components/atoms/DropdownOption';
import Divider from 'src/components/atoms/Divider';
import { IconType } from 'src/types/icon';
import * as s from './style';

type DropdownListProps = {
  items: string[];
  dropdownWidth: number | undefined;
  handleOptionClick: (idx: string) => void;
  icons?: IconType[] | undefined;
}

const defaultProps = {
  icons: undefined,
};

const DropdownList = ({ items, dropdownWidth, icons, handleOptionClick }: DropdownListProps) => (
  <s.DropdownListWrapper width={dropdownWidth}>
    {items.map((item, idx) => (
      <Fragment key={item}>
        <DropdownOption value={item} icon={icons ? icons[idx] : null}
                        onClick={() => handleOptionClick(item)} />
        <Divider vertical={false} length={100} />
      </Fragment>
    ))}
  </s.DropdownListWrapper>
);

DropdownList.defaultProps = defaultProps;

export default DropdownList;
