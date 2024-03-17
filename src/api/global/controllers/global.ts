"use strict";

/**
 *  global controller
 */

import { globalCollectionTypeApi, globalSchema } from "../helpers/constants";
import { populateGlobal } from "../helpers/requests/populateGlobal";

module.exports = populateGlobal(globalCollectionTypeApi, globalSchema);
