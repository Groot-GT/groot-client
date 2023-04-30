import styled from 'styled-components';

export const StatusPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  border-radius: 5px;
  margin: 0 0 16px 0;
  background-color: ${({ theme }) => theme.colors.black[0]};
`;

export const IconWrapper = styled.div`
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MagnificationWrapper = styled.div`
  width: 84px;
  margin: 0 0 0 16px;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const Magnification = styled.div`
  display: flex;
  flex-direction: row;
`;
