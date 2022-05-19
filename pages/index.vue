<template>
  <div class="main">
    <h1>To-Do App</h1>
    <div class="create-new">
      <input
        v-model="newTask"
        type="text"
        placeholder="Add a New Task"
        @keypress.enter="addTask"
      />
      <button @click="addTask">Add</button>
    </div>
    <div class="tasks">
      <TaskItem
        v-for="(task, id) in $store.state.tasks"
        :key="id"
        :task="task"
      />
    </div>
  </div>
</template>

<script>
import TaskItem from '~/components/TaskItem.vue'
export default {
  name: 'IndexPage',
  components: { TaskItem },
  data() {
    return {
      newTask: '',
    }
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit('addTask', this.newTask)
        this.newTask = ''
      } else {
        alert('You must enter something!')
      }
    },
  },
}
</script>
