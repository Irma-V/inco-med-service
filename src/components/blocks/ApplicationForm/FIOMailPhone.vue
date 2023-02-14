<template>
    <div class="filling__input-block surname">
        <InputText :InputTextName="surnameName" :InputTextPlaceholder="surnamePH">
        </InputText>
    </div>

    <div class="filling__input-block firstname">
        <InputText :InputTextName="firstnameName" :InputTextPlaceholder="firstnamePH">
        </InputText>
    </div>

    <div class="filling__input-block patronymic">
        <InputText :InputTextName="patronymicName" :InputTextPlaceholder="patronymicPH">
        </InputText>

    </div>

    <div class="filling__input-block telephone">
        <InputText :InputTextName="telephoneName" :InputTextPlaceholder="telephonePH">
        </InputText>

    </div>

    <div class="filling__input-block email">
        <InputText :InputTextName="emailName" :InputTextPlaceholder="emailPH">
        </InputText>
    </div>
</template>

<script>
import InputText from "@/components/blocks/functionalComponents/FillingInputBlocks/InputText.vue"
export default {
    name: "FIOMailPhone",
    components: {
        InputText
    },
    data() {
        return {
            
            applicationFormTitle: 'Заявка на экспертизу качества лечения',

            surnameName: 'Фамилия',
            surnamePH: 'Иванов',

            firstnameName: 'Имя',
            firstnamePH: 'Иван',

            patronymicName: 'Отчество',
            patronymicPH: 'Иванович',

            telephoneName: 'Телефон',
            telephonePH: '+7 952 540-45-44',

            emailName: 'email',
            emailPH: 'email',
        }
    },
}
</script>
