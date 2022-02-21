/* eslint-disable */
import Library from "./modules/library.js";
import navigation  from "./modules/navbar.js";
/* eslint-enable */

import { DateTime } from './node_modules/luxon/src/luxon.js';

const dateEl = document.querySelector('.date');

/* eslint-disable */
const library = new Library();
/* eslint-enable */

navigation();

const now = DateTime.now().toHTTP();
dateEl.textContent = now;
