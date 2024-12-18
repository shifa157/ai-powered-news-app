# AI News Platform

This is a Next.js-based platform for AI-generated and human-curated news articles, built with modern web technologies. The platform supports multiple user roles including administrators, reporters, editors, and regular users.

## Key Features

- **User Role Management**: Distinct roles for admins, reporters, editors and regular users
- **Article Management**: Create, edit, publish and manage AI-generated news articles
- **Credit System**: Built-in credit system for monetization
- **AI Integration**: AI-powered article generation and enhancement
- **Rich Editor Features**: Support for article editing, feedback, and reactions
- **Responsive Design**: Built with TailwindCSS for a fully responsive experience

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **API**: tRPC
- **Styling**: TailwindCSS
- **Payment Processing**: Stripe
- **AI Integration**: Custom AI service
- **Components**: Shadcn/ui

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables (refer to .env.example)

4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/app`: Main application routes and pages
- `/src/components`: Reusable UI components organized by atomic design
- `/src/trpc`: tRPC router and API configurations
- `/src/ai`: AI service integration
- `/src/db`: Database configuration and utilities
- `/src/forms`: Form definitions and validations
- `/src/util`: Utility functions and helpers

## Key Functionalities

- **Admin Dashboard**: Manage users, articles, and system settings
- **Reporter Tools**: Create and manage articles
- **Editor Interface**: Review and enhance articles
- **User Features**: Read articles, manage subscriptions, and interact with content
- **Credit System**: Purchase and manage credits for platform services
- **AI Integration**: Generate and enhance article content

## Development and Deployment

- Uses ESLint and Prettier for code formatting
- Husky for pre-commit hooks
- Docker support for development and deployment
- Built-in Vercel deployment configuration

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [tRPC Documentation](https://trpc.io)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

## Contributing

Contributions are welcome! Please read the contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
