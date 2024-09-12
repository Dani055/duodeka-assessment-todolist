Please make sure to read this before you assess the assignment.

1. The assignment project was created with React + Vite. Typescript is used throughout it.

2. I decided to refactor the given global state proof-of-concept example to use a functional component.
The reason behind this is that React has moved on from class-based components. The developers of react themselves recommend
moving to functional components. See https://react.dev/reference/react/Component for reference.

3. While MUI components are mostly used in the assignment (buttons, checkboxes, etc.) most of the layout is
achieved with bootstrap. The MUI 'sx' system is quite clunky to use and in my experience produces ugly and non-readable code.
Bootstrap is easy and clean to use with great documentation.

4. Comments are placed in the code whenever they could help the reader better understand what's going on.
Wherever comments are not present I felt that the code is self-explanatory.

With all of that in mind, running the assignment is simple:
 - run `npm install`
 - run `npm run dev`
 - go to http://localhost:5173/