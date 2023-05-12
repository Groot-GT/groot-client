import * as s from './style';

type SideBarItemProps = {
  title: string | undefined;
  element?: JSX.Element;
  noPadding?: boolean;
};

const defaultProps = {
  element: null,
  noPadding: false,
};
const SideBarItem = ({ title, element, noPadding }: SideBarItemProps) => (
  <s.SideBarItemWrapper noPadding={noPadding}>
    {title?.length ?
      <s.SideBarItemTitle noPadding={noPadding}>
        {title}
      </s.SideBarItemTitle>
      : null}
    {element}
  </s.SideBarItemWrapper>
);

SideBarItem.defaultProps = defaultProps;

export default SideBarItem;
