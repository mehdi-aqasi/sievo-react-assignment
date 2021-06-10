import { ESortType, IProject } from "./IProject";
import { ProjectLogic } from "./LProject";

let sample_data: Array<IProject> = [
  {
    project: 2,
    description:
      "Substitute Crème fraîche with evaporated milk in ice-cream products",
    "start date": "2013-12-28T00:00:00+00:00",
    category: "Office supplies",
    responsible: "Clark Kent",
    "savings amount": 3722.41684,
    currency: "NULL",
    complexity: "Moderate",
  },
  {
    project: 1,
    description: "Decrease production related non-categorized side costs",
    "start date": "2013-06-14T00:00:00+00:00",
    category: "Dairy",
    responsible: "Daisy Milks",
    "savings amount": 5583.62526,
    currency: "USD",
    complexity: "Hazardous",
  },
  {
    project: 2,
    description: "Stop using Kryptonite in production",
    "start date": "2014-04-09T00:00:00+00:00",
    category: "Office supplies",
    responsible: "Clark Kent",
    "savings amount": 7444.83368,
    currency: "EUR",
    complexity: "Simple",
  },
  {
    project: 1,
    description: "Black and white logo paper",
    "start date": "2014-03-07T00:00:00+00:00",
    category: "Dairy",
    responsible: "Daisy Milks",
    "savings amount": 9306.0420999999988,
    currency: "NULL",
    complexity: "Moderate",
  },
  {
    project: 2,
    description: "Harmonize Lactobacillus acidophilus sourcing",
    "start date": "2014-02-05T00:00:00+00:00",
    category: "Office supplies",
    responsible: "Clark Kent",
    "savings amount": 1861.20842,
    currency: "USD",
    complexity: "Hazardous",
  },
  {
    project: 1,
    description:
      "Substitute Crème fraîche with evaporated milk in ice-cream products",
    "start date": "2015-02-04T00:00:00+00:00",
    category: "Dairy",
    responsible: "Daisy Milks",
    "savings amount": 3722.41684,
    currency: "EUR",
    complexity: "Simple",
  },
  {
    project: 2,
    description: "Decrease production related non-categorized side costs",
    "start date": "2015-01-04T00:00:00+00:00",
    category: "Office supplies",
    responsible: "Clark Kent",
    "savings amount": 5583.62526,
    currency: "NULL",
    complexity: "Moderate",
  },
  {
    project: 1,
    description: "Stop using Kryptonite in production",
    "start date": "2015-01-03T00:00:00+00:00",
    category: "Dairy",
    responsible: "Daisy Milks",
    "savings amount": 7444.83368,
    currency: "USD",
    complexity: "Hazardous",
  },
  {
    project: 2,
    description: "Black and white logo paper",
    "start date": "2016-01-03T00:00:00+00:00",
    category: "Office supplies",
    responsible: "Clark Kent",
    "savings amount": 9306.0420999999988,
    currency: "EUR",
    complexity: "Simple",
  },
  {
    project: 1,
    description: "Harmonize Lactobacillus acidophilus sourcing",
    "start date": "2016-01-02T00:00:00+00:00",
    category: "Dairy",
    responsible: "Daisy Milks",
    "savings amount": 1861.20842,
    currency: "NULL",
    complexity: "Moderate",
  },
  {
    project: 2,
    description:
      "Substitute Crème fraîche with evaporated milk in ice-cream products",
    "start date": "2016-01-02T00:00:00+00:00",
    category: "Office supplies",
    responsible: "Clark Kent",
    "savings amount": 3722.41684,
    currency: "USD",
    complexity: "Hazardous",
  },
];

jest.setTimeout(10000)

test("Test getAllProject", async () => {

  let _project = await ProjectLogic().getAllProject();
  expect(_project).toStrictEqual(sample_data);
});

test("Test recieve data has the properties", () => {
  let _data = [...sample_data][0];
  expect(_data).toHaveProperty(["project"]);
  expect(_data).toHaveProperty(["description"]);
  expect(_data).toHaveProperty(["start date"]);
  expect(_data).toHaveProperty(["category"]);
  expect(_data).toHaveProperty(["responsible"]);
  expect(_data).toHaveProperty(["savings amount"]);
  expect(_data).toHaveProperty(["currency"]);
  expect(_data).toHaveProperty(["complexity"]);
});

test("Test sort ascending ", () => {
  let _data = ProjectLogic().sortProject(sample_data, ESortType.newestToOldest);
  const firstRow = _data[0];
  const lastRow = _data[_data.length - 1];

  expect(firstRow["start date"] >= lastRow["start date"]).toBeTruthy();
});

test("Test sort descending ", () => {
  let _data = ProjectLogic().sortProject(sample_data, ESortType.oldestToNewest);
  const firstRow = _data[0];
  const lastRow = _data[_data.length - 1];

  expect(firstRow["start date"] <= lastRow["start date"]).toBeTruthy();
});

test("Test sort searching description null ",async () => {
  let _project = await ProjectLogic().getAllProject();
  let _project_null_description = await ProjectLogic().getProjectSearch();

  expect(_project?.length===sample_data.length).toBeTruthy();
  expect(_project_null_description?.length===sample_data.length).toBeTruthy();
});

test("Test sort searching with milk description ",async () => {
  await ProjectLogic().getAllProject();
  let _project_with_milk_description = await ProjectLogic().getProjectSearch('milk');

  expect(_project_with_milk_description?.length===3).toBeTruthy();
  expect(_project_with_milk_description.every(project=>project.description.includes('milk')) ).toBeTruthy();
});

