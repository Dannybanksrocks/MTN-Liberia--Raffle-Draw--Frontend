export function countUp(
  start: number,
  end: number,
  duration: number,
  element: HTMLElement
): void {
  let current = start;
  const increment = Math.ceil((end - start) / (duration / 60)); // Adjust the speed by changing the divisor

  const interval = setInterval(() => {
    current += increment;
    if (current > end) {
      current = start; // Reset to start value if current exceeds end value
    }
    element.textContent = current.toString();
  }, 1000 / 60); // 60 frames per second
}
