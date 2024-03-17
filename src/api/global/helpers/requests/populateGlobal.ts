import { factories } from "@strapi/strapi";

const getPopulateFromGlobalSchema = function () {
  return {
    Navigation: {
      populate: {
        LogoImageWithLink: {
          populate: {
            image: true,
          },
        },
        MenuLinks: {
          populate: {
            SubMenuLinks: {
              populate: "*",
            },
          },
        },
        FeaturedMenuLinks: {
          populate: {
            buttonLink: true,
          },
        },
      },
    },
    Footer: {
      populate: {
        FooterColumns: {
          populate: {
            links: true,
          },
        },
        FooterDescription: true,
        SocialMediaImageWithLinks: {
          populate: {
            image: true,
          },
        },
      },
    },
  };
};

function populateGlobal(uid, schema) {
  return factories.createCoreController(uid, () => {
    return {
      async find(ctx) {
        ctx.query = {
          ...ctx.query,
          populate: getPopulateFromGlobalSchema(),
        };
        return await super.find(ctx);
      },
      async findOne(ctx) {
        ctx.query = {
          ...ctx.query,
          // populate: getPopulateFromSchema(schema),
        };
        return await super.findOne(ctx);
      },
    };
  });
}

export { populateGlobal };
