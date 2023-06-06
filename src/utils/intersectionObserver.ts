function onEntry(
  entries: IntersectionObserverEntry[],
  _: IntersectionObserver,
  maxLength: number,
  addAction:
    | ((element: any, changes: IntersectionObserverEntry, elementIndex: number) => void)
    | string
) {
  entries.forEach((changes, index) => {
    if (index >= maxLength) {
      return;
    }

    if (typeof addAction === "string") {
      changes.isIntersecting && changes.target.classList.add(addAction);
      return;
    }

    addAction(changes.target, changes, index);
  });
}

export const intersectionObserver = (
  queryClass: string,
  addAction:
    | ((element: any, changes: IntersectionObserverEntry, elementIndex: number) => void)
    | string
) => {
  const elements = document.getElementsByClassName(queryClass);
  const maxLength = elements.length;
  const observer = new IntersectionObserver(
    (entries, observer) => onEntry(entries, observer, maxLength, addAction),
    { threshold: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1.0] }
  );
  for (let elem of elements) {
    observer.observe(elem);
  }
};

// { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] }
