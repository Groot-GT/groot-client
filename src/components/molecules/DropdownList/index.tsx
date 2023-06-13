import React, { Fragment } from 'react';
import DropdownOption from 'src/components/atoms/DropdownOption';
import Divider from 'src/components/atoms/Divider';
import { IconType } from 'src/types/icon';

interface DropdownListProps<T> {
  items: T[];
  handleOptionClick: (value: T) => void;
  selectedItem?: T | undefined;
  icons?: IconType[] | undefined;
}

const defaultProps = {
  icons: undefined,
};

const DropdownList = <T extends string | number>({
  items,
  icons,
  selectedItem = undefined,
  handleOptionClick,
}: DropdownListProps<T>) => (
  <>
    {items.map((item, idx) => (
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
            icon={icons ? icons[idx] : null}
            onClick={() => handleOptionClick(item)}
          />
        )}
        <Divider vertical={false} length={100} />
      </Fragment>
    ))}
  </>
);

DropdownList.defaultProps = defaultProps;

export default DropdownList;
