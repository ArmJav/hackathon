<script setup>
import { ref } from 'vue';
import Uinput from './global/Uinput.vue'
// import { useForm } from 'vee-validate';
// import * as yup from 'yup';
import {useGetStore} from '@/stores/getreq'

const props = defineProps({
    names: String,
    values: Object,
    files: Object,
    participant_insert: Function
    })


const getReq = useGetStore();

const role = ref(props.values.role)
const num = ref("")
const birthday = ref(1)
const lang = ref('')

const convertoUINX = (date) => {
    console.log(date);
    return props.values.birthday = Math.floor(new Date(date).getTime() / 1000)
}

const dynamicSearch = async (lang) => {
    const array_lang = lang.split(/[\s,]+/);
    getReq.$reset()
    array_lang.forEach(async (element) => 
        await getReq.search_lang(element),
        props.values.languages = getReq.lang_id
    
    );
    
    
}

const radiotoNum = (role) => {
    return props.values.role = Number(role)
}

const convertNumber = (num) => {
    const num2 = num.replace(/[^0-9]/gim, "")
    console.log(num2);
    return props.values.phone = Number(num2)
}

</script>

<template>
    <form @submit.prevent.stop="participant_insert">
        <h1>{{names}}</h1>
        <h2>Роли</h2>
        <label class="radio_div">
            <input type="radio" name='role' id="capitan_team" value="1" v-model="role" @change="radiotoNum(role)" />
            Капитан
        </label>
        <label class="radio_div">
            <input type="radio" name='role' id="partici_team" value="0" v-model="role" @change="radiotoNum(role)" />
            Участник
        </label>
        <h2>ФИО</h2>
        <Uinput
                type="text"
                name="fio"
                placeholder="Иванов Иван Иванович"
                v-model="values.fio"
        ></Uinput>

        <div class="tree_row">
            <div>
                <h2>Дата рождения</h2>
                <Uinput
                    type="date"
                    placeholder="01.01.2005"
                    v-model="birthday"
                    @change="convertoUINX(birthday)"
                />
            </div>
            <div>
                <h2>Курс</h2>
                <Uinput
                    type="number"
                    name="course"
                    placeholder="1"
                    v-model="values.course"
                />
            </div>
        </div>
        <h2>Название ВУЗа</h2>
        <Uinput
            type="text"
            name="university_name"
            placeholder="ДГТУ"
            v-model="values.university_name"
        />
        <h2>Факультет</h2>
        <Uinput
            type="text"
            name="faculty"
            placeholder="ИиВТ"
            v-model="values.faculty"
        />

        <h2>Уровень знаний</h2>
        <label class="radio_div">
            <input type="radio" id="level_junior" value="junior" v-model="values.member_level" />
            Junior
        </label>
        <label class="radio_div">
            <input type="radio" id="level_middle" value="middle" v-model="values.member_level" />
            Middle
        </label>
        <label class="radio_div">
            <input type="radio" id="level_senior" value="senior" v-model="values.member_level" />
            Senior
        </label>

        <h2>Языки программирования</h2>
        <Uinput
            type="text"
            name="languages"
            placeholder="Python, JS.."
            v-model="lang"
            @change="dynamicSearch(lang)"
        />

        <h2>Номер телефона</h2>
        <Uinput
            type="tel"
            name = "phone"
            placeholder="+79"
            v-model="num"
            @change = "convertNumber(num)"
        />
        <h2>Справка об обучении</h2>
        <UFile
            type="file"
            placeholder=""
            v-model="files.file"
        />

        <h2>Почта</h2>
        <Uinput
            name="email"
            type="email"
            placeholder="example@mail.ru"
            v-model="values.email"
        />

        <h2>Телеграм (по желанию)</h2>
        <Uinput
            type="text"
            name="telegram"
            placeholder="https://t.me/user"
            v-model="values.tg_tag"
            :required=false
        />
        <h2>Github (по желанию)</h2>
        <Uinput
            type="text"
            name="git_hub_link"
            placeholder="https://github.com/..."
            v-model="values.git_hub_link"
            :required=false
        />

        <button id="foo" type="submit" class = "buttons btn">
            Добавить участника
        </button>
    </form>
</template>


<style scoped>
    .btn {
    color: var(--color-text);
    margin-top: 1em;
    margin-left:25%;
    margin-right:25%;
    font-size: 0.6em;
    font-weight: 200;
    }
    .btn:hover {
    box-shadow: 2px 2px 10px 0px rgba(171, 0, 234, 0.2);
    }
    .tree_row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 800px;
    }
    .tree_row > div {
        max-width: 350px;
        min-width: 200px;
    }

    h1 {
        font-size: 1em;
        text-align: center;
        margin: 1em;
        font-weight: 500;
    }
    
    h2{
        margin-top: 1.2em;
        font-size: 1em;
    }
    label {
        font-size: 0.5em;
        font-weight: 300;
        margin-left: 8px;
    }
    @media (min-width: 700px) {
    .btn {
        width: 400px;
    }
}

</style>