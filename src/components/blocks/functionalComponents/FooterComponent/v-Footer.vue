<template>
    <div class="w-full ">
        <footer class="flex justify-center bg-white w-full">
            <div class="footer-wrapper w-full max-w-fit flex flex-row justify-between items-center">
                <!-- <nav class="white navbar"></nav> -->

                <div class="footer-content flex justify-between flex-wrap lg:flex-nowrap flex-col md:flex-row ">

                    <div class="fast-nav-block md:basis-full lg:basis-4/5">
                        <div class="fast-nav-wrapper flex-col sm:flex-row flex-nowrap sm:flex-wrap">
                            <nav class="fast-nav-item nav-for-clients">
                                <ul class="fast-nav-item-content"> Для клиентов <li class="fast-nav-item-li">Личный
                                        кабинет
                                    </li>
                                    <li class="fast-nav-item-li">
                                        <router-link :to="{ name: 'EMCPage' }">
                                            Электронная медицинская карта
                                        </router-link>
                                    </li>
                                    <li class="fast-nav-item-li">
                                        <router-link :to="{ name: 'ECMHPage', hash: '#license' }">
                                            Лицензии и документы
                                        </router-link>
                                    </li>
                                    <li class="fast-nav-item-li">
                                        <router-link :to="{ name: 'MedhelpPage', hash: '' }">
                                            Порядок получения медицинской помощи
                                        </router-link>
                                    </li>

                                </ul>
                            </nav>
                            <nav class="fast-nav-item nav-about-it">
                                <ul class="fast-nav-item-content"> О компании
                                    <li class="fast-nav-item-li">
                                        <router-link :to="{ name: 'StartPage', hash: '#AboutCompany' }">
                                            О компании
                                        </router-link>
                                    </li>
                                    <li class="fast-nav-item-li">
                                        <router-link :to="{ name: 'StartPage', hash: '#NewsBlock' }">
                                            Новости
                                        </router-link>
                                    </li>
                                </ul>
                            </nav>
                            <nav class="fast-nav-item nav-contacts">
                                <ul class="fast-nav-item-content"> Контакты <li class="fast-nav-item-li">8 800 100-46-03
                                    </li>
                                    <li class="fast-nav-item-li">info@inko-service.ru</li>
                                    <li class="fast-nav-item-li">Понедельник-пятница 9:00-18:00</li>
                                    <li class="fast-nav-item-li">г.Воронеж, ул.Платонова, д.14</li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div class="footer-logo-block self-start md:self-end ">
                        <div class="footer-logo-wrapper">
                            <div class="logo-block"><img src="~@/assets/img/logo/inco-med_logo_x1.png" alt=""></div>
                            <div class="copyright"> © ИНКО-МЕД СЕРВИС 2020 </div>
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: "vFooter",
}
</script>
