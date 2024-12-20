import { createTRPCRouter, protectedProcedure, publicProcedure } from '..'
import { adminRoutes } from './admins'
import { articlesRouter } from './articles'
import { creditBalanceRoutes } from './creditBalance'
import { editorRoutes } from './editors'
import { feedbackRoutes } from './feedbacks'
import { reporterRoutes } from './reporters'
import { stripeRoutes } from './stripe'
import { userRoutes } from './users'

export const appRouter = createTRPCRouter({
  admins: adminRoutes,
  reporters: reporterRoutes,
  articles: articlesRouter,
  feedbacks: feedbackRoutes,
  creditBalance: creditBalanceRoutes,
  stripe: stripeRoutes,
  editors: editorRoutes,
  users: userRoutes,
})

export type AppRouter = typeof appRouter
