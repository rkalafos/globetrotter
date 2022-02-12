// ES6+ example
import { DynamoDB } from 'aws-sdk'
import { Race } from "./types";

enum TABLES {
    RACE = "Race",
    TASK = "Task"
}

class GlobetrotDynamoClient {
    private client : AWS.DynamoDB.DocumentClient

    constructor (region : string) {
        // a client can be shared by different items.
        this.client =  new DynamoDB.DocumentClient()
    }

    setItemGetTasks(taskIds : string[]) {

    }

    setItemSaveRace(race : Race) {
    }

    setItemAddPlayer(raceId : string, playerName : string) : string {
        return "created playerId"
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

