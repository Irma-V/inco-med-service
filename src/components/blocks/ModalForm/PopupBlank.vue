<template>
    <div v-if="isOpen" class="backdrop" @click="close">
        <div class="popup with_border w-auto max-h-[90%] overflow-x-hidden overflow-y-auto" @click.stop>
            <div class="popup-header p-10" :class="popupHeaderStyle">
                <div class="popup-header__wrapper">
                    <div class="title__self">
                        <TitleName :titleName="PopupTitleName"></TitleName>
                    </div>
                    <div class="title__close" @click="close">
                        <div class="close-modal-form">×</div>
                    </div>
                </div>
            </div>
            
            <slot></slot>
            
            <!-- <div class="popup-footer">
                <slot name="actions" :close="close" :confirm="confirm">
                    <button @click="close">Отмена</button>
                    &nbsp;
                    <button @click="confirm">Ok</button>
                </slot>
            </div> -->
        </div>
    </div>
</template>

<script>
import TitleName from '../functionalComponents/TitleName.vue';

export default {
    name: "PopupBlank",
    components: { TitleName },
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
        popupHeaderStyle: {
            type: String,
        },
        PopupTitleName: {
            type: String,
        },
    },
    emits: {
        ok: null,
        close: null,
    },

    data() {
        return {

        }
    },

    mounted() {
        document.addEventListener("keydown", this.handleKeydown);
    },
    beforeUnmount() {
        document.removeEventListener("keydown", this.handleKeydown);
    },

    methods: {
        handleKeydown(e) {
            if (this.isOpen && e.key === "Escape") {
                this.close();
            }
        },

        close() {
            this.$emit("close");
        },
        confirm() {
            this.$emit("ok");
        },
    },
};
</script>

<style scoped lang="scss">
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    // background: rgba(50, 50, 50, 0.6);
    z-index: 9999;

    .popup {
        top: 50px;
        padding: 20px;
        left: 50%;
        transform: translateX(-50%);
        position: fixed;
        z-index: 101;
        background-color: white;
        border-radius: 10px;

        h1 {
            text-align: center;
            margin: 0;
        }

        .footer {
            text-align: right;
        }

        .popup-header {
            .popup-header__wrapper {
                width: 100%;
                display: flex;
                justify-content: space-between;

                .title__close {
                    cursor: pointer;
                    background-color: #ebf3fa;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    font-size: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .close-modal-form {

                        position: relative;
                        left: 0%;
                        bottom: 5%;
                    }
                }

            }
        }

    }
}
</style>