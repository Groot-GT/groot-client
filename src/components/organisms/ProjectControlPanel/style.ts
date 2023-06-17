import styled from 'styled-components';

export const PanelWrapper = styled.div`
  width: 100%;
  gap: 8px;
  ${({ theme }) => theme.mixins.flexCenterRow}
`;

export const ShareIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  ${({ theme }) => theme.mixins.flexCenterRow}
  background-color: ${({ theme }) => theme.colors.black[0]};
  ${({ theme }) => theme.mixins.shadow}
`;

export const NewProjectIconWrapper = styled.div`
  height: 40px;
  border-radius: 4px;
  ${({ theme }) => theme.mixins.flexCenterRow}
  background-color: ${({ theme }) => theme.colors.background.green};
  ${({ theme }) => theme.mixins.shadow}
`;

export const NewProjectPhraseWrapper = styled.div`
  color: ${({ theme }) => theme.colors.white[0]};
  margin-left: 8px;
`;
