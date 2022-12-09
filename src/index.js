const { readMissionsData, writeNewMissionData } = require("./utils/fsUtils");

async function main() {
 writeNewMissionData({
    "id": 100,
    "name": "Tryber 1",
    "year": "2004",
    "country": "USA",
    "destination": "Mercúrio"
 })
}

main();