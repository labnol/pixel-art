const MAX_RETRIES = 4;
const ONE_SECOND = 1000;

const expBackoff = func => {
  for (let n = 0; n < MAX_RETRIES; n += 1) {
    try {
      return func();
    } catch (e) {
      if (n === MAX_RETRIES - 1) {
        throw e;
      }
      Utilities.sleep(2 ** n * ONE_SECOND + Math.round(Math.random() * ONE_SECOND));
    }
  }
  return null;
};

export default expBackoff;
