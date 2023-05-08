import styled from 'styled-components';

type NoPaddingMode = {
  noPadding: boolean | undefined;
};

export const SideBarItemWrapper = styled.div<NoPaddingMode>`
  width: 100%;
  padding: ${({ noPadding }) => (noPadding ? '6px 0' : '6px 18px')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SideBarItemTitle = styled.div<NoPaddingMode>`
  display: flex;
  padding: ${({ noPadding }) => (noPadding ? '6px 18px' : '0')};
  font-size: 12px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  height: 2rem;
`;
