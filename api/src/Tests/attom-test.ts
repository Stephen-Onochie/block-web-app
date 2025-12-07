//simple test program to call ATTOM API and get various data

import 'dotenv/config';
import axios from 'axios';


//base URL for ATTOM API
const baseURL = "https://api.gateway.attomdata.com";

//ATTOM API key
const apiKey = "a22ba0e42d765077dc9e5593f8861bee";

//property detail - function to get full details on any property by address
async function getPropertyByAddress(address1: any, address2: any) {
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


type SnapshotParams = {
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

 async function getPropertySnapshot(params: SnapshotParams) {
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



//test functions
getPropertyByAddress("10634 Cyrus Drive", "Indianapolis, IN, 46231");

/**
 * ATTOM Property Snapshot Function
 * --------------------------------
 * This function calls the ATTOM `/property/snapshot` endpoint using axios.
 * Snapshot is the best ATTOM endpoint for Block because it lets you pull
 * multiple properties at once—based on radius, zip code, bounding box, or
 * specific property filters.
 *
 * HOW TO USE:
 * -----------
 * Call this function with one or more valid Snapshot parameters:
 *
 *   - Geographic searches:
 *       latitude, longitude, radius (in MILES)
 *       OR postalcode
 *       OR min/max latitude + min/max longitude (bounding box)
 *       OR geoIdV4 (from /location/lookup)
 *
 *   - Property filters ATTOM allows:
 *       minUniversalSize / maxUniversalSize   → property sq ft
 *       minYearBuilt / maxYearBuilt           → construction year range
 *       minLotSize1 / maxLotSize1             → lot size in ACRES
 *
 *   - Sorting and pagination:
 *       orderBy: "universalSize desc"
 *       page: 1
 *       pagesize: 50   (maximum recommended)
 *
 * IMPORTANT NOTES:
 * ----------------
 * 1) ATTOM does NOT allow parameters like `minbedrooms`, `maxbedrooms`,
 *    `sort`, or `order` in the Snapshot endpoint.
 *    If sent, they will trigger: 
 *        "Invalid Parameter(s) - MINBEDROOMS,MAXBEDROOMS"
 *
 * 2) Only include parameters that have actual values. 
 *    The function below strips out any undefined/null/empty parameters
 *    because ATTOM rejects them if they appear in the query string.
 *
 * 3) `radius` is measured in MILES.
 *
 * 4) `pagesize` controls the maximum # of properties returned.
 *    Typical max is 50 per page. Use `page` to paginate further.
 *
 * EXAMPLES:
 * ---------
 * // Fetch properties in a 1-mile radius
 * const results = await getPropertySnapshot({
 *   latitude: 39.7392,
 *   longitude: -104.9903,
 *   radius: 1,
 *   pagesize: 50
 * });
 *
 * // Fetch newer single-family homes in a ZIP code
 * const results = await getPropertySnapshot({
 *   postalcode: "78704",
 *   minYearBuilt: 2000,
 *   maxYearBuilt: 2022,
 *   orderBy: "universalSize desc",
 *   pagesize: 50
 * });
 *
 * // Fetch properties in a bounding box
 * const results = await getPropertySnapshot({
 *   minlatitude: 39.75,
 *   maxlatitude: 39.79,
 *   minlongitude: -105.00,
 *   maxlongitude: -104.95,
 *   pagesize: 50
 * });
 *
 * BACKEND-USAGE BEST PRACTICES:
 * ------------------------------
 * - Do NOT call ATTOM from the frontend. Always call through your backend
 *   using this function to keep the API key private and secure.
 *
 * - Cache results where possible. ATTOM API calls can be expensive.
 *
 * - Use Snapshot to fetch large property sets for your clustering engine.
 *
 * - Use `/property/detail` or `/property/detailwithschools` to enrich
 *   individual properties after you create a House record.
 * 
 *   To use this function, type the following your the terminal (/tests):
 *  node attom-test.js
 *
 */
