/*
  Warnings:

  - Added the required column `type` to the `IndependentFund` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `IndependentFund` ADD COLUMN `type` ENUM('DEPOSIT', 'WITHDRAW') NOT NULL;
