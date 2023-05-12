import * as s from './style';

type ListProps = {
  children: JSX.Element[];
}

const List = ({ children }: ListProps) => (
  <s.List>
    {children.map((child) => (
      <s.ListItem key={child.key}>
        {child}
      </s.ListItem>
    ))}
  </s.List>
);


export default List;
