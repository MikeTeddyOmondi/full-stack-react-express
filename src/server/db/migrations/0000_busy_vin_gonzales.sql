CREATE TABLE `cities` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	`country_id` int,
	`popularity` enum('unknown','known','popular'),
	CONSTRAINT `cities_id` PRIMARY KEY(`id`),
	CONSTRAINT `cities_id_unique` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE `countries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	CONSTRAINT `countries_id` PRIMARY KEY(`id`),
	CONSTRAINT `countries_id_unique` UNIQUE(`id`),
	CONSTRAINT `name_idx` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `tasks` (
	`id` int AUTO_INCREMENT NOT NULL,
	`public_id` varchar(1024) NOT NULL,
	`title` varchar(256) NOT NULL,
	`description` varchar(512) NOT NULL,
	`completed` boolean NOT NULL DEFAULT false,
	CONSTRAINT `tasks_id` PRIMARY KEY(`id`),
	CONSTRAINT `tasks_id_unique` UNIQUE(`id`)
);
--> statement-breakpoint
ALTER TABLE `cities` ADD CONSTRAINT `cities_country_id_countries_id_fk` FOREIGN KEY (`country_id`) REFERENCES `countries`(`id`) ON DELETE no action ON UPDATE no action;