import { useRecoilState, useRecoilValue } from 'recoil';
import {
  projectsOwnerSortOptionState,
  projectOwnersSelector,
  projectsAttributeSortOptionState,
  projectGridViewState,
} from 'src/recoil/projectsState';
import {
  projectAttributeSortOptions,
  projectsOwnerSortOptions,
} from 'src/constants/project';
import Dropdown from 'src/components/organisms/Dropdown';
import IconButton from 'src/components/molecules/IconButton';
import { UserId } from 'src/types/user';
import {
  ProjectsAttributeSortOption,
  ProjectsOwnerSortOption,
} from 'src/types/project';
import * as s from './style';

const DATE_SORT_OPTIONS = Object.values(projectAttributeSortOptions);
const PROJECT_OWNERS_DEFAULT_OPTION = Object.values(projectsOwnerSortOptions);

const ProjectSortOptionPanel = () => {
  const [projectOwnerFilterOption, setProjectOwnerFilterOption] =
    useRecoilState<ProjectsOwnerSortOption>(projectsOwnerSortOptionState);
  const [projectsDateSortOption, setProjectsDateSortOption] =
    useRecoilState<ProjectsAttributeSortOption>(
      projectsAttributeSortOptionState,
    );
  const projectOwnersId = useRecoilValue<UserId[]>(projectOwnersSelector);
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
          <Dropdown<ProjectsOwnerSortOption>
            dropdownIcon="user"
            items={projectOwnerFilterOptions}
            selectedItem={projectOwnerFilterOption}
            setSelectedItem={setProjectOwnerFilterOption}
            borderNone
          />
        </s.DropdownWrapper>
        <s.DropdownWrapper>
          <Dropdown
            items={DATE_SORT_OPTIONS}
            selectedItem={projectsDateSortOption}
            setSelectedItem={setProjectsDateSortOption}
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
