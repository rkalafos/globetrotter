"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPlayer = exports.createRace = exports.getRace = void 0;
var GlobetrotService_1 = require("./GlobetrotService");
var GlobetrotService_2 = require("./GlobetrotService");
var uuid_1 = require("uuid");
exports.getRace = function (raceId) {
    return GlobetrotService_1.fetchRace(raceId);
};
var generateTask = function () {
    return undefined;
};
exports.createRace = function (numTasks, initializedTasks) {
    var tasks = Array(numTasks);
    initializedTasks.forEach(function (task) {
        tasks[task.order] = task.task;
    });
    tasks.map(function (task) {
        if (!task) {
            return generateTask();
        }
        else {
            return task;
        }
    });
    var race = {
        id: uuid_1.v4(),
        tasks: tasks,
        players: []
    };
    return GlobetrotService_2.saveRace(race);
};
exports.addPlayer = function (player, raceId) {
    return GlobetrotService_1.saveAddPlayer(raceId, player);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2xvYmV0cm90Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9HbG9iZXRyb3RDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVEQUE2RDtBQUM3RCx1REFBOEM7QUFDOUMsNkJBQW9DO0FBR3ZCLFFBQUEsT0FBTyxHQUFHLFVBQUMsTUFBZTtJQUNuQyxPQUFPLDRCQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFBO0FBR0QsSUFBTSxZQUFZLEdBQUc7SUFDakIsT0FBTyxTQUFTLENBQUE7QUFDcEIsQ0FBQyxDQUFBO0FBRVksUUFBQSxVQUFVLEdBQUcsVUFBQyxRQUFpQixFQUFFLGdCQUFvRDtJQUM5RixJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUIsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtRQUN6QixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUE7SUFDRixLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSTtRQUNWLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxPQUFPLFlBQVksRUFBRSxDQUFDO1NBQ3pCO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDRixJQUFNLElBQUksR0FBVTtRQUNoQixFQUFFLEVBQUcsU0FBTSxFQUFFO1FBQ2IsS0FBSyxFQUFHLEtBQUs7UUFDYixPQUFPLEVBQUcsRUFBRTtLQUNmLENBQUE7SUFFRCxPQUFPLDJCQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDekIsQ0FBQyxDQUFBO0FBR1ksUUFBQSxTQUFTLEdBQUcsVUFBQyxNQUFlLEVBQUUsTUFBZTtJQUN0RCxPQUFPLGdDQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQSJ9