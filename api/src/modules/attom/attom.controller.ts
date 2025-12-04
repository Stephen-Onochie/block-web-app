//controller module to use ATTOM API Service
import 'dotenv/config';
import axios from 'axios';

//base URL for ATTOM API
const baseURL = process.env.ATTOM_API_BASE_URL;

//ATTOM API key
const apiKey = process.env.ATTOM_API_KEY;

//property detail - function to get full details on any property by address
export async function getPropertyData(address1: any, address2: any) {
    try {
        const res = await axios.get(
            `${baseURL}/propertyapi/v1.0.0/property/detail`,
            {
                params: {address1, address2 },
                headers: {
                    accept: 'application/json',
                    apikey: apiKey,
                },
            }
        );

        console.log(JSON.stringify(res.data, null, 2));
    } catch (err) {
        if (axios.isAxiosError(err)) {
            console.error('ATTOM error:', err.response?.status, err.response?.data || err.message);
        } else {
            console.error('ATTOM error:', (err as Error).message ?? String(err));
        }
    }
}

export type SnapshotParams = {
  // Location options (choose ONE style in usage)
  latitude?: number;
  longitude?: number;
  radius?: number;
  postalcode?: string;
  geoIdV4?: string; // from /location/lookup if you ever use it

  // Filters ATTOM actually supports on property/snapshot
  minUniversalSize?: number;
  maxUniversalSize?: number;
  minYearBuilt?: number;
  maxYearBuilt?: number;
  minLotSize1?: number; // acres
  maxLotSize1?: number; // acres

  // Sorting / pagination
  orderBy?: string; // e.g. "lotSize1 desc" or "universalSize asc"
  page?: number;
  pagesize?: number;
};

 export async function propertySearch(params: SnapshotParams) {
  try {
    // Strip undefined / null / empty
    const cleanParams: Record<string, any> = {};
    for (const key in params) {
      const value = (params as any)[key];
      if (value !== undefined && value !== null && value !== "") {
        cleanParams[key] = value;
      }
    }

    const response = await axios.get(
      `${baseURL}/propertyapi/v1.0.0/property/snapshot`,
      {
        headers: {
          accept: "application/json",
          apikey: apiKey,
        },
        params: cleanParams,
      }
    );

  console.log(JSON.stringify(response.data, null, 2));
  } catch (err: any) {
    console.error("ATTOM Snapshot Error:", err.response?.data || err.message);
    throw new Error("Failed to fetch snapshot from ATTOM");
  }
}

