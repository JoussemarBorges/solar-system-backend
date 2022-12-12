const express = require('express');
const { readMissionsData,
        writeNewMissionData,
        updateMissionData,
        deleteMissionData,
      } = require('./utils/fsUtils');

const app = express();

app.use(express.json());

const OK = 200;
const CREATED = 201;
const DELETED = 204;

app.get('/missions/', async (req, res) => {
  try {
    const missions = await readMissionsData();
    return res.status(OK).json({ missions });
  } catch (error) {
    console.log(error);
  }
});

app.post('/missions', async (req, res) => {
  try {
    const newMission = req.body;
    const newMissionWhitId = await writeNewMissionData(newMission);
    
    return res.status(CREATED).json({ mission: newMissionWhitId });
  } catch (error) {
    console.log({ message: 'deu ruim' });
  }
});

app.put('/missions/:id', async (req, res) => {
  const { id } = req.params;
  const updatedMissionData = req.body;

  const updatedMission = await updateMissionData(Number(id), updatedMissionData);

  return res.status(CREATED).json({ mission: updatedMission });
});

app.delete('/missions/:id', async (req, res) => {
  const { id } = req.params;

  await deleteMissionData(id);

  return res.status(DELETED).end();
});

module.exports = app;