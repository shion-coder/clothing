import { createSelector } from 'reselect';

/* -------------------------------------------------------------------------- */

const userSelector = state => state.user;

export const selectUserCurrent = createSelector([userSelector], user => user.currentUser);
