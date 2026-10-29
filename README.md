# My Full Stack Development Journey

I started learning full-stack web development during my college days(2019), but I got serious about it after failing at vibe coding on July 13, 2026. I completed this phase of my journey on October 29, 2026.

The main reason I created this repository was to document my progress and build a rock-solid foundation. Every single file, script, and project in this repository was hard-coded by hand. I made a deliberate choice not to copy-paste code or skip ahead with templates. Whenever I learned a topic—whether it was memory allocation in the V8 engine, state management in Redux, or writing a custom sliding-window rate limiter with Redis—I wrote the code myself, tested it, debugged the errors, and made sure I genuinely understood the concept before moving on.

---

## Technologies Covered

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" alt="Redis" />
  <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white" alt="Socket.io" />
  <img src="https://img.shields.io/badge/WebRTC-333333?style=for-the-badge&logo=webrtc&logoColor=white" alt="WebRTC" />
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
</p>

---

## Repository Overview

```
my-full-stack-journey/
├── css/             # CSS fundamentals, responsive layouts, and UI clones (17 days)
├── javascript/      # Core JavaScript, runtime internals, DOM projects, and algorithms (32 days)
├── typescript/      # TypeScript compiler setup, types, and interfaces
├── reactjs/         # React fundamentals, hooks, routing, and Redux Toolkit (19 days)
├── Backed/          # Node.js, Express, MongoDB, Redis, WebSockets, and WebRTC (35 days)
├── Gitlec/          # Git branching, staging, and resolving merge conflicts
└── postman/         # Postman API collections and environment tests
```

---

## What I Learned and Built

### 1. HTML and CSS (17 Days)

I started by learning the core building blocks of web interfaces, focusing on layout behavior, specificity, and responsiveness without relying on CSS frameworks.

- **Fundamentals**: CSS selectors, external stylesheets, typography with Google Fonts, viewport units, and the box model (margin, padding, border, content box).
- **Flag Projects (Day 5)**: Built the national flags of Denmark, Finland, and Japan using only plain HTML divs and CSS positioning, without any external images.
- **Positioning and Flow**: Worked through `relative`, `absolute`, `fixed`, and `sticky` positioning, as well as handling scrollable containers with `overflow`.
- **Zomato UI Clone (Days 8-9)**: Rebuilt Zomato's restaurant listing page, practicing navigation bars, search inputs, card hover states, and responsive grid layouts.
- **Flexbox (Days 10-11)**: Practiced container properties (`justify-content`, `align-items`, `flex-wrap`) and item properties (`flex-grow`, `flex-shrink`, `flex-basis`, `align-self`, `order`), combined with media queries for mobile responsiveness.
- **BookMyShow UI Clone (Day 12)**: Recreated BookMyShow's frontend with hero banners, horizontally scrollable movie cards, and responsive button layouts.
- **CSS Grid and Chessboard (Days 14-15)**: Multi-column grid layouts using `grid-template-columns`, `gap`, `fr` units, `grid-template-areas`, and built a complete chessboard entirely in CSS Grid.
- **Transforms and Animations (Days 16-17)**: 2D transforms (`translate`, `rotate`, `scale`, `skew`), transitions, and `@keyframes` animations. Built an animated solar system model with planets orbiting at different speeds.

---

### 2. JavaScript and Browser Internals (32 Days)

Instead of only learning syntax, I spent time studying how JavaScript runs behind the scenes and built several interactive projects.

- **Runtime and Memory**:
  - How the Google V8 engine compiles JavaScript to machine code and how Node.js executes code outside the browser.
  - Stack memory (for primitive values like numbers, strings, and booleans) vs. Heap memory (for reference types like objects and arrays).
  - The practical difference between `null` (intentional absence of value) and `undefined` (variable declared but not assigned).
- **Core Logic**:
  - Functions, closures, lexical scope, the `this` keyword, and array methods (`map`, `filter`, `reduce`).
  - Sets, loops, and handling asynchronous execution.
