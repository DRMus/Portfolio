import { TObserverAction } from "../interfaces";

function onEntry(
  entries: IntersectionObserverEntry[],
  dataSelector: string,
  addAction: TObserverAction | string
) {
  entries.forEach((changes) => {
    if (typeof addAction === "string") {
      changes.isIntersecting && changes.target.classList.add(addAction);
      return;
    }

    let convertedElement = changes.target as HTMLElement; // because Element interface doesn`t have the dataset value
    let elementIndex = convertedElement.dataset[dataSelector];

    if (!elementIndex || Number.isNaN(+elementIndex)) {
      throw new Error("element dataset is NaN or undefined");
    }

    addAction(changes.target, changes, +elementIndex);
  });
}

export function intersectionObserver(queryData: string, addAction: TObserverAction | string) {
  const elements = document.querySelectorAll(`[data-${queryData}]`);
  const observer = new IntersectionObserver((entries) => onEntry(entries, queryData, addAction), {
    threshold: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 0.95, 1.0],
  });
  for (let elem of elements) {
    observer.observe(elem);
  }
}

// { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] }
