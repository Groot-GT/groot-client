import * as s from './style';

type ListProps = {
  children: JSX.Element[];
}

const List = ({ children }: ListProps) => (
  <s.List>
    {children.map((child) => (
      <s.ListItem>
        {child}
      </s.ListItem>
    ))}
  </s.List>
);


export default List;
