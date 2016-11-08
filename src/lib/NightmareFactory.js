'use strict';

import {default as config} from 'config/config';
import {default as nightmare} from 'nightmare';

export default function getNightmare (path='') {
  return nightmare(config.nightmareSettings)
    .goto(`${config.siteUrl}${path}`);
}

