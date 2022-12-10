const { expect } = require('chai');

const { readMissionsData } = require('../../src/utils/fsUtils');

describe('A função readMissionData', function () {
  it('retornar um array', async function () {
    const missions = await readMissionsData();
    expect(missions).to.be.instanceOf(Array);
  });
});