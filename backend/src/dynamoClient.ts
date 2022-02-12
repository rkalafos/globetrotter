// ES6+ example
import { DynamoDB } from 'aws-sdk'
import { Race } from "./types";
import { examplePlayers, exampleTasks } from './examples';

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
        const dummyRace : Race = {
            players : Object.values(examplePlayers),
            tasks : exampleTasks,
            id : raceId
        }
        return dummyRace;
    }

    saveRace(race : Race) {
        console.log(race);
        return true;
    }

    addPlayer(raceId : string, playerName : string) : boolean {
        console.log(raceId, playerName);
        return true;
    }

    async put(tableName : string, item: DynamoDB.DocumentClient.ItemCollectionKeyAttributeMap) : Promise<boolean> {
        if (item) {
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

    async update(tableName : string, key: DynamoDB.DocumentClient.Key, updateExpression : string, expressionAttributeValues : DynamoDB.ExpressionAttributeValueMap) {
        console.log(`${tableName} ${key} ${updateExpression} ${expressionAttributeValues}`)
        return true;
    }

    async get<T>(tableName : string, key: DynamoDB.DocumentClient.Key) {
        if (key) {
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

