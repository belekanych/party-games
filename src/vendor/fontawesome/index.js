/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUser, faGamepad, faClockRotateLeft, faTrophy, faHammer, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faUser);
library.add(faGamepad);
library.add(faClockRotateLeft);
library.add(faTrophy);
library.add(faGoogle);
library.add(faHammer);
library.add(faRightFromBracket);

export const useFontAwesome = (app) => {
  app.component('font-awesome-icon', FontAwesomeIcon);
};