# Plannet Hopper

## Info about the web app

### Tech stack!

- React v.19.0.0
- Typescript
- TailwindCss v.10.9.2
- Tanstack/react-query v.5.74.4
- Vite v.6.3.1
- Shadcn/ui
- React-testing-library, Jest, Vitest
- ChatGPT (only for JS Docs and documentation... not a vibe coder :D)

### How to run it!

Easy just do this in a terminal inside the project's root folder:

```bash
npm install
npm run dev
```

## Task breakdown

Developers: Panos (Me), Bob, Alice

### Task 1: Create boilerplate project

- Scope:
  - Create a GitHub repository and give access to Alice & Bob.
  - Create a project using this tech stack: React, Typescript, Tailwind, Shadcn/ui, Vite.
- Notes:
  - Useful links:
    - https://vite.dev/guide/
    - https://ui.shadcn.com/docs/installation/vite
- Owner: Panos

### Task 2: Add testing suite

- Scope:
  - Add unit testing using Vitest and React Testing Library.
  - Check Vitest UI if we want to provide coverage reports later.
- Dependency:
  - Task 1 should be completed first.
- Notes:
  - Useful links:
    - https://medium.com/@kafkahw/adding-vitest-react-testing-library-to-an-existing-react-project-w-o-vite-97e4aeb2ae2d
- Owner: Alice

### Task 3: Add typography, fonts, and theme

- Scope:
  - Add project typography.
  - Add fonts.
  - Add and extend Tailwind color palette.
- Notes:
  - Before implementation, create a small documentation to be shared with the team.
- Owner: Bob

### Task 4: Create Planet Context

- Scope:
  - Load data from the base URL.
  - Expose an array of planets, the current API page, a setter for the page, loading/error states, and a reset function to return to page 1.
  - New page data should be added, not replaced.
- Notes:
  - The API returns a total count; maybe create a flag when reaching the last page.
  - Use as type `Planet` the content of the API `results` array.
- Owner: Alice

### Task 5: Create Route Context

- Scope:
  - Expose an array with the names of selected planets, a function to add names, and a function to clear the list.
  - Do not add a name if it already exists or if there are more than 5 planets.
- Notes:
  - Optionally create a function to remove a planet by name.
- Owner: Bob

### Task 6: Create all design templates

- Scope:
  - Based on the provided design, create the structure/layout of the web app.
- Notes:
  - Pay attention to mobile behavior: Planet List position and height differ.
- Owner: Panos

### Task 7: Create Planet Item Component

- Scope:
  - Create a card/button that displays a planet's image, name, climate, terrain, and population.
  - Use one of the 4 stock images.
- Notes:
  - Use `planet.name.length % 4` to pick an image consistently.
  - Show a placeholder SVG while the image loads or on error.
- Dependency:
  - Use the `Planet` type from Task 4.
- Owner: Alice

### Task 8: Create Header Component

- Scope:
  - Create a header with a title and a reset button to return to the initial state.
- Dependency:
  - Use reset (Task 4) and clear (Task 5) functions.
- Owner: Bob

### Task 9: Create Planet List Component

- Scope:
  - Create a Planet List that displays all planets and has a button to load the next page.
- Dependency:
  - Use Planet Item (Task 7) and Planet Context (Task 4).
- Owner: Panos

### Task 10: Create Route Component

- Scope:
  - Create a Route component that displays selected planets and a button to clear them.
- Notes:
  - Show info about the max number of planets allowed (5).
- Dependency:
  - Use the routed planet names and clear function from Task 5.
- Owner: Alice
