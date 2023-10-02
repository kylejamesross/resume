import { jsonResumeSchema } from "./jsonResumeSchema";

export const portfolioJSON = await fetch('https://gitconnected.com/v1/portfolio/kylejamesross').then((response) => response.json()).then((json) => jsonResumeSchema.parse(json));
