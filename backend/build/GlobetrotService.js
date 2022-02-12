"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveRace = exports.saveAddPlayer = exports.fetchRace = void 0;
exports.fetchRace = function (raceId) {
    var dummyRace = {
        tasks: [],
        players: [],
        id: raceId
    };
    return dummyRace;
};
exports.saveAddPlayer = function (raceId, player) {
    console.log("Unimplemented! should add " + player + " to " + raceId);
    return true;
};
exports.saveRace = function (player) {
    console.log("Unimplemented! should add " + player);
    return true;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2xvYmV0cm90U2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9HbG9iZXRyb3RTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVhLFFBQUEsU0FBUyxHQUFHLFVBQUMsTUFBZTtJQUNyQyxJQUFNLFNBQVMsR0FBVTtRQUNyQixLQUFLLEVBQUcsRUFBRTtRQUNWLE9BQU8sRUFBRyxFQUFFO1FBQ1osRUFBRSxFQUFHLE1BQU07S0FDZCxDQUFBO0lBQ0QsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQyxDQUFBO0FBRVksUUFBQSxhQUFhLEdBQUcsVUFBQyxNQUFlLEVBQUUsTUFBZTtJQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUE2QixNQUFNLFlBQU8sTUFBUSxDQUFDLENBQUE7SUFDL0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFBO0FBRVksUUFBQSxRQUFRLEdBQUcsVUFBQyxNQUFhO0lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQTZCLE1BQVEsQ0FBQyxDQUFBO0lBQ2xELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FBQSJ9