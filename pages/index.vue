<template>
  <div class="flex flex-col items-center bg-slate-700 h-screen font-mono" >
    <h1 class="text-6xl text-white p-10">To-Do</h1>

    <div class="flex p-5 text-white flex-col items-center">
      <p class="text-3xl">Add tasks</p>
      <div class="flex flex-row">
        <input class="text-slate-700 rounded-md p-2" type="text" v-model="newTask" placeholder="New task" @keypress.enter="addTask"/>
        <button class="ml-5" @click="addTask">+</button>
      </div>

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
      newTask: this.$store.state.tasks
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
