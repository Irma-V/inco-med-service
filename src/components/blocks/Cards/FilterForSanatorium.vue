<template>
    <div class="tabs__block__content with_shadow">
        <div class="content__wrapper">
            <div class="header2">
                <h2>Фильтр и поиск</h2>
            </div>
            <div class="input-blocks__wrapper">
                <div class="input-block__item">
                    <div class="filter-item">
                        <input type="text" placeholder="Поиск по названию"
                            class="input-block-self filter__input-text_size">
                    </div>
                </div>
                <div class="input-block__item">
                    <div class="timeSelector_block food__options">
                        <select class="form-select" id="food__options" aria-label="Варианты питания">
                            <option selected="">Варианты питания</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                        </select>
                    </div>
                </div>
                <div class="input-block__item">
                    <div class="timeSelector_block region">
                        <select class="form-select" id="region" aria-label="Выбор региона">
                            <option selected="">Выберите регион, область
                            </option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                        </select>
                    </div>
                </div>
                <div class="input-block__item">
                    <div class="timeSelector_block therapy__option">
                        <select class="form-select" id="therapy__option" aria-label="Выбор лечения">
                            <option selected="">Варианты лечения</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                        </select>
                    </div>
                </div>
                <div class="input-block__item">
                    <div class="timeSelector_block city">
                        <select class="form-select" id="city" aria-label="Выбор города">
                            <option selected="">Город</option>
                            <option value="1">Сочи</option>
                            <option value="2">Анапа</option>
                            <option value="3">Геленджик</option>
                        </select>
                    </div>
                </div>
                <div class="input-block__item">
                    <div class="timeSelector_block time">
                        <select class="form-select" id="time" aria-label="Выбор времени">
                            <option selected="">Профиль</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                        </select>
                    </div>
                </div>
                <div class="input-block__button">
                    <ButtonBlock ButtonWrapper="h-[2.125rem]" ButtonStyle="blue" ButtonName="Применить">
                    </ButtonBlock>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import ButtonBlock from '../functionalComponents/FillingInputBlocks/ButtonBlock.vue';

export default {
    name: "FilterForSanatorium",
    data() {
        return {};
    },
    components: { 
        ButtonBlock 
    }
}
</script>