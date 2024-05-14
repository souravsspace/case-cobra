export function splitArray<T>(array: Array<T>, numParts: number) {
  const results: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!results[index]) {
      results[index] = [];
    }
    results[index].push(array[i]);
  }

  return results;
}
