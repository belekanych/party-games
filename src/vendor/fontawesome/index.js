/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUser, faGamepad, faClockRotateLeft, faTrophy } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faUser);
library.add(faGamepad);
library.add(faClockRotateLeft);
library.add(faTrophy);

export const useFontAwesome = (app) => {
  app.component('font-awesome-icon', FontAwesomeIcon);
};