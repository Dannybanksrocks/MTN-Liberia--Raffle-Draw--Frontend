export function countUp(
  start: number,
  end: number,
  duration: number,
  element: HTMLElement
): void {
  let current = start;
  const increment = Math.ceil((end - start) / (duration / 60)); // Adjust the speed by changing the divisor
}
