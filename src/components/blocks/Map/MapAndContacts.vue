<template>
    <section>
        <div class="content">
            <div class="map-and-contacts">
                <div class="map-block">
                    <div id="mapSurface"></div>

                    <!-- <img src="img/map.png" alt=""> -->
                    <div class="contacts-block__wrapper absolute ml-[1%] md:ml-[2%]">
                        <div class="case rounded-xl p-5 aliceblue_theme contacts__case with_shadow">

                            <nav class="nav__contacts text-xs md:text-sm xl:text-base">

                                <ul class="nav__content "> Контакты
                                    <li class="nav__content__li">8 800 100-46-03</li>
                                    <li class="nav__content__li">info@inko-service.ru</li>
                                    <li class="nav__content__li">Понедельник-пятница 9:00-18:00</li>
                                    <li class="nav__content__li">г.Воронеж, ул.Платонова, д.14</li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "MapAndContacts"
};
</script>
