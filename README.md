# Task Manager App

A clean and interactive **Task Management App** built with **React**, **Zustand**, **Tailwind CSS**, and **DaisyUI**.  
Easily **add, edit, delete, complete, and prioritize tasks** — all saved in **localStorage** for persistence.  
Fully themeable with DaisyUI’s light/dark modes and custom DaisyUI themes.

---

## Features

 **Add Tasks** – Create new tasks with title, description, and priority.  
 **Edit Tasks** – Update existing tasks using a floating edit modal.  
 **Toggle Completion** – Mark tasks as completed or revert to pending.  
 **Delete Tasks** – Instantly remove unwanted tasks.    
 **Priority Levels** – Choose between High, Medium, or Low.  
 **Smart Timestamps** – Shows *Created at* or *Updated at* dynamically.  
 **Persistent Storage** – All data is safely stored in **localStorage**.  
 **Zustand Store** – Minimal and efficient state management.  
 **DaisyUI Components** – Pre-styled elements with built-in themes.  
 **Theme Switcher** – Supports light, dark, and custom DaisyUI themes.  
 **Toast Notifications** – Real-time feedback using `react-hot-toast`.

---

## Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React.js (Vite)** | Frontend framework |
| **Zustand** | Global state management |
| **Tailwind CSS** | Utility-first styling |
| **DaisyUI** | Tailwind-based component and theme library |
| **Lucide React** | Beautiful icons for UI actions |
| **react-hot-toast** | Toast notifications |
| **localStorage API** | Persistent data storage |

---

## Folder Structure

TaskTrackerApp/  
│  
├── public/  
│ └── vite.svg  
│  
├── src/  
│ ├── assets/  
│ │ └── react.svg  
│ │  
│ ├── components/  
│ │ ├── Header.jsx  
│ │ ├── TaskForm.jsx  
│ │ ├── TaskItem.jsx  
│ │ └── TaskList.jsx  
│ │  
│ ├── constants/  
│ │ ├── character-limits.js  
│ │ └── index.js  
│ │  
│ ├── pages/  
│ │ ├── HomePage.jsx  
│ │ └── SettingsPage.jsx  
│ │  
│ ├── store/  
│ │ ├── useTaskStore.js  
│ │ └── useThemeStore.js  
│ │  
│ ├── utils/  
│ │ ├── date-time.js  
│ │ └── local-storage.js  
│ │  
│ ├── App.jsx  
│ ├── index.css  
│ └── main.jsx  

---

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/prachi1025/TaskTrackerApp.git
   cd TaskTrackerApp

2. **Install Dependencies**
   ```bash
   npm install

3. **Run the development server**
   ```bash
   npm run dev

---

## Key Components Overview

| Component | Description |
|-------------|----------|
| **Header.jsx** | Top navigation bar |
| **TaskForm.jsx** | Floating form for adding or editing tasks. |
| **TaskItem.jsx** | Represents a single task with toggle, delete, and edit options |
| **TaskList.jsx** | Displays all tasks from the store. |
| **HomePage.jsx** | Main task management view. |
| **SettingsPage.jsx** | Theme management |
| **useTaskStore.js** | Zustand store for task data |
| **useThemeStore.js** | Zustand store for managing themes |
| **local-storage.js** | Handles persistent data storage |
| **date-time.js** | Generates formatted date-time strings in DD MMM YYYY, HH:MM AM/PM |

---

## Theming

DaisyUI provides prebuilt light/dark themes that can be toggled dynamically from the Settings Page.
All components are styled using Tailwind utility classes for responsive and elegant UI.

---

## Future Enhancements

The Task Tracker App is designed with scalability and modularity in mind.  
Here are some potential improvements and next steps that can be implemented in the future:

- **Convert to a Full MERN Stack App**  
  Integrate a **MongoDB + Express.js + Node.js** backend for persistent cloud storage and user authentication.  
  This will allow tasks to be saved, updated, and synced across multiple devices.

- **User Authentication**  
  Add login/signup functionality using JWT or OAuth to allow multiple users to maintain their own task lists.

- **Cloud Sync & Backup**  
  Enable synchronization of tasks with cloud databases (e.g., MongoDB Atlas, Firebase).

- **Mobile App Integration**  
  Extend the app using **React Native** to allow seamless access across web and mobile platforms.

- **Analytics Dashboard**  
  Add insights such as task completion rate, time spent on each task, and productivity charts.

- **Categories & Tags**  
  Introduce categories or tags to group tasks and filter them more efficiently.

- **Custom Themes**  
  Enhance the theme system using DaisyUI’s customization — let users create and save their own themes.

- **Reminders & Notifications**  
  Use browser notifications or email reminders to alert users of pending or high-priority tasks.

---

*The modular architecture of this project (with Zustand state management, reusable components, and utilities) makes it an excellent foundation for scaling into a complete MERN-based productivity application.*

---

## Author

**Prachi Pargal**
B.Tech (Computer Science and Engineering) | DAVIET
Passionate Full-Stack Developer

**Reach me:**
- LinkedIn: [Prachi Pargal](https://www.linkedin.com/in/prachi-pargal-7690962b2/)
- Email: prachipargal123@gmail.com
