import { factories } from "@strapi/strapi";

function populateAttribute({ components }) {
  if (components) {
    const populate = components.reduce((currentValue, current) => {
      return { ...currentValue, [current.split(".").pop()]: { populate: "*" } };
    }, {});
    return { populate };
  }
  return { populate: "*" };
}

const getPopulateFromSchema = function (schema) {
  return Object.keys(schema.attributes).reduce((currentValue, current) => {
    const attribute = schema.attributes[current];
    if (!["dynamiczone", "component"].includes(attribute.type)) {
      return currentValue;
    }

    return {
      ...currentValue,
      [current]: populateAttribute(attribute),
    };
  }, {});
};

function populatePage(uid, schema) {
  return factories.createCoreController(uid, () => {
    return {
      async find(ctx) {
        ctx.query = {
          ...ctx.query,
          populate: getPopulateFromSchema(schema),
        };
        return await super.find(ctx);
      },
      async findOne(ctx) {
        ctx.query = {
          ...ctx.query,
          populate: getPopulateFromSchema(schema),
        };
        return await super.findOne(ctx);
      },
    };
  });
}

export { populatePage };
