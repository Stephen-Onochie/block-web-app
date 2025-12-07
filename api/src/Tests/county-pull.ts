import 'dotenv/config';
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.mockHouse.create({
      data: {
        address: "123 Main St, Los Angeles, CA 90012",
        latitude: 34.0522,
        longitude: -118.2437,
        neighborhood: "Downtown",
        priorityScore: 1.0,
        visitDurationMinutes: 30,
        status: "ACTIVE",   // or just "ACTIVE" if you mapped it as string
        isCornerHouse: false,
        streetName: "Main St",
        houseNumber: 123,
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

main()
  .then(() => {
    console.log('Data Push complete!');
  })
  .catch((error) => {
    console.error('Error in main execution:', error);
    process.exit(1);
  });
