import { input } from './input';
import { createTree } from './index';

test('createTree', () => {
  const mockedOutput = {
    Siroun: [
      {
        Mohammad: [
          { Aysar: [] },
          { Nagham: [] },
        ],
      },
      {
        Rana: [
          { Samar: [] },
          { Sara: [] },
        ],
      },
    ],
  };

  const testedValue = createTree(JSON.parse(input));

  expect(testedValue).toEqual(mockedOutput);
});
