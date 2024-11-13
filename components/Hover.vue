<template>
  <div ref="overlayRef" class="fixed inset-0 pointer-events-none z-50 transition-all duration-300 ease-in-out"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const overlayRef = ref(null)
const x = ref(0)
const y = ref(0)

const updateGradient = (event) => {
  x.value = event.clientX
  y.value = event.clientY
}

const updateBackground = () => {
  if (overlayRef.value) {
    overlayRef.value.style.background = `radial-gradient(
      circle 500px at ${x.value}px ${y.value}px, 
      rgba(68, 174, 161, 0.15), 
      transparent 60%
    )`
  }
}

watch([x, y], () => {
  updateBackground()
})

onMounted(() => {
  window.addEventListener('mousemove', updateGradient)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', updateGradient)
})
</script>