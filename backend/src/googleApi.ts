import {
    Client,
    LatLngLiteral,
    TextSearchResponse
} from "@googlemaps/google-maps-services-js";
import {Task} from "./types";

const api_key:string = process.env.GOOGLE_MAPS_API_KEY as string;

const client = new Client({});

export async function getGeocode(address: string) : Promise<LatLngLiteral>{
    try{
        const response= await client.geocode({
            params: {
                address: address,
                key: api_key
            }
        })
        console.info("Got Geocode")
        return response.data.results[0].geometry.location;
    }
    catch (e) {
        console.log(e);
        throw e;
    }
}

async function getPlaces(keyword: string, price_level: number, address:string) :Promise<TextSearchResponse>{
    const myGeocode = await getGeocode(address)
    return client.textSearch({
        params:{
            location: {latitude: myGeocode['lat'], longitude:myGeocode['lng']},
            query: keyword,
            maxprice: price_level,
            minprice: 0,
            radius: 40000,
            key: api_key
        }
})}

export async function generateTask(keyword: string, price_level: number, address: string) :Promise<Task|undefined>{
    let myPlaces;
    if (keyword.toLowerCase()=="random" ||keyword.toLowerCase() == ""){
        const defaultPlaces = ['art_gallery', 'aquarium', 'mosque', 'bowling alley', 'casino', 'gym', 'zoo', 'university', 'store','clothing store', 'restaurant', 'park', 'museum', 'movie_theatre','night_club', 'bar', 'ice skating'];
        const randomElement:string = defaultPlaces[Math.floor(Math.random() * defaultPlaces.length)];
        console.log("Generating random element", randomElement);
        myPlaces = await getPlaces(randomElement, price_level, address);
        console.log(myPlaces.data.results)

    } else {
        myPlaces = await getPlaces(keyword, price_level, address);
    }
    let tasks: Task[] = myPlaces.data.results.filter(r=>(!!r.name && !!r.rating)).map(r=> {
        return {            
            description: "",
            pointOfInterest: {
                name: r.name,
                vicinity: r.vicinity,
                formatted_address: r.formatted_address,
                types: r.types,
            }
        }

    })

    if (tasks.length) {
        return tasks[Math.floor(Math.random() * tasks.length)];
    } else {
        console.log("No tasks trying with price point")
        myPlaces = await getPlaces(keyword, 4, address);
        let tasks: Task[] = myPlaces.data.results.filter(r=>(!!r.name && !!r.rating)).map(r=> {
            return {
                description: "",
                pointOfInterest: {
                    name: r.name,
                    vicinity: r.vicinity,
                    formatted_address: r.formatted_address,
                    types: r.types,
                }
            }
        })
        if (tasks.length) {
            return tasks[Math.floor(Math.random() * tasks.length)];
        } else {
            console.log('No GOOGLE API Values')
            throw "No GoogleAPI values for current keyword";
        }
    }
}