- **DOM Optimization and Event Delegation**:
  - Instead of attaching individual click listeners to dozens of child elements, I implemented event delegation on the parent container (`#root`) using `event.target`, significantly reducing memory usage.
- **Algorithmic Thinking**:
  - In a dynamic quiz application, I compared three methods for generating random questions:
    - Version 1: Using a `Set` to prevent duplicates (O(n)).
    - Version 2: Sorting with `Math.random() - 0.5` (O(n log n)).
    - Version 3: Partial Fisher-Yates shuffle to pick questions in O(k) linear time.
- **Projects Built**:
  - **Calculator**: Standard arithmetic operations with keyboard and click input.
  - **Countdown and Timer**: Interval-based timer with pause, start, and reset states.
  - **Dynamic Quote Generator**: Card UI rendering random quotes on user interaction.
  - **Bubble Game**: Click-based game testing DOM event handling.
  - **Rock, Paper, Scissors**: Player vs. computer game with score tracking.
  - **Astrotalk App (Day 27)**: Web app that takes a user's date of birth, calculates their zodiac sign, and generates personalized horoscopes and predictions.
  - **Weather App (Day 30)**: Live weather search tool making HTTP requests with `fetch` and `async/await` against a public weather API.
  - **Restaurant Discovery App (Day 32)**: A Swiggy/Zomato style food app with dynamic card rendering, multi-criteria filtering (alcohol served, 4+ star rating, offers), sorting modal (distance, price, rating), and an `isOpenNow` function that accurately parses 12-hour AM/PM opening and closing hours, including overnight shifts across midnight.

---

### 3. TypeScript

- Configured `tsconfig.json` compiler settings.
- Wrote typed functions, interfaces, custom types, and learned how static analysis prevents runtime bugs before compilation.

---

### 4. React.js and Redux Toolkit (19 Days)

I started React by understanding how it works without build tools before moving to modern setups.

- **React Without JSX (Days 1-3)**: Wrote React using vanilla DOM manipulation first, then `React.createElement` via CDN, and finally introduced Vite and JSX bundling.
- **Myntra Clone (Days 4-5)**: Built a component-based clone of Myntra to understand component reusability and props passing.
- **Interactive Projects (Days 6-9)**:
  - Background color switcher with state management.
  - Password generator with length controls and character set checkboxes.
  - GitHub user finder fetching profile details, follower counts, and avatar images via the GitHub REST API.
- **Optimization (Day 10)**: Learned how React re-renders components and applied `React.memo` to prevent unnecessary child re-renders.
- **Routing (Days 12-13)**: Configured client-side routing with `react-router-dom`, handling nested routes and dynamic URL parameters.
- **State Management with Redux Toolkit (Days 14-15)**:
  - Set up a global store using `@reduxjs/toolkit` and `react-redux`.
  - Built an e-commerce shopping cart where adding items, removing items, and calculating quantities are managed across independent components through dispatching actions and reading state slices.
- **Web3 and Voting DApp (Days 16-18)**: Built a decentralized-style voting application interface.
- **Tailwind CSS (Day 19)**: Integrated Tailwind CSS with Vite for clean, utility-driven component styling.

---

### 5. Backend Development and System Design (35 Days)

The backend section was the most intensive part of my learning. I went from basic Node scripts to full REST APIs, caching layers, rate limiters, AI agents, WebSockets, and WebRTC.

- **Node.js Core (Days 1-4)**:
  - Working with CommonJS (`require` / `module.exports`) and ES Modules.
  - Using the built-in `fs` module for asynchronous file operations.
  - Building a web server from scratch using Node's native `http.createServer` and routing requests manually.
- **Express.js and REST APIs (Days 6-15)**:
  - Setting up Express apps, reading route parameters (`req.params`) and query strings (`req.query`).
  - Handling JSON request bodies with `express.json()`.
  - Building an in-memory CRUD API for a bookstore with proper HTTP status codes (200, 201, 400, 404, 500).
