"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var GlobetrotController_1 = require("./GlobetrotController");
var StatusCode_1 = require("./StatusCode");
var app = express_1.default();
var port = 8081;
app.use(express_1.default.json);
app.get("/", function (req, res) {
    console.log(req);
    res.status(StatusCode_1.OK).json({ 'message': 'hello globetrotter!' });
});
app.get("/race/:raceId", function (req, res) {
    var raceId = req.params.raceId;
    var race = GlobetrotController_1.getRace(raceId);
    if (race) {
        res.status(StatusCode_1.OK).json(race);
    }
    else {
        res.status(StatusCode_1.BAD_REQUEST).json({ 'message': "unable to find race with id " + raceId });
    }
    res.send("Hello world!");
});
app.post("/race", function (req, res) {
    var body = req.body;
    var validBody = req.body && req.body.numberOfTasks && req.body.filledTasks;
    if (validBody) {
        var _a = body, numberOfTasks = _a.numberOfTasks, filledTasks = _a.filledTasks;
        var result = GlobetrotController_1.createRace(numberOfTasks, filledTasks);
    }
    else {
        res.status(StatusCode_1.BAD_REQUEST).json({ 'message': 'invalid request body' });
    }
});
app.put("/race/:raceId", function (req, res) {
    var body = req.body;
    var validBody = body && body.player;
    var raceId = req.params.raceId;
    if (validBody && raceId) {
        var player = body.player;
        var result = GlobetrotController_1.addPlayer(player, raceId);
        if (result) {
            res.status(StatusCode_1.OK).json(result);
        }
        else {
            res.status(StatusCode_1.BAD_REQUEST).json({
                'message': "unable to add player to race with id " + raceId
            });
        }
    }
});
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE4QjtBQUU5Qiw2REFBdUU7QUFDdkUsMkNBQStDO0FBRS9DLElBQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUN0QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBR3RCLEdBQUcsQ0FBQyxHQUFHLENBQUUsR0FBRyxFQUFFLFVBQUUsR0FBRyxFQUFFLEdBQUc7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNoQixHQUFHLENBQUMsTUFBTSxDQUFDLGVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLFNBQVMsRUFBRSxxQkFBcUIsRUFBQyxDQUFDLENBQUE7QUFDM0QsQ0FBQyxDQUFDLENBQUM7QUFHSCxHQUFHLENBQUMsR0FBRyxDQUFFLGVBQWUsRUFBRSxVQUFFLEdBQUcsRUFBRSxHQUFHO0lBQ2hDLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2pDLElBQU0sSUFBSSxHQUFHLDZCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsSUFBSSxJQUFJLEVBQUU7UUFDTixHQUFHLENBQUMsTUFBTSxDQUFDLGVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUM1QjtTQUFNO1FBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyx3QkFBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsU0FBUyxFQUFFLGlDQUErQixNQUFRLEVBQUMsQ0FBQyxDQUFBO0tBQ3JGO0lBRUQsR0FBRyxDQUFDLElBQUksQ0FBRSxjQUFjLENBQUUsQ0FBQztBQUMvQixDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxJQUFJLENBQUUsT0FBTyxFQUFFLFVBQUUsR0FBRyxFQUFFLEdBQUc7SUFDekIsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztJQUN0QixJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBRTdFLElBQUksU0FBUyxFQUFFO1FBQ0wsSUFBQSxLQUFpQyxJQUF5QixFQUF4RCxhQUFhLG1CQUFBLEVBQUUsV0FBVyxpQkFBOEIsQ0FBQTtRQUNoRSxJQUFNLE1BQU0sR0FBRyxnQ0FBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQTtLQUN4RDtTQUFNO1FBQ0osR0FBRyxDQUFDLE1BQU0sQ0FBQyx3QkFBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsU0FBUyxFQUFFLHNCQUFzQixFQUFDLENBQUMsQ0FBQTtLQUNuRTtBQUNMLENBQUMsQ0FBQyxDQUFBO0FBRUYsR0FBRyxDQUFDLEdBQUcsQ0FBRSxlQUFlLEVBQUUsVUFBRSxHQUFHLEVBQUUsR0FBRztJQUNoQyxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ3RCLElBQU0sU0FBUyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3JDLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFBO0lBRWhDLElBQUksU0FBUyxJQUFJLE1BQU0sRUFBRTtRQUNiLElBQUEsTUFBTSxHQUFLLElBQXVCLE9BQTVCLENBQTRCO1FBQzFDLElBQU0sTUFBTSxHQUFHLCtCQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLElBQUksTUFBTSxFQUFFO1lBQ1IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0I7YUFBTTtZQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsd0JBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDekIsU0FBUyxFQUFHLDBDQUF3QyxNQUFRO2FBQy9ELENBQUMsQ0FBQTtTQUNMO0tBQ0o7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUdDLEdBQUcsQ0FBQyxNQUFNLENBQUUsSUFBSSxFQUFFO0lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBRSx3Q0FBdUMsSUFBTyxDQUFFLENBQUM7QUFDbEUsQ0FBQyxDQUFFLENBQUMifQ==