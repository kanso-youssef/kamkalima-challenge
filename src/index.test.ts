import { createTree, visualizeData } from './index';

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

  const testedValue = createTree('Siroun');

  expect(testedValue).toEqual(mockedOutput);
});

test('visualizeData', () => {
  const preElement = document.createElement('pre');
  preElement.id = 'data';
  document.body.appendChild(preElement);
  const expectedOutput = JSON.stringify(createTree('Siroun'), undefined, 2)

  visualizeData();

  expect(preElement.innerHTML).toEqual(expectedOutput);
});
