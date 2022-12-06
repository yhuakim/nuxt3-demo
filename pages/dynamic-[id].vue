<template>
    <div>
        Id: {{ route.params.id }}
    </div>
</template>

<script setup>
const route = useRoute()
</script>
