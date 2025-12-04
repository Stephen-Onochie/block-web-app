import 'dotenv/config';
import {propertySearch, SnapshotParams} from '../modules/attom/attom.controller';
import { PrismaClient } from '@prisma/client';


//variables
var id = 0;
var address = "";
var lat = 0.0;
var lon = 0.0;
var neighborhood = "";
var priority = 0.0;
var duration = 0;
var status = "";
var isCorner = false;
var streetName = "";
var houseNumber = 0;

var interator = 0;

const prisma = new PrismaClient();

//main function
async function main() {
//pull property data from ATTOM
const attomData = await propertySearch({
    latitude: 34.0522,
    longitude: -118.2437,
    radius: 10,
    page: 1,
    pagesize: 50,
});

//cylcle through each property in json
prisma.mockHouse.create({
    data: {
        address: "123 Main St, Los Angeles, CA 90012",
        latitude: 34.0522,
        longitude: -118.2437,
        neighborhood: "Downtown",
        priorityScore: 1.0,
        visitDurationMinutes: 30,
        status: "ACTIVE",
        isCornerHosue: false,
        streetName: "Main St",
        houseNumber: 123,
    }
});

console.log("MockHouse data created!");

//match MockHouse data with property data

//write new data to MockHouse table

//update iterator and console.log progress 
}



main();