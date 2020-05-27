import { getEffectiveUser, getActiveUser } from './multiple';

let emailAddress = null;
const getUserEmail = () => {
  if (emailAddress !== null) return emailAddress;
  try {
    emailAddress = getEffectiveUser() || getActiveUser() || '';
  } catch (f) {
    emailAddress = '';
  }
  return emailAddress;
};

export default getUserEmail;
