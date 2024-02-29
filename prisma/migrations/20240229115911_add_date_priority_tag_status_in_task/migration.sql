/*
  Warnings:

  - Added the required column `eventDate` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('TODO', 'IN_PROGRESS', 'DONE');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "Tag" AS ENUM ('PERSONAL', 'WORK', 'STUDY');

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "eventDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "priority" "Priority" NOT NULL DEFAULT 'LOW',
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'TODO',
ADD COLUMN     "tag" "Tag" NOT NULL DEFAULT 'PERSONAL';
