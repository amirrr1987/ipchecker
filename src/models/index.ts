// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);

export interface IpData {
  query?: string;
  status?: string;
  continent?: string;
  continentCode?: string;
  country?: string;
  countryCode?: string;
  region?: string;
  regionName?: string;
  city?: string;
  district?: string;
  zip?: string;
  lat?: number;
  lon?: number;
  timezone?: string;
  offset?: number;
  currency?: string;
  isp?: string;
  org?: string;
  as?: string;
  asname?: string;
  reverse?: string;
  mobile?: boolean;
  proxy?: boolean;
  hosting?: boolean;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toWelcome(json: string): Welcome {
    return JSON.parse(json);
  }

  public static welcomeToJson(value: Welcome): string {
    return JSON.stringify(value);
  }
}
