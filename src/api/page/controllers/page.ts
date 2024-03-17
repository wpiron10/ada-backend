"use strict";

import { populatePage } from "../helpers/requests/populatePage";

/**
 *  page controller
 */

const collectionType = "page";

const schema = require(`../content-types/${collectionType}/schema.json`);

module.exports = populatePage(
  `api::${collectionType}.${collectionType}`,
  schema
);
