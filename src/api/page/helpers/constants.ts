const pageCollectionType = "page";
const pageCollectionTypeApi = `api::${pageCollectionType}.${pageCollectionType}`;
const pageSchema = require(`../content-types/${pageCollectionType}/schema.json`);

export { pageCollectionType, pageSchema, pageCollectionTypeApi };
