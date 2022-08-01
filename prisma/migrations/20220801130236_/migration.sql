/*
  Warnings:

  - You are about to drop the column `longitide` on the `Court` table. All the data in the column will be lost.
  - Added the required column `latitude` to the `Court` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Court" DROP COLUMN "longitide",
ADD COLUMN     "latitude" DECIMAL(65,30) NOT NULL;
