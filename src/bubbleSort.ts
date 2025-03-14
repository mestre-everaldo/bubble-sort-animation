type StepType = 'compare' | 'swap' | 'done';

interface Step {
  type: StepType;
  indices: number[];
  array: number[];
}

// Shared constants
export const INITIAL_ARRAY = [5, 3, 8, 4, 2];
export const ANIMATION_STEPS = bubbleSortSteps(INITIAL_ARRAY);

export function bubbleSortSteps(arr: number[]): Step[] {
  const steps: Step[] = [];
  const array = [...arr]; // Create a copy of the original array
  let n = array.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Record the comparison
      steps.push({ type: 'compare', indices: [j, j + 1], array: [...array] });
      if (array[j] > array[j + 1]) {
        // Record the swap
        steps.push({ type: 'swap', indices: [j, j + 1], array: [...array] });
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  // Add the final state of the array
  steps.push({ type: 'done', indices: [], array: [...array] });
  return steps;
}
