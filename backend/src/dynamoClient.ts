// ES6+ example
import { DynamoDB } from 'aws-sdk'
import { Race } from "./types";
import { examplePlayers, exampleTasks } from './examples';

const tableName = process.env.TABLE_NAME

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

    getRace(raceId : string) {
        console.log(raceId)
        const getRaceResult = this.get({'raceID': raceId})
        return getRaceResult;
    }

    async saveRace(race : Race) {
        console.log(race);
        const saveResult = await this.put(race)
        return saveResult
    }

    addPlayer(raceId : string, playerName : string) : boolean {
        console.log(raceId, playerName);
        const key = {"id": raceId};
        const updateExpression = "set players = list_append(players, :new_player";
        const expressionAttributeValues = {":new_player": [playerName]}
        const addPlayerResult = this.update(key, updateExpression, expressionAttributeValues);
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
            } catch {
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

    async get<T>(key: DynamoDB.DocumentClient.Key) {
        if (key && tableName) {
            const data = await this.client.get({
                TableName : tableName,
                Key: key
            }).promise()
            return !!data.Item ? DynamoDB.Converter.unmarshall(data.Item) as T : undefined;
        } else {
            return undefined;
        }
    }
}

