import { input } from './input';

const JSONInput = JSON.parse(input);

export function createTree(json: object) {
  let output: object = {};

  Object.keys(json).forEach((key: string) => {
    let value: string = json[key];
  
    if(!output[value]) {
      output[value] = { [key]: [] };
    } else {
      output[value] = [
        output[value],
        { [key]: [] },
      ]
    }
  });
  
  Object.keys(output).forEach((key: string) => {
    output[key].forEach((object: object, index: number) => {
      const firstKey: string = Object.keys(object)[0];
  
      if (output.hasOwnProperty(firstKey)) {
        output[key][index] = {
          [firstKey]: output[firstKey],
        };
  
        delete output[firstKey];
      }
    });
  });

  return output
}

function visualizeData() {
  const output = createTree(JSONInput);
  const dataElement = document.getElementById('data');

  if (dataElement) {
    dataElement.innerHTML = JSON.stringify(output, undefined, 2);
  }

}

visualizeData();
