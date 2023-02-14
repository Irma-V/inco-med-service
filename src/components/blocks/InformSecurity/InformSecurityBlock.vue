<template>
    <section>
        <div class="content">
            <div class="inform-security-block flex justify-center">
                <div class="inform-security-wrapper  flex flex-row justify-between basis-4/5 lg:basis-1/2">

                    <img class="inform-security-img basis-1/4 object-contain" src="~@/assets/img/phone_x1_security.png"
                        alt="">

                    <div class="inform-security-textblock flex flex-col justify-between basis-4/6">
                        <div class="title__textblock font-bold text-lg xl:text-2xl">
                            Безопасность
                        </div>
                        <div class="title__description text-sm md:text-base xl:text-xl">
                            <p>ИНКО-МЕД СЕРВИС обеспечивает полную конфиденциальность и безопасность данных о состоянии
                                здоровья.</p> <br>
                            <p>Являемся оператором персональных данных и имеем аттестат соответствия требованиям по
                                безопасности информации.</p> <br>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "InformSecurity"
}
</script>

<style scoped lang="scss">
@media (max-width: 1023px) and (min-width: 850px) {
    .inform-security-block {
        .inform-security-wrapper {
            flex-basis: 66.666667%;
        }
    }
}

@media (max-width: 550px) and (min-width: 50px) {
    .inform-security-block {
        .inform-security-wrapper {
            flex-basis: 100%;
            flex-direction: row-reverse;
            .inform-security-img {
                flex-basis: 50%;
                max-width: 40%;
            }

            .inform-security-textblock {
                flex-basis: 50%;
            }
        }
    }
}
</style>