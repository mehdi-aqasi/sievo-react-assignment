import { getProject } from "./SProject";
import {
  IProject,
  IProjectLogic,
  ESortType,
} from "./IProject";

let _projects: Array<IProject> = [];

export const ProjectLogic = (): IProjectLogic => {
  return {
    getAllProject,
    sortProject,
    getProjectSearch,
  };
};

const getAllProject = async (): Promise<Array<IProject> | null> => {
  let result: Array<IProject> | null = await getProject();

  if (result) {
    _projects = result;
    return _projects;
  } else {
    return null;
  }
};

const oldestToNewest = (a: IProject, b: IProject): number => {
  let date_a = new Date(a["start date"]).getTime();
  let date_b = new Date(b["start date"]).getTime();

  return date_a - date_b;
};

const newestToOldest = (a: IProject, b: IProject): number => {
  let date_a = new Date(a["start date"]).getTime();
  let date_b = new Date(b["start date"]).getTime();

  return date_b - date_a;
};

const sortProject = (
  projects: Array<IProject>,
  sortType: ESortType
): Array<IProject> | [] => {
  let result: Array<IProject> | undefined = [];
  if (sortType === ESortType.newestToOldest) {
    result = projects?.sort(newestToOldest);
  } else if (sortType === ESortType.oldestToNewest) {
    result = projects?.sort(oldestToNewest);
  }
  if (result) return result;
  return [];
};

const getProjectSearch = (description?: string): Array<IProject> | [] => {
  let result: Array<IProject> | undefined = [];
  if (description) {
    result = _projects?.filter(
      (p: IProject) =>
        p.description &&
        p.description.toLowerCase().includes(description.toLowerCase())
    );
  } else {
    result = _projects;
  }

  if (result) return result;
  return [];
};
