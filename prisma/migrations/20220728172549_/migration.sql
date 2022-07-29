-- CreateTable
CREATE TABLE "Court" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "rating" INTEGER,
    "Latitude" DECIMAL(65,30) NOT NULL,
    "Longitide" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Court_pkey" PRIMARY KEY ("id")
);
