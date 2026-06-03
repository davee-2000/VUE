<template>
  <div class="container">
    <div class="card">
      <h1>📚 Student Profile Manager</h1>
      
      <div class="form-section">
        <div class="form-group">
          <label for="studentName">Student Name:</label>
          <input
            id="studentName"
            v-model="newStudent.name"
            type="text"
            placeholder="Enter student name"
            class="input-field"
            @keyup.enter="addStudent"
          />
        </div>

        <div class="form-group">
          <label for="studentCourse">Course:</label>
          <input
            id="studentCourse"
            v-model="newStudent.course"
            type="text"
            placeholder="Enter course name"
            class="input-field"
            @keyup.enter="addStudent"
          />
        </div>

        <button 
          @click="addStudent" 
          class="btn btn-add"
          :disabled="!newStudent.name || !newStudent.course"
        >
          ➕ Add Student
        </button>
      </div>

      <div class="students-section">
        <h2>Students ({{ students.length }})</h2>
        
        <div v-if="students.length === 0" class="empty-state">
          <p>No students added yet. Start by adding a new student!</p>
        </div>

        <div v-else class="students-list">
          <StudentCard
            v-for="(student, index) in students"
            :key="index"
            :student="student"
            :index="index"
            @remove="removeStudent"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import StudentCard from './components/StudentCard.vue'

export default {
  name: 'App',
  components: {
    StudentCard
  },
  setup() {
    const students = ref([])
    const newStudent = ref({
      name: '',
      course: ''
    })

    const addStudent = () => {
      if (newStudent.value.name.trim() && newStudent.value.course.trim()) {
        students.value.push({
          name: newStudent.value.name,
          course: newStudent.value.course,
          id: Date.now()
        })
        // Reset form
        newStudent.value.name = ''
        newStudent.value.course = ''
      }
    }

    const removeStudent = (index) => {
      students.value.splice(index, 1)
    }

    return {
      students,
      newStudent,
      addStudent,
      removeStudent
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.card {
  background: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

h1 {
  color: #667eea;
  margin-bottom: 30px;
  font-size: 2.5em;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  margin-bottom: 20px;
  font-size: 1.5em;
  border-bottom: 3px solid #667eea;
  padding-bottom: 10px;
}

.form-section {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 30px;
  border: 2px solid #e9ecef;
}

.form-group {
  margin-bottom: 15px;
}

.form-group:last-child {
  margin-bottom: 0;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #495057;
  font-weight: 600;
  font-size: 0.95em;
}

.input-field {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  font-size: 1em;
  transition: all 0.3s ease;
  font-family: inherit;
}

.input-field:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  background-color: #f0f3ff;
}

.btn {
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.btn-add {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  margin-top: 10px;
}

.btn-add:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.btn-add:disabled {
  background: #ccc;
  cursor: not-allowed;
  opacity: 0.6;
}

.students-section {
  margin-top: 30px;
}

.empty-state {
  text-align: center;
  padding: 40px 20px;
  background: #f0f3ff;
  border-radius: 10px;
  color: #667eea;
  font-size: 1.1em;
  border: 2px dashed #667eea;
}

.students-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
}

@media (max-width: 600px) {
  .card {
    padding: 20px;
  }

  h1 {
    font-size: 1.8em;
  }

  .students-list {
    grid-template-columns: 1fr;
  }
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

body {
  padding: 20px;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
