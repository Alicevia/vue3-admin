<template>
  <div>event-main1</div>
</template>

<script setup lang="ts">
import { eventService } from '@/api'
eventService.getEventInfo()
</script>
<style scoped></style>
