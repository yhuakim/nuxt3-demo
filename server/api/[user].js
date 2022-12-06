export default defineEventHandler((event) => {
    const { user } = event.context.params
    return {
        message: `Hello ${user}! This message is From The Server!'`
    }
})