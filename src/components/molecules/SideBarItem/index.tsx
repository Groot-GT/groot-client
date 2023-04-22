import * as s from './style';

type SideBarItemProps = {
  title: string;
  element?: JSX.Element;
  noPadding?: boolean;
};

const defaultProps = {
  element: null,
  noPadding: false,
};
const SideBarItem = ({ title, element, noPadding }: SideBarItemProps) => (
  <s.SideBarItemWrapper noPadding={noPadding}>
    <s.SideBarItemTitle noPadding={noPadding}>
      {title}
    </s.SideBarItemTitle>
    {element}
  </s.SideBarItemWrapper>
);

SideBarItem.defaultProps = defaultProps;

export default SideBarItem;
