# Student Profile Manager - Vue.js Application

A modern, interactive Student Profile Manager built with Vue 3. This application demonstrates essential Vue.js concepts including component-based architecture, reactive state management, and event handling.

## 📋 Features

✅ **Accept Student Name** - Input field with v-model binding  
✅ **Accept Course** - Input field with v-model binding  
✅ **Add Student to List** - Dynamically add students with validation  
✅ **Remove Student from List** - Delete students with confirmation  
✅ **v-model Usage** - Two-way data binding on input fields  
✅ **v-for Loop** - Render student list dynamically  
✅ **@click Events** - Handle user interactions  
✅ **Component-based** - Reusable StudentCard component  

## 🎯 Project Structure

```
VUE/
├── index.html           # Main HTML entry point
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
├── src/
│   ├── main.js          # Vue app bootstrap
│   ├── App.vue          # Main application component
│   └── components/
│       └── StudentCard.vue  # Reusable student card component
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "c:\Users\User\Downloads\VUE"
```

2. Install dependencies:
```bash
npm install
```

### Running the Development Server

Start the development server:
```bash
npm run dev
```

The application will automatically open at `http://localhost:5173` in your default browser.

## 💻 How to Use

1. **Enter Student Information**: Type a student's name and select a course
2. **Add Student**: Click the "➕ Add Student" button or press Enter
3. **View Students**: See all added students displayed as cards
4. **Remove Student**: Click the ✕ button on a student card to remove them

## 🏗️ Vue.js Concepts Demonstrated

### v-model
```vue
<input v-model="newStudent.name" />
```
Two-way data binding between input fields and component state.

### v-for
```vue
<StudentCard
  v-for="(student, index) in students"
  :key="index"
  :student="student"
  :index="index"
  @remove="removeStudent"
/>
```
Renders a list of student components dynamically.

### @click
```vue
<button @click="addStudent">Add Student</button>
<button @click="handleRemove">Remove</button>
```
Handles user interactions with click events.

### Components
- **App.vue** - Container component managing state and logic
- **StudentCard.vue** - Child component displaying individual student information

## 📦 Build for Production

Create a production-ready build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🎨 Styling

The application features:
- Gradient backgrounds
- Responsive grid layout
- Smooth animations and transitions
- Dark/light mode compatibility
- Mobile-responsive design

## 📝 Notes

- Form validation ensures both fields are filled before adding a student
- Confirmation dialog appears before removing a student
- Empty state message displays when no students are present
- Press Enter key in input fields to add a student quickly
- Student count is displayed in the header

## 🛠️ Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend tooling
- **JavaScript (ES6+)** - Modern JavaScript syntax
- **CSS3** - Modern styling with gradients and animations

---

Happy coding! 🚀
