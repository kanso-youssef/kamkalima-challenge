import { input } from './input';

const JSONInput = JSON.parse(input);

export function createTree(keyValue: string) {
  let array: object[] = [];
  let valueIndex: number = values.indexOf(keyValue);
  
  while(valueIndex !== -1) {
    array = [
      ...array,
      createTree(keys[valueIndex]),
    ];
    
    valueIndex = values.indexOf(keyValue, valueIndex + 1);
  }
  
  return { [keyValue]:  array };
}

export function visualizeData() {
  const seniorSupervisor: string = values.find((value: string) => !keys.includes(value));
  const output: object = createTree(seniorSupervisor);
  const dataElement: HTMLPreElement = <HTMLPreElement>document.getElementById('data');

  if (dataElement) {
    dataElement.innerHTML = JSON.stringify(output, undefined, 2);
  }
}

const jsonData: object = JSON.parse(input);
const keys: string[] = Object.keys(jsonData);
const values: string[] = Object.values(jsonData);

visualizeData();
