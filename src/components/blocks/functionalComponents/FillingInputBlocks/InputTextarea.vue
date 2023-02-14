<template>
    <div class="input-block-name">{{ InputTextareaName }}</div>
    <textarea type="text" :placeholder="InputTextareaPlaceholder" class="input-block-self" id="comment"></textarea>
</template>

<script>
export default {
    name: "InputTextarea",
    props: {
        InputTextareaName: {
            type: String,
        },
        InputTextareaPlaceholder: {
            type: String,
        }
    }
}
</script>

<style scoped lang="scss">
.input-block-self {
    width: 100%;
    height: 3.125rem;

    border: 0.0938rem solid #deebfe;
    border-radius: 0.625rem;

    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
}

    #comment {
        height: 80%;
        padding: 15px 25px;
        resize: none;
    }
</style>