import { useRecoilState, useRecoilValue } from 'recoil';
import {
  projectsOwnerSortOptionState,
  projectOwnersSelector,
  ProjectsDateSortOptionState,
} from 'src/recoil/projectsState';
import {
  projectsDateSortOptions,
  projectsOwnerSortOptions,
} from 'src/constants/project';
import Dropdown from 'src/components/organisms/Dropdown';
import IconButton from 'src/components/molecules/IconButton';
import { UserId } from 'src/types/user';
import {
  ProjectsDateSortOption,
  ProjectsOwnerSortOption,
} from 'src/types/project';
import * as s from './style';

const DATE_SORT_OPTIONS = Object.values(projectsDateSortOptions);
const PROJECT_OWNERS_DEFAULT_OPTION = Object.values(projectsOwnerSortOptions);

const ProjectSortOptionPanel = () => {
  const [projectOwnerFilterOption, setProjectOwnerFilterOption] =
    useRecoilState<ProjectsOwnerSortOption>(projectsOwnerSortOptionState);
  const [projectsDateSortOption, setProjectsDateSortOption] =
    useRecoilState<ProjectsDateSortOption>(ProjectsDateSortOptionState);
  const projectOwnersId = useRecoilValue<UserId[]>(projectOwnersSelector);

  const projectOwnerFilterOptions = [
    ...PROJECT_OWNERS_DEFAULT_OPTION,
    ...projectOwnersId,
  ];
  
  return (
    <s.ProjectSortOptionPanelWrapper>
      <s.TitleWrapper>Project Boards</s.TitleWrapper>
      <s.OptionsWrapper>
        <s.DropdownWrapper>
          <Dropdown<ProjectsOwnerSortOption>
            items={projectOwnerFilterOptions}
            selectedItem={projectOwnerFilterOption}
            setSelectedItem={setProjectOwnerFilterOption}
          />
        </s.DropdownWrapper>
        <s.DropdownWrapper>
          <Dropdown
            items={DATE_SORT_OPTIONS}
            selectedItem={projectsDateSortOption}
            setSelectedItem={setProjectsDateSortOption}
          />
        </s.DropdownWrapper>
        <IconButton icon="menu" onClick={() => {}} />
        <IconButton icon="viewBoxes" onClick={() => {}} />
      </s.OptionsWrapper>
    </s.ProjectSortOptionPanelWrapper>
  );
};

export default ProjectSortOptionPanel;
