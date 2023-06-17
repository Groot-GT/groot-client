import IconButton from 'src/components/molecules/IconButton';
import { CREATE_NEW_PROJECT } from 'src/constants/phrases';
import * as s from './style';

const ProjectControlPanel = () => {
  const handleNewProjectClick = () => {};
  const handleShareClick = () => {};

  return (
    <s.PanelWrapper>
      <s.ShareIconWrapper>
        <IconButton
          padding="11px 12px"
          icon="share_green"
          onClick={handleShareClick}
        />
      </s.ShareIconWrapper>
      <s.NewProjectIconWrapper>
        <IconButton
          padding="11px 16px 11px 12px"
          icon="add_white"
          onClick={handleNewProjectClick}
        >
          <s.NewProjectPhraseWrapper>
            {CREATE_NEW_PROJECT}
          </s.NewProjectPhraseWrapper>
        </IconButton>
      </s.NewProjectIconWrapper>
    </s.PanelWrapper>
  );
};

export default ProjectControlPanel;
