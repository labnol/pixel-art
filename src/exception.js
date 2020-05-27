import getUserEmail from './user';

const exception = (e = {}) => {
  try {
    const { stack, message = '' } = e;
    console.error(getUserEmail(), stack, message);
    return `Error: ${message}`;
  } catch (ferr) {
    return 'Something went wrong. Sorry!';
  }
};

export default exception;
