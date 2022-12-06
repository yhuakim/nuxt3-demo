<script setup lang="ts">
const route = useRoute()
</script>

<template>
    <NuxtExampleLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />

        <template #nav>
            <nav class="flex align-center gap-4 p-4">
                <NuxtLink to="/" class="n-link-base">
                    Home
                </NuxtLink>
                <NuxtLink to="/about" class="n-link-base">
                    About
                </NuxtLink>
                <NuxtLink to="/parent" class="n-link-base">
                    Parent
                </NuxtLink>
                <NuxtLink to="/parent/child1" class="n-link-base">
                    Parent (child1)
                </NuxtLink>
                <NuxtLink to="/parent/child2" class="n-link-base">
                    Parent (child2)
                </NuxtLink>
                <button class="n-link-base" @click="$router.push(`/dynamic-${(Math.random() * 100).toFixed()}`)">
                    dynamic page
                </button>
            </nav>
        </template>

        <template #footer>
            <div class="text-center p-4 op-50">
                Current route: <code>{{ route.path }}</code>
            </div>
        </template>
    </NuxtExampleLayout>
</template>