/**
 * event controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::event.event",
  ({ strapi }) => ({
    async slugExists(ctx) {
      const slug = ctx.params.slug;
      const query = { filters: { slug: slug } };

      const entities = await strapi.entityService.findMany(
        "api::event.event",
        query
      );
      
      const exists = (entities as any[]).length > 0;  
      return { slugAlreadyExists: exists }
    },
  })
);
