import { Redis } from "@upstash/redis";

export const db = new Redis({
  url: 'https://us1-notable-bream-38691.upstash.io',
  token: 'AZcjASQgODE2ZDQ3NmQtZWNmNi00YTYyLTk3MDgtMWJhMGExNTZmNTUwZTUxOTE5Njc1MWFkNDY4N2I1NjgwODgxNDRmMDBhMTM=',
});

