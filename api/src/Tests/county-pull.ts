import 'dotenv/config';
import { PrismaClient } from '@prisma/client'
import { getPropertyData } from '../modules/attom/attom.controller.ts';

const prisma = new PrismaClient();

async function main() {
  var mainAddress = "";
  var lat = 0;
  var lon = 0;
  var neighborhoodValue = "";
  var priority = 0;
  var visitDuration = 0;
  var statusCode = "";
  var isCorner = false;
  var streetNameValue = "";
  var houseNum = 0;

  //get data from AATOM
  const attomData = await getPropertyData("10634 Cyrus Drive", "Indianapolis, IN 46231");

  //assign values from attomData to variables
  mainAddress = attomData.property[0].address.line1 + ", " + attomData.property[0].address.line2;
  lat = parseFloat(attomData.property[0].location.latitude);
  lon = parseFloat(attomData.property[0].location.longitude);
  neighborhoodValue = attomData.property[0].area.subdname || "Unknown";
  priority = 1.0;
  visitDuration = 0;
  statusCode = "ACTIVE";
  isCorner = false;
  streetNameValue = attomData.property[0].address.line1 || "Unknown";
  var houseNum = 0;

  try {
    const result = await prisma.mockHouse.create({
      data: {
        address: mainAddress,
        latitude: lat,
        longitude: lon,
        neighborhood: neighborhoodValue,
        priorityScore: priority,
        visitDurationMinutes: visitDuration,
        status: statusCode,   // or just "ACTIVE" if you mapped it as string
        isCornerHouse: isCorner,
        streetName: streetNameValue.replace(/\d+/g, '').trim(),
        houseNumber: houseNum,
      },
    });

    console.log('Created MockHouse:', result);
  } catch (error) {
    console.error('Error creating MockHouse:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

async function clear() {
  try {
      await prisma.mockHouse.deleteMany({});
  } catch (error) {
    console.error('Error clearing MockHouse data:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

clear()
  .then(() => {
    console.log('Data Push complete!');
  })
  .catch((error) => {
    console.error('Error in main execution:', error);
    process.exit(1);
  });
