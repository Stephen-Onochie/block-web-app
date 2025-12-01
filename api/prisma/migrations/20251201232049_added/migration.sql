-- CreateTable
CREATE TABLE "House" (
    "id" UUID NOT NULL,
    "address" TEXT NOT NULL DEFAULT 'Unknown Address',
    "latitude" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "longitude" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "status" TEXT NOT NULL DEFAULT 'available',
    "clusterId" TEXT NOT NULL DEFAULT 'unknown',

    CONSTRAINT "House_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Route" (
    "id" UUID NOT NULL,
    "clusterId" TEXT NOT NULL DEFAULT 'unknown',
    "orderedHouseIds" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "Route_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cluster" (
    "id" UUID NOT NULL,
    "centriodLat" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "centriodLong" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "routeIds" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "Cluster_pkey" PRIMARY KEY ("id")
);
