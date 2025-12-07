/*
  Warnings:

  - You are about to drop the column `isCornerHosue` on the `MockHouse` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MockHouse" DROP COLUMN "isCornerHosue",
ADD COLUMN     "isCornerHouse" BOOLEAN NOT NULL DEFAULT false;
