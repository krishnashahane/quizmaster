## QuizMaster

Core Purpose:
Help students practice subject-wise MCQs with instant feedback, performance analysis, and weak topic identification.
Tech Stack:
Frontend: HTML, CSS, JavaScript
(Optional backend if needed): Node.js + Express + simple database (JSON/MySQL)
Features:
User enters name and selects subject
Each subject contains 5 units with multiple MCQs
Each question has a 15-second timer
Auto-submit when time ends
Immediate answer validation
Final result page showing:
Total score
Correct vs wrong answers
Performance graph/chart
Show weak topics based on incorrect answers
System Architecture:
Frontend UI → Quiz Engine (logic + timer) → Question Database → Result & Analysis Module
Security Features:
Disable right-click
Detect tab switching (show warning)
Enforce timer to prevent cheating
Use HTTPS-ready structure
UI/UX:
Minimal, fast, clean interface
Mobile + desktop responsive
Smooth transitions between questions
Data Handling:
Store MCQs in structured format (array/JSON)
Include subjects, units, questions, options, correct answers
Extra Enhancements (important):
Add leaderboard (optional)
Add difficulty levels (easy/medium/hard)
Add subject-wise analytics dashboard
Output Required:
Full working code (frontend + optional backend)
Folder structure
Instructions to run locally
