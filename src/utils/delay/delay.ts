const delay = (millis: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(null), millis);
  });

export { delay };
