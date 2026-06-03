<template>
  <div class="student-card">
    <div class="card-header">
      <h3>👤 {{ student.name }}</h3>
      <button 
        @click="handleRemove" 
        class="btn-remove"
        title="Remove student"
      >
        ✕
      </button>
    </div>
    <div class="card-body">
      <div class="course-info">
        <span class="label">Course:</span>
        <span class="value">{{ student.course }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentCard',
  props: {
    student: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  emits: ['remove'],
  methods: {
    handleRemove() {
      if (confirm(`Are you sure you want to remove ${this.student.name}?`)) {
        this.$emit('remove', this.index)
      }
    }
  }
}
</script>

<style scoped>
.student-card {
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.student-card:hover {
  border-color: #667eea;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.15);
  transform: translateY(-5px);
}

.card-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header h3 {
  margin: 0;
  font-size: 1.1em;
  flex: 1;
}

.btn-remove {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.2em;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: 10px;
}

.btn-remove:hover {
  background: rgba(255, 255, 255, 0.4);
  transform: scale(1.1);
}

.btn-remove:active {
  transform: scale(0.95);
}

.card-body {
  padding: 15px;
}

.course-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.label {
  font-weight: 600;
  color: #667eea;
  min-width: 60px;
}

.value {
  color: #333;
  font-size: 0.95em;
  word-break: break-word;
}
</style>
