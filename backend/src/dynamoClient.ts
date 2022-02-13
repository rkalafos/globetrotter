// ES6+ example
import { DynamoDB } from 'aws-sdk'
import { Race } from "./types";

const tableName = process.env.TABLE_NAME || 'Race';

enum TABLES {
    RACE = "Race",
    TASK = "Task"
}

export class GlobetrotDynamoClient {
    private client : AWS.DynamoDB.DocumentClient

    constructor () {
        // a client can be shared by different items.
        this.client =  new DynamoDB.DocumentClient()
    }

    async getRace(raceId : string) {
        console.log(raceId);
        const getRaceResult = await this.get({'RaceID': raceId});
        return getRaceResult;
    }

    async saveRace(race : Race) {
        const saveResult = await this.put({
            RaceID: race.id,
            ...race

        })
        return saveResult
    }

    async addPlayer(raceId : string, playerName : string) : Promise<boolean> {
        console.log(raceId, playerName);
        const key = {"id": raceId};
        const updateExpression = "set players = list_append(players, :new_player";
        const expressionAttributeValues = {":new_player": [playerName]}
        const addPlayerResult = await this.update(key, updateExpression, expressionAttributeValues);
        return true;
    }

    async put(item: DynamoDB.DocumentClient.ItemCollectionKeyAttributeMap) : Promise<boolean> {
        if (item && tableName) {
            try {
                await this.client.put({
                    TableName : tableName,
                    Item: item,
                }).promise()
                return true;
            } catch (e) {
                console.log(e);
                return false;
            }
        }
        return false;
    }

    async update(key: DynamoDB.DocumentClient.Key, updateExpression : string, expressionAttributeValues : DynamoDB.DocumentClient.ExpressionAttributeValueMap) {
        console.log(`${tableName} ${key} ${updateExpression} ${expressionAttributeValues}`)

        const params = {TableName: tableName, 
            Key: key, 
            UpdateExpression: updateExpression, 
            ExpressionAttributeValues: expressionAttributeValues, 
            ReturnValues:"UPDATED_NEW"};

        // this.client.update(params, function(err, data){
        //     if (err) {
        //         console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
        //     } else {
        //         console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
        //     }
        // })
        return true;
    }

    async get(key: DynamoDB.DocumentClient.Key) {
        if (key && tableName) {
            const data = await this.client.get({
                TableName : tableName,
                Key: key
            }).promise()

            return {id: data.Item?.id,
                location: data.Item?.location,
                price_point: data.Item?.price_point,
                tasks: data.Item?.tasks,
                players: data.Item?.players
            }
        } else {
            return undefined;
        }
    }
}

