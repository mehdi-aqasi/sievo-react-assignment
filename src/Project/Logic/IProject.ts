export interface IProject {
  project: number;
  description: string;
  "start date": Date | string;
  category: string;
  responsible: string;
  "savings amount": number;
  currency: string | null;
  complexity: IComplexity | string;
}

export interface IProjects {
  projects: Array<IProject>;
}

export enum IComplexity {
  "Simple",
  "Moderate",
  "Hazardous",
}

export enum ESortType {
  newestToOldest,
  oldestToNewest,
}

export interface IProjectLogic {
  getAllProject(): Promise<Array<IProject> | null>;
  sortProject(
    projects: Array<IProject>,
    sortType: ESortType
  ): Array<IProject> | [];
  getProjectSearch(description?: string): Array<IProject> | [];
}
