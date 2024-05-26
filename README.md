# Dark Mode React App

## Overview

This project is a React application that demonstrates how to implement a theme toggle functionality. The app allows users to switch between light and dark themes using a visually appealing toggle switch button that displays sun and moon icons. The project is built using TypeScript, React, and SASS for styling.

## Features

- Toggle between light and dark themes.
- Animated toggle switch button with sun and moon icons.
- Responsive and accessible design.

## Folder Structure
```
src/
├── assets/
│ ├── moon.svg
│ └── sun.svg
├── components/
│ ├── ThemeToggle.tsx
├── context/
│ ├── ThemeContext.tsx
├── styles/
│ ├── theme.scss
├── svg.d.ts
├── App.tsx
├── index.tsx
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (v6 or higher) or yarn

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/AlyssaWendt/dark_mode_app.git
cd dark_mode_app
```

2. **Install Dependencies

```bash
npm install
# or
yarn install
```

3. **Start the development server:**

```bash
npm start
# or
yarn start
```

The app will be available at `http://localhost:3000`.

## Usage

### ThemeToggle Component
The ThemeToggle component is responsible for rendering the toggle switch button and managing the theme state.

File: `src/components/ThemeToggle.tsx`

### Theme Context
The ThemeContext provides the current theme state and a function to toggle the theme.

File: `src/context/ThemeContext.tsx`

### Styles
The theme.scss file contains the styles for the light and dark themes and the toggle switch button.

File: `src/styles/theme.scss`

### SVG Type Declaration
The svg.d.ts file allows TypeScript to correctly import SVG files.

File: `src/svg.d.ts`

## Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or new features to suggest.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
