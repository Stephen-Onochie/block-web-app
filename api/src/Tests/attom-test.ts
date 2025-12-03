//simple test program to call ATTOM API and get various data

import 'dotenv/config';
import axios from 'axios';


//base URL for ATTOM API
const baseURL = process.env.ATTOM_API_BASE_URL || "https://api.gateway.attomdata.com";

//ATTOM API key
const apiKey = process.env.ATTOM_API_KEY;

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


//snapshot - function to pull list of properties with filter capability
async function getPropertySnapshot({
  address1,
  address2,
  latitude,
  longitude,
  radius,
  postalcode,
  countyname,
  state,
  fips,
  minlatitude,
  maxlatitude,
  minlongitude,
  maxlongitude,
  minbedrooms,
  maxbedrooms,
  minbathrooms,
  maxbathrooms,
  minarea,
  maxarea,
  minlotsize,
  maxlotsize,
  minyearbuilt,
  maxyearbuilt,
  propertytype,
  ownerocc,
  foreclosure,
  minassdvalue,
  maxassdvalue,
  minmktvalue,
  maxmktvalue,
  page = 1,
  pagesize = 50,
  sort = "address",
  order = "asc"
}: any) {
  try {
    const response = await axios.get(
      `${baseURL}/propertyapi/v1.0.0/property/snapshot`,
      {
        headers: {
          accept: "application/json",
          apikey: apiKey,
        },
        params: {
          // Location options (pick any)
          address1,
          address2,
          latitude,
          longitude,
          radius,
          postalcode,
          countyname,
          state,
          fips,
          minlatitude,
          maxlatitude,
          minlongitude,
          maxlongitude,

          // Property filters
          minbedrooms,
          maxbedrooms,
          minbathrooms,
          maxbathrooms,
          minarea,
          maxarea,
          minlotsize,
          maxlotsize,
          minyearbuilt,
          maxyearbuilt,
          propertytype,
          ownerocc,
          foreclosure,
          minassdvalue,
          maxassdvalue,
          minmktvalue,
          maxmktvalue,

          // Pagination
          page,
          pagesize,
          sort,
          order,
        },
      }
    );

    return response.data;
  } catch (err: any) {
    console.error("ATTOM Snapshot Error:", err.response?.data || err.message);
    throw new Error("Failed to fetch snapshot from ATTOM");
  }
}


//test functions
//getPropertyByAddress('1934 Wayfield Dr', 'Avon, IN, 46123');
getPropertySnapshot({
    postalcode: '46123',
    minbedrooms: 3,
    maxbedrooms: 4,
});