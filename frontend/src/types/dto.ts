// All the information about an individual Race
export interface Race {
	id: string;
	location: Coordinates;
	price_point: number;
	tasks: Task[];
	players: Player[];
}

export type Coordinates = {
	lat: number;
	lng: number;
} | string;

export interface CreateRacePayload {
	labels: string[];
	location: Coordinates;
	price_point: number;
}

export interface Player {
	id: string;
	name: string;
}

// Place of interest
export interface POI {
	name?: string;
	vicinity?: string;
	formatted_address?: string;
	types?: string[];
	picture?: File;
}

// A task in the Race
export type Task = {
	pointOfInterest: POI,
	description: string,
}

export interface JoinResponse {
	raceId: string
}