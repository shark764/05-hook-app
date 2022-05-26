export const heavyProcess = (iterations: number) => {
  for (let i = 0; i < iterations; i += 1) {
    console.log('Here we go', iterations);
  }
  return `${iterations} iterations completed`;
};
