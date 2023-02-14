<template>

  <section>
    <div class="content">
      <div class="solutions-block">
        <TitleName :titleName="titleName"></TitleName>

        <div class="solutions-block__wrapper">
          <div
            class="solutions-card grid-block__a aliceblue_theme rounded-xl  bgr_phone bg-no-repeat pos_forPhone move_up">
            <div class="solutionsBlock h-full">
              <div class="textblock_solut basis-3/5">
                <div class="header_solut text-lg xl:text-2xl">Электронная медицинская карта </div>
                <div class="text_solut w-1/2 text-sm md:text-base xl:text-xl">История здоровья для Вас, Ваших детей и
                  родителей в
                  современном формате</div>
              </div>
              <div class="button">

                <div class="buttonblock__wrapper">
                  <button class="buttonstyle orange rounded-xl w-48" @click="IsPopupOpen = true" >Получить доступ</button>
                </div>

              </div>

            </div>
          </div>

          <div
            class="solutions-card grid-block__b aliceblue_theme rounded-xl  bg-no-repeat bgr_medhelp_01 pos_forDoctors move_down">
            <div class="solutionsBlock h-full">
              <div class="textblock_solut basis-3/5">
                <div class="header_solut text-lg xl:text-2xl">Организация медицинской помощи</div>
                <div class="text_solut w-4/5 xl:w-3/4 text-sm md:text-base xl:text-xl">Спланировать поход к врачу,
                  обследование, операцию или реабилитацию</div>

              </div>
              <div class="button">
                <!-- <div class="buttonblock"> -->
                <div class="buttonblock__wrapper">
                  <button class="buttonstyle orange rounded-xl w-48 ">Получить доступ</button>
                </div>
                <!-- </div> -->
              </div>

            </div>
          </div>

          <div
            class="solutions-card grid-block__c aliceblue_theme rounded-xl bg-no-repeat bgr_doctor_04 pos_forDoctors move_left">
            <router-link :to="{ name: 'DoctorsPage' }">
              <div class="solutionsBlock h-full">
                <div class="textblock_solut basis-3/5 xl:basis-4/5">
                  <div class="header_solut text-lg xl:text-2xl"> Подбор врача </div>
                  <div class="text_solut w-2/3 xl:w-3/4 text-sm md:text-base xl:text-xl">Найти врача любой специальности
                    и записаться на прием</div>
                </div>
              </div>
            </router-link>
          </div>

          <div
            class="solutions-card grid-block__d aliceblue_theme rounded-xl bg-no-repeat bgr_expertise1 pos_forXray move_right">
            <router-link :to="{ name: 'ECMHPage' }">
              <div class="solutionsBlock h-full">
                <div class="textblock_solut basis-3/5 xl:basis-4/5">
                  <div class="header_solut text-lg xl:text-2xl">Экспертиза качества медицинской помощи</div>
                  <div class="text_solut w-3/5 text-sm md:text-base xl:text-xl">Проверить качество оказанной Вам
                    медицинской помощи</div>
                </div>
              </div>
            </router-link>
          </div>

          <div
            class="solutions-card grid-block__e aliceblue_theme rounded-xl bg-no-repeat bgr_mountains_02 pos_forMountains scale">
            <router-link :to="{ name: 'SanatoriumsPage' }">
              <div class="solutionsBlock h-full">
                <div class="textblock_solut basis-3/5 xl:basis-4/5">
                  <div class="header_solut text-lg xl:text-2xl">Санаторно-курортное лечение</div>
                  <div class="text_solut w-4/5 text-sm md:text-base xl:text-xl">Подобрать и забронировать санаторий с
                    лечебными процедурами</div>
                </div>
              </div>
            </router-link>
          </div>

        </div>

      </div>
    </div>
  </section>

  <PopupBlank :is-open="IsPopupOpen" @ok="PoppupConfirmed" @close="IsPopupOpen = false"
        PopupTitleName="Электронная медицинская карта">
        <ModalFormEMC></ModalFormEMC>
    </PopupBlank>
</template>

<script>
import TitleName from "@/components/blocks/functionalComponents/TitleName"
import ModalFormEMC from "../ModalForm/ModalFormEMC.vue";
import PopupBlank from "../ModalForm/PopupBlank.vue";

export default {
  name: "SolutionsCards",
  components: {
    TitleName,
    PopupBlank,
    ModalFormEMC
},

  data() {
    return {
      titleName: 'Лучшие решения',
      IsPopupOpen: false,
    }
  },
};
</script>
