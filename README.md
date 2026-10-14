# React Todo App

A simple and functional Todo application built with React and Vite.

## Features

- **Add Tasks** — Input text and add new tasks to the list. Blank or empty submissions are prevented.
- **Automatic Sorting** — Completed items are always pushed to the top, above pending items.
- **Filter Views** — Toggle between "All", "Done", and "Todo" views to filter the visible list. The active filter button is highlighted with reduced opacity.
- **Mark as Complete (One-Way)** — Click the checkbox to mark a task as done, applying a strike-through effect and red text color. Once marked complete, the action cannot be undone.
- **Inline Editing (Pending Tasks Only)** — Click the pencil icon on an incomplete task to enter edit mode with "Confirm" (✔️) and "Cancel" (❌) buttons. Disabled for completed tasks.
- **Delete Tasks (Completed Tasks Only)** — Click the trash icon to remove a completed task. A browser confirmation prompt appears before deletion. Disabled for pending tasks.
- **Empty State** — When there are no tasks, the list and filter buttons are hidden and a "No todo is available" message is displayed.

## Tech Stack

- **React** — UI library
- **Vite** — Build tool and dev server
- **CSS** — Vanilla CSS for styling

## Project Structure

```
src/
├── App.jsx             # Main component — state management, filtering, sorting
├── App.css             # Application styles
├── TodoInput.jsx       # Task input form with validation
├── TodoItem.jsx        # Individual task row — display, edit, complete, delete
├── FilterButtons.jsx   # All / Done / Todo filter toggle buttons
├── index.css           # Global styles and CSS variables
└── main.jsx            # App entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```
