export const to = promise => {
  return promise
    .then(r => {
      if (r.status === 500) {
        return [null, new Error('500 Internal Server Error')];
      }
      return [r, null];
    })
    .catch(error => [null, error]);
};
