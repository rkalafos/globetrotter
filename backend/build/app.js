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
var registerRoutes = function () {
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
};
registerRoutes();
console.log('REGISTERED');
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE4QjtBQUU5Qiw2REFBdUU7QUFDdkUsMkNBQStDO0FBRS9DLElBQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUN0QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXRCLElBQU0sY0FBYyxHQUFHO0lBRW5CLEdBQUcsQ0FBQyxHQUFHLENBQUUsR0FBRyxFQUFFLFVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQixHQUFHLENBQUMsTUFBTSxDQUFDLGVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLFNBQVMsRUFBRSxxQkFBcUIsRUFBQyxDQUFDLENBQUE7SUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFHSCxHQUFHLENBQUMsR0FBRyxDQUFFLGVBQWUsRUFBRSxVQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ2hDLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2pDLElBQU0sSUFBSSxHQUFHLDZCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsSUFBSSxJQUFJLEVBQUU7WUFDTixHQUFHLENBQUMsTUFBTSxDQUFDLGVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUM1QjthQUFNO1lBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyx3QkFBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsU0FBUyxFQUFFLGlDQUErQixNQUFRLEVBQUMsQ0FBQyxDQUFBO1NBQ3JGO1FBRUQsR0FBRyxDQUFDLElBQUksQ0FBRSxjQUFjLENBQUUsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxJQUFJLENBQUUsT0FBTyxFQUFFLFVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDekIsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRTdFLElBQUksU0FBUyxFQUFFO1lBQ0wsSUFBQSxLQUFpQyxJQUF5QixFQUF4RCxhQUFhLG1CQUFBLEVBQUUsV0FBVyxpQkFBOEIsQ0FBQTtZQUNoRSxJQUFNLE1BQU0sR0FBRyxnQ0FBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQTtTQUN4RDthQUFNO1lBQ1AsR0FBRyxDQUFDLE1BQU0sQ0FBQyx3QkFBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsU0FBUyxFQUFFLHNCQUFzQixFQUFDLENBQUMsQ0FBQTtTQUNoRTtJQUNMLENBQUMsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLEdBQUcsQ0FBRSxlQUFlLEVBQUUsVUFBRSxHQUFHLEVBQUUsR0FBRztRQUNoQyxJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQU0sU0FBUyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQ3JDLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFBO1FBRWhDLElBQUksU0FBUyxJQUFJLE1BQU0sRUFBRTtZQUNiLElBQUEsTUFBTSxHQUFLLElBQXVCLE9BQTVCLENBQTRCO1lBQzFDLElBQU0sTUFBTSxHQUFHLCtCQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLElBQUksTUFBTSxFQUFFO2dCQUNSLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQy9CO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsd0JBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDekIsU0FBUyxFQUFHLDBDQUF3QyxNQUFRO2lCQUMvRCxDQUFDLENBQUE7YUFDTDtTQUNKO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUE7QUFFRCxjQUFjLEVBQUUsQ0FBQztBQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBRXpCLEdBQUcsQ0FBQyxNQUFNLENBQUUsSUFBSSxFQUFFO0lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBRSx3Q0FBdUMsSUFBTyxDQUFFLENBQUM7QUFDbEUsQ0FBQyxDQUFDLENBQUMifQ==