-- CreateTable
CREATE TABLE "MockHouse" (
    "id" UUID NOT NULL,
    "address" TEXT NOT NULL DEFAULT 'Unknown Address',
    "latitude" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "longitude" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "neighborhood" TEXT NOT NULL DEFAULT 'Unknown Neighborhood',
    "priorityScore" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "visitDurationMinutes" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "isCornerHosue" BOOLEAN NOT NULL DEFAULT false,
    "streetName" TEXT NOT NULL DEFAULT 'Unknown Street',
    "houseNumber" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MockHouse_pkey" PRIMARY KEY ("id")
);
