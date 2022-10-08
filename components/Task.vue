<template>
  <div class="flex pl-5">
		<div class="text-white text-3xl" v-bind:class="task.done? 'italic opacity-75' : 'not-italic'">{{ task.name }}</div>
		<div class="flex pl-10">
			<button class="text-2xl pr-5" v-bind:class="task.done? 'text-white' : 'text-green-600'"
        @click="toggle">{{ task.done ? 'Undo' : 'Done' }}</button>
			<button @click="deleteTask" class="text-red-600 text-2xl">Delete</button>
		</div>
	</div>
</template>

<script>
export default {
  props: ['task'],
	methods: {
		toggle() {
			this.$store.commit('TOGGLE_DONE', this.task);
		},
		deleteTask() {
			this.$store.commit('DELETE', this.task);
		}
	}
}
</script>

<style>

</style>
