import { jsonResumeSchema } from "./jsonResumeSchema";

export const portfolioJSON = await fetch('https://gitconnected.com/v1/portfolio/kylejamesross').then((response) => response.json()).then((json) => jsonResumeSchema.parse(json));

type GroupByCallback<T> = (element: T, index: number) => string | symbol;

const groupBy = function<T>(items: Iterable<T>, callbackFn: GroupByCallback<T>): Record<string | symbol, T[]> {
  const result: Record<string | symbol, T[]> = Object.create(null);

  Array.from(items).forEach((item, index) => {
    const key = callbackFn(item, index);
    const groupKey = key.toString(); // Ensure key is coerced to string if necessary

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(item);
  });

  return result;
};

export const skillGroups = Object.entries(groupBy(portfolioJSON.skills, (skill) => skill.keywords.at(0)));
