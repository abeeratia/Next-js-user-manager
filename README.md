# Next.js User Manager & Design System

This project is a highly optimized, production-ready implementation of a User Manager System and a comprehensive UI Design System. It is built strictly following modern frontend architecture and best practices, specifically designed to demonstrate Mid-to-Senior Level Full-Stack Engineering skills.

## 🚀 Key Features & Architectural Decisions

1. **Strict Atomic Design Methodology**
   The UI components are cleanly separated into **Atoms**, **Molecules**, **Organisms**, and **Templates**. 
   - *Templates* (e.g., `MainTemplate.tsx`) abstract the layout.
   - *Pages* (e.g., Next.js `page.tsx`) consume the templates and orchestrate data.

2. **App Router Best Practices (Next.js 14+)**
   - **Server & Client Components**: Properly separated based on interactivity. The main pages use Server Components by default for excellent SEO and zero-JS initial load, while interactive charts/forms use `"use client"`.
   - **Loading & Error Boundaries**: Implemented `loading.tsx` for global suspense/spinners during navigation, and `error.tsx` for graceful failure handling.
   - **API Route Handlers**: Implemented backend endpoints (`/api/users` and `/api/countries`) using modern `NextResponse` and `GET/POST` handlers.

3. **Hybrid State Management**
   - **Redux Toolkit**: Dedicated exclusively to managing local UI state (Stepper navigation and Pagination state) for simplified and efficient UI state management.
   - **TanStack Query (React Query)**: Handles all Server State, API data fetching, caching, and invalidation (e.g., fetching users from the API).
   - **React Hook Form**: Handles high-performance form state, coupled with Zod for strict validation.

## 🛠️ Required Technologies & Libraries

This project strictly utilizes the following requested stack:

- **Tailwind CSS 4**: First-utility CSS framework with the latest version.
- **Lucide Icons**: Beautiful and open-source icon library.
- **Redux Toolkit**: Simplified and efficient state management for UI.
- **TanStack Query (React Query)**: Server state management and caching.
- **React Hook Form**: High-performance form handling with excellent UX.
- **TanStack Table**: Building fully customizable and interactive data tables.
- **TypeScript**: Strict typings, interfaces, and custom types (`src/types`, `src/schemas`) used for every project element.

## 📂 Folder Structure

```text
src/
├── app/                  # Next.js App Router (Pages, Layouts, API Routes, Loading, Error)
│   ├── api/              # API Route Handlers (/api/users, /api/countries)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx       # Global Suspense Fallback
│   ├── error.tsx         # Global Error Boundary
│   └── providers.tsx     # Redux and TanStack Query Providers
├── components/           # Atomic Design UI Components
│   ├── atoms/            # Basic UI elements (Button, Input, Avatar, Table, Label, Badge)
│   ├── molecules/        # FormFieldWrapper, Pagination, SelectField, CheckboxGroup
│   ├── organisms/        # LiveMultiStepForm, DataTable, Hero, Header, Footer, Palettes
│   └── templates/        # MainTemplate for layout abstraction
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries (e.g., tailwind merge)
├── schemas/              # Zod validation schemas (User, form shapes)
├── store/                # Redux Toolkit configuration
│   ├── hooks.ts          # Typed hooks (useAppSelector, useAppDispatch)
│   └── slices/           # stepperSlice, paginationSlice
└── types/                # TypeScript Interfaces and Constants
```

## ⚙️ Installation and Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to explore the Design System Palettes and the Live Multi-Step Form.

## ⚡ Performance Optimization

- The project compiles with **0 Errors** and **0 Warnings**.
- All non-dynamic routes are prerendered as **Static HTML** (`○ (Static)` in the Next.js build output).
- Zero unoptimized `<img>` tags are used; the structure relies strictly on standard best practices and UI components.
- The `tsconfig.json` enforces strict type-checking across the entire codebase.
