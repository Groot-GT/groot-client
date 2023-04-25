import Divider from 'src/components/atoms/Divider';
import Icon from 'src/components/atoms/Icon';
import { useTheme } from 'styled-components';
import * as s from './style';

const ProjectPanel = ({ projectName }: { projectName: string }) => {
  const theme = useTheme();
  return (
    <s.ProjectPanel theme={theme}>
      <Icon iconImg='share'/>
      <Divider />
      <s.ProjectName>{projectName}</s.ProjectName>
    </s.ProjectPanel>
  );
};

export default ProjectPanel;
