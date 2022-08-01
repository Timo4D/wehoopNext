/*
  Warnings:

  - You are about to drop the column `Latitude` on the `Court` table. All the data in the column will be lost.
  - You are about to drop the column `Longitide` on the `Court` table. All the data in the column will be lost.
  - Added the required column `latitude` to the `Court` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitide` to the `Court` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Court" DROP COLUMN "Latitude",
DROP COLUMN "Longitide",
ADD COLUMN     "latitude" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "longitide" DECIMAL(65,30) NOT NULL;
