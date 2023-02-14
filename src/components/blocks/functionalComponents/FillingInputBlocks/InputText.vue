<template>
    <div class="input-block-name">{{ InputTextName }}</div>
    <input type="text" :placeholder="InputTextPlaceholder" class="input-block-self">
</template>

<script>
export default {
    name: "InputText",
    props: {
        InputTextName: {
            type: String,
        },
        InputTextPlaceholder: {
            type: String,
        }
    }
}
</script>