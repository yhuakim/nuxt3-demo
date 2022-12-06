
<template>
    <h1>
        Home
    </h1>
    <p>A message from the server: {{message}}</p>
    <p>A custom text from the server: {{text}}</p>
</template>

<script setup>
const { data: message } = await useFetch('/api/server')
const { data: text } = await useFetch('/api/Kenny')
</script>
