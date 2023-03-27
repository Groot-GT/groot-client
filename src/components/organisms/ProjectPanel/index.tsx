import Divider from 'src/components/atoms/Divider';
import LogoButton from 'src/components/atoms/LogoButton';
import { useTheme } from 'styled-components';
import * as s from './style';

const ProjectPanel = ({ projectName }: { projectName: string }) => {
  const theme = useTheme();
  return (
    <s.ProjectPanel theme={theme}>
      <LogoButton />
      <Divider />
      <s.ProjectName>{projectName}</s.ProjectName>
    </s.ProjectPanel>
  );
};

export default ProjectPanel;
