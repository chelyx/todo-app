<template>
  <div class="flex-row">
		<div class="text-white text-3xl">{{ task.name }}</div>
		<div class="buttons">
			<button class="text-white text-2xl" @click="toggle">{{ task.done ? 'Undo' : 'Done' }}</button>
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
