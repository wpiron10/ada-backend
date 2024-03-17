const globalCollectionType = "global";
const globalCollectionTypeApi = `api::${globalCollectionType}.${globalCollectionType}`;
const globalSchema = require(`../content-types/${globalCollectionType}/schema.json`);

export { globalCollectionType, globalSchema, globalCollectionTypeApi };
