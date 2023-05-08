<script setup lang="ts">
defineProps<{
  title: string;
  imageUrl: string;
}>();
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div
    v-bind="$attrs"
    class="project-header"
    :style="{
      '--background-image': `url(images/${imageUrl})`,
    }"
  >
    <h3 class="content">{{ title }}</h3>
  </div>
  <div class="flow prose">
    <slot />
  </div>
</template>

<style>
.project-header {
  background-color: var(--black);
  background-image: linear-gradient(to top, #000000bb 20%, transparent 60%),
    var(--background-image);
  background-position: 0 50%;
  background-size: cover;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  aspect-ratio: 2.5;
  color: var(--white);
  display: flex;
  align-items: end;
  padding-bottom: 1rem;
  font-size: var(--size-5);
  border: 1px solid var(--black);
}
</style>
