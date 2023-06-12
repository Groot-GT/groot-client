import { useRecoilState, useRecoilValue } from 'recoil';
import {
  projectsOwnerFilterState,
  projectOwnersSelector,
  projectsOrderingState,
  projectGridViewState,
  projectsOrderingOptionState,
} from 'src/recoil/projectsState';
import {
  projectOrderingWithOptions,
  projectsOwnerFilterOptions,
} from 'src/constants/project';
import Dropdown from 'src/components/organisms/Dropdown/DefaultDropdown';
import IconButton from 'src/components/molecules/IconButton';
import { UserId } from 'src/types/user';
import {
  ProjectsOrdering,
  ProjectsOrderingOption,
  ProjectsOwnerFilter,
} from 'src/types/project';
import * as s from './style';
import GroupedDropdown from '../Dropdown/GroupedDropdown';

const PROJECT_OWNERS_DEFAULT_OPTION = Object.values(projectsOwnerFilterOptions);

const ProjectSortOptionPanel = () => {
  const projectOwnersId = useRecoilValue<UserId[]>(projectOwnersSelector);
  const [projectOwnerFilterOption, setProjectOwnerFilterOption] =
    useRecoilState<ProjectsOwnerFilter>(projectsOwnerFilterState);
  const [projectsOrdering, setProjectsOrdering] =
    useRecoilState<ProjectsOrdering>(projectsOrderingState);
  const [projectsOrderingOption, setProjectsOrderingOption] = useRecoilState(
    projectsOrderingOptionState,
  );
  const [isProjectGridView, setIsProjectGridView] =
    useRecoilState(projectGridViewState);

  const projectOwnerFilterOptions = [
    ...PROJECT_OWNERS_DEFAULT_OPTION,
    ...projectOwnersId,
  ];

  return (
    <s.ProjectSortOptionPanelWrapper>
      <s.TitleWrapper>Project Boards</s.TitleWrapper>
      <s.OptionsWrapper>
        <s.DropdownWrapper>
          <Dropdown<ProjectsOwnerFilter>
            dropdownIcon="user"
            items={projectOwnerFilterOptions}
            selectedItem={projectOwnerFilterOption}
            setSelectedItem={setProjectOwnerFilterOption}
            borderNone
          />
        </s.DropdownWrapper>
        <s.DropdownWrapper>
          <GroupedDropdown<ProjectsOrdering, ProjectsOrderingOption>
            groups={structuredClone(projectOrderingWithOptions)}
            selectedGroup={projectsOrdering}
            setSelectedGroup={(group) => setProjectsOrdering(group)}
            selectedItem={projectsOrderingOption}
            setSelectedItem={(item) => setProjectsOrderingOption(item)}
            borderNone
          />
        </s.DropdownWrapper>
        <s.GridSelectorWrapper>
          <s.SelectedIconWrapper selected={!isProjectGridView}>
            <IconButton
              icon="menu"
              onClick={() => {
                setIsProjectGridView(false);
              }}
            />
          </s.SelectedIconWrapper>
          <s.SelectedIconWrapper selected={isProjectGridView}>
            <IconButton
              icon="viewBoxes"
              onClick={() => {
                setIsProjectGridView(true);
              }}
            />
          </s.SelectedIconWrapper>
        </s.GridSelectorWrapper>
      </s.OptionsWrapper>
    </s.ProjectSortOptionPanelWrapper>
  );
};
export default ProjectSortOptionPanel;
