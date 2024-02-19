<script setup>
import { reactive, ref } from 'vue';
import InputIcon from 'primevue/inputicon';

const participant = reactive({
    fio: "Армен Джавадян Шагенович",
    birthday: "12.11.1999",
    course: 4,
    university_name: "ДГТУ",

}) 
const disableCheck = ref(true)
const changeDisable = () => {
    const elModal = document.querySelectorAll('.disablinput');
    elModal.forEach((el) => {
        if (disableCheck.value === true) {
        el.classList.add('enableinput')
        }
        else {
        el.classList.remove('enableinput');
        }
    });
    disableCheck.value = !disableCheck.value
    
}

</script>

<template>
    <Header>
        <template #>
            <!-- <label>{{ participant.name }}</label> -->
        </template>
    </Header>

    <div class="profilecard">
        <div class="rect">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h1>Информация участника</h1>
                    <img @click="changeDisable" src="../components/icons/user-pen.png" alt="">
                </div>
            <div class="bio">
                <h2>ФИО </h2>
                <input  class="disablinput" :disabled="disableCheck" v-model="participant.fio">
            </div>
            <div class="bio">
                <h2>Дата рождения </h2>
                <input  class="disablinput" :disabled="disableCheck" v-model="participant.birthday">
            </div>
            <div class="bio">
                <h2>Курс </h2>
                <input  class="disablinput" :disabled="disableCheck" v-model="participant.course">
            </div>
            <div class="bio">
                <h2>Уровень знаний </h2>
                <input  class="disablinput" :disabled="disableCheck" v-model="participant.member_level">
            </div>
            <div class="bio">
                <h2>Языки программирования </h2>
                <input  class="disablinput" :disabled="disableCheck" v-model="participant.languages">
            </div>
            <div class="bio">
                <h2>Телефон </h2>
                <input  class="disablinput" :disabled="disableCheck" v-model="participant.phone">
            </div>
            <div class="bio">
                <h2>Почта </h2>
                <input  class="disablinput" :disabled="disableCheck" v-model="participant.email">
            </div>
            <div class="bio">
                <h2>Телеграм </h2>
                <input  class="disablinput" :disabled="disableCheck" v-model="participant.tg_tag">
            </div>
            <div class="bio">
                <h2>GitHub </h2>
                <input  class="disablinput" :disabled="disableCheck" v-model="participant.git_hub_tag">
            </div>
            <div class="bio">
                <h2>Спарвка об обучении </h2>
                <span>{{ participant.fio }}</span>
            </div>
        </div>
        <div class="inform">
            <div class="rect">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h1>Информация команды</h1>
                    <img src="../components/icons/user-pen.png" alt="">
                </div>
                <div class="bio">
                    <h2>Название </h2>
                    <input  class="disablinput" :disabled="disableCheck" v-model="participant.name">
                </div>
                <div class="bio">
                    <h2>Уровень команды</h2>
                    <input  class="disablinput" :disabled="disableCheck" v-model="participant.team_level">
                </div>
                <div class="bio">
                    <h2>Кейс </h2>
                    <span>{{ participant.fio }}</span>
                </div>
            </div>
            
            <form class="rect">
                <h1>Отправка решения</h1>
                <div class="get__inform">
                    <h2>Ссылка на гитхаб </h2>
                    <input
                        class= "input__resp"
                        type="text"
                        placeholder="https://github.com/..."
                    >
                </div>
                <div class="get__inform">
                    <h2>Презентация</h2>
                    <input
                        class= "input__resp"
                        type="file"
                        placeholder="https://github.com/..."
                        
                    >
                </div>
                <div style="max-width: 660px;max-height: 100px; margin-top: 20px;">
                    <Uinput
                        type= "textarea"
                    />
                </div>
            </form>
        </div>

    </div>

</template>

<style scoped>

    img {
        max-width: 30px;
        max-height: 30px;
        
    }
    .profilecard {
        max-width: 1600px;
        font-size: 32px;
        min-height: 800px;
        max-height: 1800px;
        margin: 10vh auto;
        padding: 50px;
        display: grid;
        gap: 50px;
        grid-template-columns: 1fr 1fr;
        background: var(--cl-fiolet);
        border-radius: 20px;
    }
    
    .input__resp {
        background: var(--cl-fiolet);
        border: 1px solid var(--cl-purple);
        border-radius: 20px;
        
        color: var(--color-text);
        padding-left: 1em;
        font-size: 0.5em;
    }

    .bio {
        display: grid;
        grid-template-columns: 2fr 1fr;
        align-items: center;
        max-width: 1000px;
        border-bottom: 1px solid var(--cl-purple);
        margin-top: 20px;
    }

    .get__inform {
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
        max-width: 700px;
        /* border-bottom: 1px solid var(--cl-purple); */
        margin-top: 20px;
    }
    .inform {
        display: grid;
        gap: 50px;
        grid-template-rows: 1fr 1fr;
        margin-left: 0;
    }

    h1 {
        font-size: 1em;
        opacity: 0.9;
    }

    h2 {
        font-size: 0.7em;
    }

    span {
        font-size: 0.45em;
        opacity: 0.8;
    }
    .disablinput{
        font-size: 0.45em;
        border: none;
        opacity: 0.8;
        background: #0F1016;
        color: var(--color-text);
    }
    .enableinput {
        border: 1px solid var(--cl-purple);
    }
    .rect{
        /* Rectangle 20 */
        padding: 30px;
        box-sizing: border-box;
        background: #0F1016;
        border: 2px solid var(--cl-purple);
        border-radius: 20px;
    }

    @media (max-width: 1500px) {
        .profilecard {
            grid-template-columns: 1fr;
            max-width: 1000px;
        }
    }

    @media (max-width: 900px) {
        .profilecard {
            font-size: 24px;
            padding: 15px;
        }

        .rect{padding: 10px;}
    }
    @media (max-width: 400px) {
        .disablinput {
            max-width: 90px;
        }
        .rect{padding: 5px;}
    }



</style>