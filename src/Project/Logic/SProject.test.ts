import { IProject } from "./IProject";
import { getProject } from "./SProject";

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


test("Test getAllProject", async () => {
  let _data: Array<IProject> | null = await getProject();
  expect(_data).toStrictEqual(sample_data);
});