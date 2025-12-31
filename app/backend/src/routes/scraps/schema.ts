import z from 'zod'

const scrapSchema = z.object({
  id: z.string(),
  userId: z.string(),
  parentId: z.string().nullable(),
  title: z.string().min(1),
  body: z.string(),
  createdAt: z.coerce.string(),
  updatedAt: z.coerce.string(),
})

const registerScrapSchema = z.object({
  parentId: z.string().nullable().optional(),
  title: z.string().min(1),
  body: z.string(),
  tagIds: z.array(z.string()).optional(),
})

const updateScrapSchema = z.object({
  title: z.string().min(1).optional(),
  body: z.string().optional(),
  tagIds: z.array(z.string()).optional(),
})

const getScrapsQuerySchema = z
  .object({
    isFollowing: z.boolean().default(false),
    limit: z.number().min(1).optional(),
    page: z.number().min(1).optional(),
  })
  .optional()

export {
  scrapSchema,
  getScrapsQuerySchema,
  registerScrapSchema,
  updateScrapSchema,
}
