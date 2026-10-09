# CSIT QuizMaster

A browser-based multiple-choice practice app for computer science and IT topics. It runs from a single HTML file and has no package installation or backend requirement.

## Features

- **58 built-in questions** across eight topics: Data Structures, Algorithms, Networking, Databases, Operating Systems, Programming, Cybersecurity, and AI & ML.
- Choose topics, difficulty (easy, medium, hard), question count (5, 10, 15, or 20), and a timer (off, 15, 30, 45, or 60 seconds).
- Immediate answer feedback, explanations, progress tracking, score, grade, and a review of answers.
- Three lifelines per quiz: 50:50 once, skip twice, and hint twice.
- Persistent bookmarks, local quiz statistics, and a local leaderboard using browser storage.
- Responsive layout for desktop and mobile screens.

The question count is a maximum: if the selected topic and difficulty filters leave fewer questions available, the quiz uses the questions that match.

## Run locally

**Requirements:** a modern browser. Python 3 is only needed for the optional local-server command below. No npm install, build step, database, API key, or backend is required.

1. Clone or download this repository.
2. Open a terminal in the project directory.
3. Start a local static server:

   ```bash
   python3 -m http.server 8000
   ```

4. Open [http://localhost:8000](http://localhost:8000).

You can also open `index.html` directly in a browser. Using a local server is recommended for consistent browser storage behavior.

## Scoring and quiz behavior

- Correct answers award 10 points for easy, 20 for medium, and 30 for hard questions.
- When a timer is enabled, a correct answer can earn up to 10 additional time-bonus points.
- When time runs out, the question is marked as timed out, the correct answer and explanation are shown, and you can continue.
- A skipped question is recorded separately from a wrong answer.
- Quiz results include accuracy, counts of correct/wrong/skipped answers, elapsed time, and a question-by-question review.

## Local data and privacy

Quiz statistics, saved scores, and bookmarks are stored in the current browser's `localStorage`. They are not uploaded to a server and do not automatically sync between browsers or devices. Clearing site data removes them. If browser storage is unavailable, the quiz itself can still run, but information may not persist.

Leaderboard names and scores are local display data, not verified identities or server-validated results. Users can modify browser storage, so the app is **not** suitable for high-stakes examinations or trusted competitive rankings.

The page requests Google Fonts for its visual styling. If the fonts cannot be reached, the browser uses fallback fonts; the quiz logic does not depend on that service.

## Question bank format

Questions are defined in the `QUESTION_BANK` array inside `index.html`. Add records using this shape:

```js
{
  id: 59, // unique numeric ID
  topic: 'Networking',
  icon: '🌐',
  q: 'Which protocol resolves a domain name to an IP address?',
  opts: ['DNS', 'DHCP', 'SSH', 'NTP'],
  ans: 0, // zero-based index into opts
  diff: 'easy', // easy, medium, or hard
  exp: 'DNS resolves domain names to IP addresses.'
}
```

Each question must have four options, a valid zero-based answer index, a difficulty value, and an explanation.

## Validation

The repository includes a dependency-free validation script. With Node.js installed, run:

```bash
node tests/validate.mjs
```

It checks JavaScript syntax, question-bank structure and IDs, key quiz safeguards, and safe leaderboard rendering.

## License

This project is licensed under the GNU General Public License v3.0. See [LICENSE](LICENSE).
