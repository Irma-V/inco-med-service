<template>
    <div class="filling__input-block select-block">

        <div class="input-block-name">Специализация врача {{ InputSelectorTitle }}</div>
        <div class="timeSelector_block doctors-spetialisation">
            <select class="input-block-self form-select rounded-xl" :id="InputSelectorId"
                :aria-label="InputSelectorTitle">
                <option selected="">Ортопед</option>
                <option value="1">Терапевт</option>
                <option value="2">Окулист</option>
                <option value="3">Гинеколог</option>
            </select>
        </div>
    </div>
</template>

<script>
// import

export default {
    name: "InputSelector",
    props: {
        InputSelectorId: {
            type: String
        },
        InputSelectorTitle: {
            type: String
        },
        InputSelectorSelected: {
            type: String

        },
        InputSelectorValues: {
            type: Array,
            key: {
                type: Number

            },
            value: {
                type: String
            },
        },

    },
}
</script>