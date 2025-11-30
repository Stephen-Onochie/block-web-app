-- CreateTable
CREATE TABLE "TestPing" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TestPing_pkey" PRIMARY KEY ("id")
);
