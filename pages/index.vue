<template>
  <div class="bg-slate-700 h-screen font-mono" >
    <h1 class="text-6xl text-white p-10">To-Do</h1>

    <div class="p-5 text-white">
      <p class="text-3xl">Add tasks</p>
      <input type="text" v-model="newTask" placeholder="New task" @keypress.enter="addTask"/>
      <button @click="addTask">+</button>
    </div>
    <div class="list">
      <Task v-for="(task, i) in $store.state.tasks" :key="i" :task="task"/>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      newTask: ''
    }
  },
  methods: {
    addTask() {
      if(this.newTask) {
        this.$store.commit("ADD", this.newTask);
        this.newTask ="";
      }
    }
  }
})
</script>
