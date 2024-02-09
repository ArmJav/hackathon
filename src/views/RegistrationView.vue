<script setup>
import Uinput from '@/components/global/Uinput.vue';
import { reactive, ref } from 'vue';
import Participant from "../components/Participant.vue"
import { useAuthStore } from '@/stores/auth';
    const authStore = useAuthStore();
    const review_team = reactive({
        name_team: '',
        team_level: 'junior',
        portfolio: '',
        git_hub_link:''
    });


    
    const participant = ref([
        {name_var: "Участник 1", value: {role:1,member_level: "junior"}, files: {file: null}},
    ]);
    const participantRefs = ref([]);

    const participant_insert = () => {
        const len = participant.value.length + 1

        if (len > 6) {
            alert("Максимальное количество участников - 6")
        }
        else {
            // review_participant.value.role = 0
            const aaa = {name_var: `Участник ${len}`, value: {role:0, member_level: "junior"}, files: {}}
            participant.value.push(aaa)
            console.log(participant.value)
            document.getElementById('foo').style.cssText = 'display:none'
        }
    }

    const push_paticipant = async () => {

        let formData = []
        let array_part = []
        participant.value.forEach((element, index) => {
            console.log(element.files)
            array_part.push(element.value)
            const fdfile = {index: element.files.file}
            formData.push(element.files.file)
        });

        let payload = {
            "name":review_team.name_team, 
            "team_level": review_team.team_level,
            "portfolio": review_team.portfolio,
            "git_hub_link": review_team.git_hub_link,
            "members":array_part,
        }
        // formData.append('name', review_team.name_team)
    
        
        await authStore.singup(payload)
        await authStore.certs(formData, review_team.name_team)
    
        console.log(payload);
    }
</script>

<template>
    <Header>
        <template #>
            <a href="/login">Войти</a>
        </template>
    </Header>
    <div class="centr-el2">
    <h1>Регистрация команды</h1>
    <form class="cardregistr" @submit.prevent.stop="push_paticipant">
        <div class="centr-el">
            <h2>Название команды</h2>
            <Uinput
                type="text"
                placeholder="Введите название команды"
                v-model="review_team.name_team"
            ></Uinput>
            <h2 >Уровень команды</h2>
            <div class="radio_div">
                <input type="radio" id="junior_team" value="junior" v-model="review_team.team_level" required />
                <label for="junior_team">Junior</label>
            
            </div>
            <div class="radio_div">
                <input type="radio" id="middle_team" value="middle" v-model="review_team.team_level" required/> 
                <label for="middle_team">Middle</label>
            </div>
        </div>

        <div class="centr-el ">
            <h2>Портфолио команды</h2>
            <Uinput
                type="textarea"
                placeholder="Расскажите о себе"
                v-model="review_team.portfolio"
            />
            <p>*Опишите свой лучший командный проект, укажите реализованные функции, количество участников и их роли.</p>
        </div>

        <div class="centr-el">
            <h2>Ссылка на GitHub проекта из портфолио</h2>
            <Uinput
                type="text"
                placeholder="https://github.com/..."
                v-model="review_team.git_hub_link"
            />
        </div>
        <form v-for="(item, index) in participant" ref="participantRefs" class="centr-el mb-5">
            <Participant :names=item.name_var :values=item.value :files=item.files :participant_insert = "participant_insert"></Participant>
        </form>

        <label class="centr-el">
            <input type="checkbox" id="accept__rols" value="accept" required>
            Ознакомился и согласен с <a href="">правилами участия</a>, соглашением о конфиденциальности и согласен на обработку персональных данных
        </label>

        <button type="submit" class = "buttons btn2">
            Отправить
        </button>
        
    </form>
    </div>
    <img src="../components/icons/101.png" alt="fon" class="imgf">

</template>

<style scoped>

.centr-el{
    padding: 1em 10px 0 10px;
    margin: 0 15% 0 15%;
}

.centr-el2{
    max-width: 1280px;
    margin: 10vh auto;
}
.cardregistr{
    /* фон под регистрация */
    font-size: 36px;
    box-sizing: border-box;
    max-width: 1250px;
    background: var(--cl-dark-blue);
    border: 1px solid var(--cl-border);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    padding: 5px;
    align-items: center;

}

.btn2 {
   color: var(--color-text);
   margin: 1em;
   font-size: 0.6em;
   font-weight: 200;

}
.radio_div {
    max-height: 35px;
    display: flex;
}
label {
    font-size: 0.5em;
    font-weight: 300;
    margin-left: 8px;
}

p {
    font-size: 0.5em;
    font-weight: 300;
    max-width: 700px;
}
h2 {
    font-size: 1em;
    font-weight: 300;
}
h1 {
    font-size: 64px;
    font-weight: bold;
    text-align: center;
}
.imgf {
    min-height: 100%;
    min-width: 640px;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
}



@media (max-width: 450px) {
    .cardregistr {font-size: 22px;}
    h1 {font-size: 35px;}
}


</style>