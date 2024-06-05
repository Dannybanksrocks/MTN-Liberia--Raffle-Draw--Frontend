export function countUp(
  start: number,
  end: number,
  duration: number,
  element: HTMLElement
): void {
  let current = start;
  const increment = Math.ceil((end - start) / (duration / 60));

  const step = () => {
    current += increment;
    if (current >= end) {
      current = end;
    }
    element.innerText = current.toString();

    if (current < end) {
      window.requestAnimationFrame(step);
    }
  };

  step();
}