- **MongoDB and Mongoose (Days 16-20)**:
  - Connecting to MongoDB Atlas using Mongoose.
  - Defining schemas and models with data validation.
  - Performing CRUD operations (`find`, `findById`, `create`, `deleteOne`, `deleteMany`).
  - Creating database indexes and handling duplicate key errors (`E11000`).
- **Authentication and Security (Days 21-23)**:
  - Hashing passwords using `bcrypt` before storing them in the database.
  - Generating and verifying JSON Web Tokens (JWT) for stateless authentication.
  - Managing authentication cookies with `cookie-parser`.
  - Writing custom authentication middleware (`userAuth`) to protect private routes, along with logout handling.
- **Modular Architecture (Day 22)**:
  - Split a monolithic server file into structured folders: routes (`authUser`, `getUsers`, `deleteUser`), middleware, and environment variables with `dotenv`.
- **Redis In-Memory Caching (Day 24)**:
  - Connected Redis to Express and parallelized database and cache initialization using `Promise.all([main(), redisClient.connect()])`.
- **Redis Sliding-Window Rate Limiter (Days 25-26)**:
  - Designed an IP-based sliding-window rate limiter from scratch using Redis Sorted Sets (`zAdd`, `zRemRangeByScore`, `zCard`, and `expire`).
  - The middleware removes expired timestamps outside the rolling window, checks the total request count, and blocks requests if the threshold is exceeded.
- **AI Integration and Autonomous Weather Agent (Days 28-30)**:
  - Integrated OpenAI and Groq SDKs for LLM interactions.
  - Built an autonomous terminal-based Weather AI Agent:
    - Extracts target cities and dates from natural language user input into structured JSON.
    - Concurrently calls a weather API using `Promise.all`.
    - Retains multi-turn conversation memory so the model remembers previous questions.
    - Synthesizes clear weather summaries with practical advice.
- **Real-Time WebSockets (Days 32-33)**:
  - Built real-time bi-directional messaging using `Socket.io`.
  - Implemented private chat rooms using `socket.join(room)` and `socket.to(room).emit()`.
- **WebRTC Peer-to-Peer Infrastructure (Day 35)**:
  - Implemented WebRTC signaling setup.
  - Integrated the Twilio Network Traversal API to dynamically generate STUN and TURN ICE server credentials with TTL expiry.

---

### 6. Git and Version Control (`Gitlec`)

- Initializing repositories, tracking files, staging, and writing descriptive commit messages.
- Branching workflows, testing changes in isolation, and merging branches.
- Hands-on practice resolving real merge conflicts between divergent branches (`conflict.js`, `test.js`).

---

### 7. API Testing with Postman (`postman/`)

- Built structured Postman request collections for testing authentication routes (`/login`, `/logout`), user endpoints, and messaging APIs.
- Configured local environment variables to test tokens, headers, and request payloads.

---

## What I Learned From Doing Everything by Hand

1. **Hard-coding builds real intuition**: When you write every database query, middleware function, and CSS rule yourself, you understand why errors happen and how to solve them without guessing.
2. **Architecture matters early**: Breaking code into modular routes, middleware, and config files makes an application maintainable and much easier to debug.
3. **Fundamentals transfer everywhere**: Understanding how memory, the event loop, and network protocols work makes picking up any new framework straightforward.

---

## What's Next

This repository represents the foundation of my full-stack journey. My next steps are:

<p align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
</p>

- Learning **Python and Django** to build scalable, production-ready backend applications.
- Working with relational databases (PostgreSQL) and advanced ORM patterns.
- Building and shipping real-world projects that solve practical problems.

You can follow my latest projects and code on GitHub:  
[https://github.com/Dhrubaraj-Roy](https://github.com/Dhrubaraj-Roy)