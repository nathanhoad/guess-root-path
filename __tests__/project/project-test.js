const guessRootPath = require('../..');

test('It is this projects root rolder', () => {
  const rootPath = guessRootPath();
  expect(rootPath).toMatch(process.cwd());
});

test('It is the same folder', () => {
  const rootPath = guessRootPath(__dirname);
  expect(rootPath).toMatch(/project$/);
});

test('It can be a subdirectory', () => {
  const rootPath = guessRootPath(__dirname + '/subdirectory');
  expect(rootPath).toMatch(/project$/);
});
