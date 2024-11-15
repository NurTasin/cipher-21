-- AlterTable
ALTER TABLE `Notice` MODIFY `title` VARCHAR(500) NOT NULL,
    MODIFY `description` VARCHAR(5000) NOT NULL;

-- AlterTable
ALTER TABLE `Notification` MODIFY `title` VARCHAR(500) NOT NULL,
    MODIFY `description` VARCHAR(5000) NOT NULL;
