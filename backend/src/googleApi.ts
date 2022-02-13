import {Client, LatLngLiteral} from "@googlemaps/google-maps-services-js";
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

async function getPlaces(keyword: string, price_level: number, address:string) :Promise<Task[]>{
    const myGeocode = await getGeocode(address)
    let myPlaces = await client.textSearch({
        params:{
            location: {latitude: myGeocode['lat'], longitude:myGeocode['lng']},
            query: keyword,
            maxprice: price_level,
            minprice: 0,
            radius: 40000,
            key: api_key
        }
    })
    return myPlaces.data.results.filter(r => (!!r.name && !!r.rating)).map(r => {
        return {
            description: "",
            pointOfInterest: {
                name: r.name,
                vicinity: r.vicinity,
                formatted_address: r.formatted_address,
                types: r.types,
            }
        }

    });


}

export async function generateTask(keyword: string, price_level: number, address: string) :Promise<Task|undefined>{
    let tasks:Task[];
    let tmpKeyword = keyword;

    if (tmpKeyword.toLowerCase()=="random" ||tmpKeyword.toLowerCase() == ""){
        const defaultPlaces = ['gym', 'zoo','store','clothing store', 'restaurant', 'park', 'museum', 'movie theatre', 'bar'];
        tmpKeyword = defaultPlaces[Math.floor(Math.random() * defaultPlaces.length)];
        console.log("Generating random element", tmpKeyword);
        tasks = await getPlaces(tmpKeyword, price_level, address);
    } else {
        tasks = await getPlaces(tmpKeyword, price_level, address);
    }

    if (tasks.length) {
        return tasks[Math.floor(Math.random() * tasks.length)];
    } else {
        console.log("No tasks trying with full price range")
        tasks = await getPlaces(tmpKeyword, 4, address);
        if (tasks.length) {
            return tasks[Math.floor(Math.random() * tasks.length)];
        } else {
            tasks = await getPlaces('activity', 4, address);
            if (tasks.length) {
                return tasks[Math.floor(Math.random() * tasks.length)];
            } else {
                console.log('No GOOGLE API Values')
                throw "No GoogleAPI values for current keyword";
            }
        }
    }
}
