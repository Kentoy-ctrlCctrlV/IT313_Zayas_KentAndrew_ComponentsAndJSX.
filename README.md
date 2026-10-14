# IT 313 Lab 4: React Components & JSX in Action

This Expo app demonstrates reusable React Native components, props, JSX, and list rendering with a small student roster.

## The roster problem

The screen displays four students enrolled in IT313, including their units and whether they have a full load. Repeating the same card markup for every student would be difficult to maintain, so the roster uses one reusable card component and a data array.

## Components and React concepts

- **Functional components:** `StudentCard` and `StudentRoster` are JavaScript functions that return JSX to describe the interface.
- **Props and destructuring:** `StudentCard` receives `name`, `course`, `units`, and `isFullLoad` as props. Its function parameters destructure those values so they can be used directly.
- **JSX expressions:** Curly braces insert JavaScript values into JSX, for example `{students.length}` and `{displayedStudents.map(...)}`.
- **Conditional rendering:** `{isFullLoad && <Text>Full Load</Text>}` displays the label only when that student's `isFullLoad` value is true.
- **`.map()`:** `StudentRoster` maps the student array to one `StudentCard` per student.
- **The `key` prop:** Every card uses its stable student ID as its key. React uses keys to match list items across renders.

The full-load label appears for Ana Cruz and Cid Ramos only. The student count is read from `students.length`, rather than entered as a separate fixed value.

## Reverse Roster

Press **Reverse Roster** to reverse the displayed order. The handler creates a copy of the current array before calling `.reverse()`, so the original starter `students` array is not changed. Press the button again to return to the initial order.

## Run the app

Node.js and npm should be installed. From the project folder in the VS Code terminal, install dependencies if needed and start Expo:

```bash
npm install
npx expo start
```

Scan the terminal QR code with Expo Go on a compatible device. To use an installed emulator, start it first and press `a` for Android or `i` for iOS in the Expo terminal. On Windows, Android emulator or Expo Go on a physical device are the typical options; the iOS simulator requires macOS.

## Demonstrate the key experiment

The roster currently uses `key={student.id}` in `components/StudentRoster.js`. Near the map callback, a code comment marks where to try the experiment:

1. Temporarily change the callback from `.map((student) => ...)` to `.map((student, index) => ...)`.
2. Change `key={student.id}` to `key={index}`.
3. Run the app and press **Reverse Roster**. Notice how the displayed sequence changes.
4. Restore `.map((student) => ...)` and `key={student.id}` when finished.

Index keys do not guarantee an obvious bug in this example. The cards have no local state, so the reversal may look correct either way. Problems can occur when items change order or are inserted/removed and each item has its own state: an index identifies a position, not the student. Stable IDs let React keep each item associated with the correct student.

## Project files

- `components/StudentCard.js` renders one student's information and optional full-load label.
- `components/StudentRoster.js` owns the roster data, count, list rendering, and reverse button.
- `src/app/index.tsx` connects the roster to the existing Expo Router Home tab.
- `src/app/_layout.tsx` and the tab configuration remain part of the existing Expo Router setup.

## GitHub submission

Create a **public** GitHub repository named `IT313_LastName_FirstName_ComponentsAndJSX`, replacing `LastName` and `FirstName` with your actual name, then push this project to it.