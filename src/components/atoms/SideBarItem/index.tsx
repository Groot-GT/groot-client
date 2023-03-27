import * as s from './style';

type SideBarItemProps = {
  title: string;
  element: JSX.Element;
};

const SideBarItem = ({ title, element }: SideBarItemProps) => (
  <s.SideBarItemWrapper>
    <>
      {title}
      {element}
    </>
  </s.SideBarItemWrapper>
);

export default SideBarItem;
