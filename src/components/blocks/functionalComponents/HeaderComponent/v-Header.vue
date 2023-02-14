<template>

    <div class="w-full fixed z-50">
        <header ref="Header" class=" flex justify-center bg-white shadow-lg lg:shadow-none">

            <div class="header-wrapper w-full md:max-w-fit flex flex-row justify-between items-center">
                <!-- <nav class="white navbar"></nav> -->
                <div ref="MenuLeft"
                    class="menu-left basis-auto flex flex-row-reverse justify-between items-center md:flex-row">
                    <div class="logo-block">
                        <router-link :to="{ name: 'StartPage' }"> 
                            <img src="~@/assets/img/logo/inco-med_logo_x1.png"
                                alt="" />
                        </router-link>
                    </div>

                    <nav class="burger-menu">
                        <div @click="openMenu()" class="burger-logo pr-5 md:hidden">
                            <ion-icon size="large" ref="Menu" name="menu" class="cursor-pointer orange-svg"></ion-icon>
                        </div>
                        <!-- py-5 pr-5 -->
                        <div class="burger-content z-[-1] md:z-auto 
                        transition-all ease-in duration-500 
                        bg-white left-0 w-full sm:w-full  md:w-auto
                        top-[5.6rem]">
                            <!-- md:static absolute -->
                            <ul ref="MenuContent" class="menu__wrapper 
                            hidden md:flex md:flex-row 
                            md:flex-wrap md:items-center flex-col">

                                <div class="log_in-block py-5 md:hidden">
                                    <div class="log_in__wrapper">
                                        <div class="log_in__autorization">
                                            <div class="autorization__user-logo">
                                                <img src="~@/assets/img/logo/login_logo.png" alt="" />
                                            </div>
                                            <div class="autorization__textblock">Личный кабинет</div>
                                        </div>
                                    </div>
                                </div>

                                <li class="menu__element pb-5 md:pb-0 md:px-5">
                                    <router-link :to="{ name: 'EMCPage' }">
                                        <div class="menu__element_link text-sm duration-200">
                                            Электронная медицинская карта
                                        </div>
                                    </router-link>
                                </li>
                                <li class="menu__element pb-5 md:pb-0 md:px-5">
                                    <router-link :to="{ name: 'DoctorsPage' }">
                                        <div class="menu__element_link text-sm duration-200">
                                            Подбор врача
                                        </div>
                                    </router-link>
                                </li>
                                <li class="menu__element pb-5 md:pb-0 md:px-5">
                                    <router-link :to="{ name: 'MedhelpPage' }">
                                        <div class="menu__element_link text-sm duration-200">
                                            Организация медицинской помощи
                                        </div>
                                    </router-link>
                                </li>
                                <li class="menu__element pb-5 md:pb-0 md:px-5">
                                    <router-link :to="{ name: 'SanatoriumsPage' }">
                                        <div class="menu__element_link text-sm duration-200">
                                            Санаторно-курортное лечение
                                        </div>
                                    </router-link>
                                </li>
                                <li class="menu__element pb-5 md:pb-0 md:px-5">
                                    <router-link :to="{ name: 'ECMHPage' }">
                                        <div class="menu__element_link text-sm duration-200">
                                            Экспертиза качества лечения
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>

                    </nav>

                </div>

                <div ref="MenuRight"
                    class=" menu-right basis-auto flex flex-row-reverse justify-between items-center md:flex-row md:basis-2/5">
                    <div class="text-xs md:text-base duration-200">8 800 100-46-03</div>

                    <div class=" hidden md:flex md:log_in-block basis-2/5">
                        <div class="log_in__wrapper w-full">
                            <div class="log_in__autorization flex items-center justify-between text-center">
                                <div class="autorization__user-logo">
                                    <img src="~@/assets/img/logo/login_logo.png" alt="" />
                                </div>
                                <div class="autorization__textblock">Личный кабинет</div>
                            </div>

                            <div class="log_in__seleclor-block hidden">
                                <div class="block">Lorem, ipsum dolor.</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: "vHeader",
    data() {
        return {
            width: 0,
        }
    },

    created() {
        if (this.openMenu) {
            window.addEventListener('resize', () => {
                this.width = window.innerWidth
                if (this.width >= 768) {
                    // console.log('close menu');
                    this.closeMenu();
                }
                // console.log(this.$refs.MenuContent.childNodes); /* если кликнули по одному из элементов childNodes - закрыть меню. */
            });


        }

        // console.log(this.$refs.MenuContent)
    },

    computed: {

    },

    methods: {

        closeMenu() {
            this.$refs.Header.parentElement.classList.remove('h-full')
            this.$refs.Header.parentElement.classList.remove('dark-background')


            this.$refs.Header.classList.add('w-full');
            this.$refs.Header.classList.remove('h-full')
            this.$refs.Header.classList.remove('w-4/5')
            this.$refs.Header.classList.remove('sm:w-1/2')

            this.$refs.MenuLeft.parentElement.classList.add('items-center');
            this.$refs.MenuLeft.classList.add('items-center');
            this.$refs.MenuLeft.firstChild.classList.remove('hidden')

            this.$refs.Menu.name = 'menu'

            this.$refs.MenuContent.classList.remove('flex')
            this.$refs.MenuContent.classList.add('hidden')

            this.$refs.MenuRight.classList.remove('hidden')
        },

        openMenu() {

            if (this.$refs.Menu.name === 'menu') {
                this.$refs.Header.parentElement.classList.add('h-full')
                this.$refs.Header.parentElement.classList.add('dark-background')

                this.$refs.Header.classList.remove('w-full');
                this.$refs.Header.classList.add('h-full')
                this.$refs.Header.classList.add('w-4/5')
                this.$refs.Header.classList.add('sm:w-1/2')


                this.$refs.MenuLeft.firstChild.classList.add('hidden')
                this.$refs.MenuLeft.classList.remove('items-center');
                this.$refs.MenuLeft.parentElement.classList.remove('items-center');

                this.$refs.Menu.name = 'close'

                this.$refs.MenuContent.classList.remove('hidden')
                this.$refs.MenuContent.classList.add('flex')

                this.$refs.MenuRight.classList.add('hidden')
            }
            else {
                this.closeMenu();
            }

        },

        // console.log(this.$refs.menu);
        // this.$refs.menu.style.opacity = 100+"%"
        // this.$refs.MenuContent.style.opacity = 100+"%"
    }

}
</script>

