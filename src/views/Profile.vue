<script setup>
import { reactive } from 'vue';


const participant = reactive({
    fio: "Армен Джавадян Шагенович",
    birthday: "12.11.1999",
    course: 4,
    university_name: "ДГТУ",
}) 

</script>

<template>
    <Header>
        <template #>
            <!-- <label>{{ participant.name }}</label> -->
        </template>
    </Header>

    <div class="profilecard">
        <div class="rect">
            <h1>Информация участника</h1>
            <div class="bio">
                <h2>ФИО </h2>
                <span>{{ participant.fio }}</span>
            </div>
            <div class="bio">
                <h2>Дата рождения </h2>
                <span>{{ participant.birthday }}</span>
            </div>
            <div class="bio">
                <h2>Курс </h2>
                <span>{{ participant.course }}</span>
            </div>
            <div class="bio">
                <h2>Уровень знаний </h2>
                <span>{{ participant.university_name }}</span>
            </div>
            <div class="bio">
                <h2>Языки программирования </h2>
                <span>{{ participant.fio }}</span>
            </div>
            <div class="bio">
                <h2>Телефон </h2>
                <span>{{ participant.fio }}</span>
            </div>
            <div class="bio">
                <h2>Почта </h2>
                <span>{{ participant.fio }}</span>
            </div>
            <div class="bio">
                <h2>Телеграм </h2>
                <span>{{ participant.fio }}</span>
            </div>
            <div class="bio">
                <h2>GitHub </h2>
                <span>{{ participant.fio }}</span>
            </div>
            <div class="bio">
                <h2>Спарвка об обучении </h2>
                <span>{{ participant.fio }}</span>
            </div>
        </div>
        <div class="inform">
            <div class="rect">
                <h1>Информация команды</h1>
                <div class="bio">
                    <h2>Название </h2>
                    <span>{{ participant.fio }}</span>
                </div>
                <div class="bio">
                    <h2>Уровень команды</h2>
                    <span>{{ participant.fio }}</span>
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
                        type="text"
                        placeholder="https://github.com/..."
                        v-model='asd'
                    >
                </div>
                <div class="get__inform">
                    <h2>Презентация</h2>
                    <input
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

    .profilecard {
        max-width: 1600px;
        font-size: 32px;
        min-height: 800px;
        max-height: 1000px;
        margin: 10vh auto;
        padding: 50px;
        display: grid;
        gap: 50px;
        grid-template-columns: 1fr 1fr;
        background: var(--cl-fiolet);
        border-radius: 20px;
    }
    
    input {
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
        max-width: 700px;
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
    .rect{
        /* Rectangle 20 */
        padding: 30px;
        box-sizing: border-box;
        background: #0F1016;
        border: 2px solid var(--cl-purple);
        border-radius: 20px;
    }


</style>