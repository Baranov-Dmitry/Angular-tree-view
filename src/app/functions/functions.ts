import {NodeTree} from '../interfase';

export function randomInRange(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function storageGetItem(key): NodeTree[] {
  return JSON.parse(localStorage.getItem(key));
}

export function storageSetItem(key, data): void {
  localStorage.setItem(key, JSON.stringify(data));
}
