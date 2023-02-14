<template>
    <div class="buttonblock__wrapper" :class="ButtonWrapper">
        <button class="buttonstyle" :class="ButtonStyle">
            {{ ButtonName }}
        </button>
    </div>
</template>

<script>
export default {
    name: "ButtonBlock",
    props: {
        ButtonWrapper: { type: String },
        ButtonStyle: { type: String },
        ButtonName: { type: String },

    }
}
</script>