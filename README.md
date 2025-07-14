Project setup steps:
Navigate to the frontend directory:

cd frontend
Install dependencies:


npm install
Run the development server:

npm run dev
The frontend will run on http://localhost:3000

API documentation : 
 ✏️ Notes API
->Method	Endpoint	Description
1)POST	/api/notes	Create a new note
2)GET	/api/notes	Get all notes (filter: ?q=&tags=)
3)GET	/api/notes/:id	Get a specific note
4)PUT	/api/notes/:id	Update a note
5)DELETE	/api/notes/:id	Delete a note

🔖 Bookmarks API
->Method	Endpoint	Description
1)POST	/api/bookmarks	Create a new bookmark
2)GET	/api/bookmarks	Get all bookmarks (filter: ?q=&tags=)
3)GET	/api/bookmarks/:id	Get a specific bookmark
4)PUT	/api/bookmarks/:id	Update a bookmark
5)DELETE	/api/bookmarks/:id	Delete a bookmark

Skills Demonstrated :
REST API Design
→ Proper CRUD routes, query filtering, structured endpoints.

Data Validation & Error Handling
→ Input field validation and clean error responses using middleware.

React + Next.js App Router
→ Page routing for /notes and /bookmarks using app/ folder.

Tailwind CSS UI
→ Clean, responsive interface with dark mode and transitions.

Real-World Data Modeling
→ MongoDB schemas for notes and bookmarks, including tags and metadata.

Clean Code & Modular Structure
→ Controllers, routes, models, and utility files organized and separated.

 Folder Structure:
 personal-notes-bookmarks/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── server.js
│   └── app.js
├── frontend/
│   ├── src/app/
│   │   ├── notes/
│   │   ├── bookmarks/
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   └── tailwind.config.js

