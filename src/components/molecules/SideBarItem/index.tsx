import * as s from './style';

type SideBarItemProps = {
  title: string | undefined;
  element?: JSX.Element | undefined;
  noPadding?: boolean;
};

const SideBarItem = ({
  title,
  element = undefined,
  noPadding = false,
}: SideBarItemProps) => (
  <s.SideBarItemWrapper noPadding={noPadding}>
    {title?.length ? (
      <s.SideBarItemTitle noPadding={noPadding}>{title}</s.SideBarItemTitle>
    ) : null}
    {element}
  </s.SideBarItemWrapper>
);

export default SideBarItem;
