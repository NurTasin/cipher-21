/*
  Warnings:

  - Added the required column `icon` to the `Notice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Notice` ADD COLUMN `icon` VARCHAR(191) NOT NULL;
