import Divider from 'src/components/atoms/Divider';
import { useTheme } from 'styled-components';
import LogoButton from 'src/components/atoms/LogoButton';
import * as s from './style';

const ProjectDrawPanel = ({ projectName }: { projectName: string }) => {
  const theme = useTheme();
  return (
    <s.ProjectPanel theme={theme}>
      <LogoButton />
      <Divider />
      <s.ProjectName>{projectName}</s.ProjectName>
    </s.ProjectPanel>
  );
};

export default ProjectDrawPanel;
