import { IProject } from "./IProject";

export const getProject = async (): Promise<Array<IProject> | null> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_URL}${process.env.REACT_APP_DATA_GET}`,
      {
        method: "GET",
      }
    );
    const result = await response.json();
    
    if (!result) {
      console.log("There is no valid result or sl_token in result");
      return null;
    } else {
      return result;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
