export interface Race {
	id: string;
	difficulty: number;
	pricePoint: number;
	theme: string;
	location: string;
	numberOfTasks: number;
	tasks: Task[];
	dateCreated: string,
}

export interface Player {
	id: string;
	name: string;
}

export interface Task {
	name: string;
	types: string[];
	vicinity: string;
	price_point: number;
	rating: number;
	numberOfRatings: number;
	image: string;
}

export interface JoinResponse {
	raceId: string
}