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

  const isProjectsDateSortOption = (x: string): x is ProjectsDateSortOption =>
    Object.values(projectsDateSortOptions).includes(
      x as ProjectsDateSortOption,
    );
  const handleProjectsDateSortOptionChange = (option: string) => {
    if (!isProjectsDateSortOption(option)) return;
    const dateSortOption = option as ProjectsDateSortOption;
    setProjectsDateSortOption(dateSortOption);
  };

  return (
    <s.OptionsWrapper>
      <s.TitleWrapper>Project Boards</s.TitleWrapper>
      <Dropdown
        items={projectOwnerFilterOptions}
        selectedItem={projectOwnerFilterOption}
        setSelectedItem={setProjectOwnerFilterOption}
      />
      <Dropdown
        items={DATE_SORT_OPTIONS}
        selectedItem={projectsDateSortOption}
        setSelectedItem={handleProjectsDateSortOptionChange}
      />
      <IconButton icon="menu" onClick={() => {}} />
      <IconButton icon="viewBoxes" onClick={() => {}} />
    </s.OptionsWrapper>
  );
};

export default ProjectSortOptionPanel;
