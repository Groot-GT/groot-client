import { Fragment } from 'react';
import Divider from 'src/components/atoms/Divider';
import * as s from './style';

type ListProps = {
  items: JSX.Element[];
}


const List = ({ items }: ListProps) => (
  <s.List>
    {items.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Fragment key={index}>
        {item}
        {index !== items.length - 1 ? <Divider /> : null}
      </Fragment>
    ))}
  </s.List>
);


export default List;
