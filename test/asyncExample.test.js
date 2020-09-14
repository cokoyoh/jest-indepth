// assume fetchDataOverApi returns data from an external api
const fetchDataOverApi = require('../fetchData');

// async example
test('the user data for user 1', async () => {
  const data = await fetchDataOverApi();
  expect(data).toBe('John Doe');
}) 