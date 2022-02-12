import {AddressType, Client, GeocodeResult, LatLngLiteral} from "@googlemaps/google-maps-services-js";
import {Task} from "./types";

const api_key = "AIzaSyBTKrskTOBf57xrGzHFc8uXAQEA_7q5U3w";

const client = new Client({});

interface poi {
    // price_level: number;
    user_rating?: number;
    name?: string;
    coords?: coords;
    user_ratings_total?: number;
    types?: AddressType[];
    url?: string;
    vicinity?: string;
    price_point?: number;
    formatted_address?: string;
}

interface coords {
    lat?: number;
    lng?: number;
}


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


export async function getLocation(keyword: string, price_level: number, address: string) :Promise<poi|undefined>{
    const myGeocode = await getGeocode(address)
    try {
        const myPlaces = await client.textSearch({
            params:{
                location: {latitude: myGeocode['lat'], longitude:myGeocode['lng']},
                query: keyword,
                maxprice: price_level,
                minprice: 0,
                radius: 20000,
                key: api_key
            }
        })
        let tasks: Task[] = myPlaces.data.results.filter(r=>(!!r.vicinity && !!r.name && !!r.rating && !!r.vicinity && !!r.formatted_address)).map(r=> {
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
        let pois :poi[] = myPlaces.data.results.map(r => {
            return {
                name: r.name,
                types: r.types,
                rating: r.rating,
                price_point: r.price_level,
                vicinity: r.vicinity,
                user_rating_total: r.user_ratings_total,
                coords: {'lat':r.geometry?.location.lat, 'lng': r.geometry?.location.lng},
                url: r.url,
                formatted_address: r.formatted_address
            }
        }).filter(r=>(!!r.coords && !!r.name && !!r.rating && !!r.vicinity && !!r.formatted_address));

        if (pois.length) {
            return pois[0];
        } else {
            return undefined;
        }
    } catch (e) {
        throw e;
    }
}
