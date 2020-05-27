import expBackoff from './backoff';

const clean = (email = '') => email.toLowerCase().trim();

export const getEffectiveUser = () => {
  return expBackoff(() => clean(Session.getEffectiveUser().getEmail()));
};

export const getActiveUser = () => {
  return expBackoff(() => clean(Session.getActiveUser().getEmail()));
};

export const isMultipleAccountIssue = (initiator = '') => {
  try {
    const currentUser = getEffectiveUser();
    if (initiator && currentUser) {
      if (initiator !== currentUser) {
        return (
          `Please <a target="_blank" href="https://accounts.google.com/logout">log out</a> ` +
          `of your Google Account ${currentUser} to use Mail Merge with ${initiator}`
        );
      }
    }
  } catch (f) {
    // do nothing
  }
  return '';
};
