export interface Race {
    id: string;
	pointsOfInterest: POI[];
	players: Player[];
}

export interface Player {
    id: string;
	name: string;
}

export interface POI {
    name: string;
	location: Location;
	task?: string;
	picture?: string; // TODO change to image url
}