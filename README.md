# ⚡ MCQ Intelligence Platform  
> Train faster. Identify weaknesses. Dominate exams.

---

## 🧠 Overview
A high-performance MCQ practice platform designed to convert practice into measurable improvement using real-time feedback, analytics, and weakness detection.

---

## 🎯 Core Features

### ⚔️ Quiz Engine
- Subject → Unit → MCQs structure  
- 15-second timer per question  
- Auto-submit on timeout  
- Instant answer validation  

### 📊 Performance Analysis
- Total score  
- Accuracy percentage  
- Correct vs wrong breakdown  
- Time efficiency tracking  

### 🧬 Weak Topic Detection
- Tracks incorrect answers per unit  
- Difficulty-weighted analysis  
- Identifies weakest topics automatically  

### 🔒 Anti-Cheat System
- Right-click disabled  
- Tab-switch detection  
- Strict timer enforcement  
- No back navigation  

### 🎨 UI/UX
- Minimal, fast, distraction-free  
- Mobile + desktop responsive  
- Smooth transitions  

---

## 🏗 Architecture


Frontend UI
↓
Quiz Engine (Timer + Logic)
↓
Question Database (JSON / MySQL)
↓
Evaluation Engine
↓
Result & Analytics Module


---

## 🛠 Tech Stack

- Frontend: HTML, CSS, JavaScript  
- Backend (Optional): Node.js + Express  
- Database: JSON / MySQL  
- Charts: Chart.js  

---

## 📁 Folder Structure


mcq-platform/
│
├── frontend/
│ ├── index.html
│ ├── quiz.html
│ ├── result.html
│ ├── styles.css
│ ├── app.js
│ ├── quizEngine.js
│ └── analytics.js
│
├── backend/
│ ├── server.js
│ ├── routes/
│ ├── controllers/
│ └── database/
│
├── data/
│ └── questions.json
│
├── assets/
│ └── images/
│
└── README.md


---

## 🧾 Data Format

```json
{
  "subjects": [
    {
      "name": "Physics",
      "units": [
        {
          "unitName": "Mechanics",
          "questions": [
            {
              "question": "What is force?",
              "options": ["A", "B", "C", "D"],
              "answer": "A",
              "difficulty": "easy"
            }
          ]
        }
      ]
    }
  ]
}
▶️ Run Locally
Frontend Only
open frontend/index.html

Or use Live Server in VS Code.

Full Stack
npm install
node backend/server.js

Server runs at:

http://localhost:3000
📊 Core Logic
Accuracy = (Correct / Total) × 100
Weak Topic = Unit with highest incorrect answers
Difficulty Score = Weighted accuracy by difficulty
🚀 Enhancements
Leaderboard system
Difficulty levels (easy / medium / hard)
Subject-wise analytics dashboard
User authentication & progress tracking
🔮 Future Scope
AI-generated MCQs
Adaptive learning system
Real-time multiplayer quizzes
Personalized recommendations
⚡ Goal

Build a scalable, data-driven MCQ system that improves learning efficiency through continuous feedback and performance insights.
