# React Stepper Challenge - User Manager System

This is a production-quality implementation of a multi-step user registration form built with Next.js App Router, demonstrating strong Mid-Level Full-Stack engineering skills.

## Technologies Used

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, custom design tokens
- **Components**: Radix UI (primitives), customized shadcn/ui concepts, Lucide React
- **Form Management**: React Hook Form
- **Validation**: Zod (Shared between Client and Server)
- **Client State**: Redux Toolkit (Stepper progress, Modals)
- **Server State & Data Fetching**: TanStack Query
- **Architecture**: Atomic Design Methodology

## Folder Structure

```text
src/
├── app/                  # Next.js App Router (Pages, Layouts, API Routes)
│   ├── api/              # API Route Handlers (/api/users, /api/countries)
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx     # Redux and TanStack Query Providers
├── components/           # Atomic Design UI Components
│   ├── atoms/            # Basic UI elements (Button, Input, Label, StepCircle, Typography)
│   ├── molecules/        # FormFieldWrapper, FileUploadArea, StepItem
│   └── organisms/        # MultiStepForm, StepperProgress, CustomSelect, MultiSelect, SuccessModal
├── hooks/                # Custom React hooks (e.g., useDebounce)
├── lib/                  # Utility libraries (cn for Tailwind)
├── schemas/              # Zod validation schemas
├── services/             # API client services
└── store/                # Redux Toolkit setup (stepperSlice)
```

## Architectural Decisions

1. **Atomic Design**: The component hierarchy strictly follows Atomic Design to maximize reusability and maintainability.
2. **Server/Client Boundary**: Server components are used by default (e.g., `layout.tsx`, `page.tsx`). Client components (`"use client"`) are used strictly at the component level where interactivity, state, or hooks are required (e.g., forms, modals, searchable dropdowns).
3. **State Management**:
   - **React Hook Form**: Handles all local form state.
   - **Redux Toolkit**: Manages global UI state such as the current step of the stepper and modal visibility, proving scalability for larger applications.
   - **TanStack Query**: Manages asynchronous server state, specifically fetching and caching the list of countries for the `CustomSelect` component.
4. **Validation Strategy**: A single source of truth for validation is established using Zod. The same schema validates the form on the client (real-time feedback) and on the server (API security).
5. **Custom UI Components**: Instead of blindly installing all shadcn components, the UI elements were built incrementally using Radix UI primitives and Tailwind v4, ensuring the design system's exact requirements (colors, spacing, typography) were met without bloat.

## Installation and Running

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design System Tokens

The application utilizes CSS variables mapped to Tailwind v4 in `src/app/globals.css` to manage the primary, secondary, accent, and neutral color scales. The base typography uses the Inter font family.

## Testing Instructions

1. Fill out Step 1 (Personal Info).
2. The Country dropdown is async and searchable (debounced 300ms). Try searching for "United".
3. Move to Step 2 (Preferences).
4. Select up to 5 interests. The input prevents selecting more than 5.
5. Upload an Avatar using drag and drop (Max 5MB, PNG/JPG only).
6. Proceed to Step 3 (Review) to see the summary.
7. Click Submit. An artificial delay simulates a network request, followed by a Success Modal.
8. Clicking "Add Another User" will reset the entire form and start from Step 1.
