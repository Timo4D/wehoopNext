/*
  Warnings:

  - You are about to drop the column `latitude` on the `Court` table. All the data in the column will be lost.
  - Added the required column `longitude` to the `Court` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Court" DROP COLUMN "latitude",
ADD COLUMN     "longitude" DECIMAL(65,30) NOT NULL;
