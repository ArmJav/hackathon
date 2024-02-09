<script setup>
    import HackSafety from "../components/HackSafytiCard.vue"
    import ThatCard from "../components/ThatCard.vue"
    import CardVTwo from "../components/CardVTwo.vue"
    import RoleInTeam from "../components/RoleInTeam.vue"
    import Partners from "../components/Partners.vue"
    import { ref } from 'vue'

    const items = ref([
        { message: 'Футболки факультета', path:"/src/components/icons/t-shirt.png" },
        { message: 'за победу в кейсе от факультета', path:"/src/components/icons/50000.png"},
        { message: 'Блокноты и ручки', path:"/src/components/icons/pansel.png"},
        { message: 'Флешки факультета', path:"/src/components/icons/USB.png"},
        { message: 'Подарки от партнеров', path:"/src/components/icons/surprise.png"},
        
    ])

    const items_safe = ref ([
        {heading:"Хакатон",text:"Хакатон по информационной безопасности для обучающихся учреждений высшего и среднего профессионального образования."},
        {heading:"Характер",text:"На реализацию идеи дается 48 часов, придется постараться, чтобы уложиться."},
        {heading:"Борьба",text:"Каждый участник сможет проявить себя, показать на что он способен и побороться за главный приз."},
        {heading:"Командная работа",text:"Правильное распределение времени, совместная работа. взаимопомощь, работа одним целым, поддержка друг друга и целеустремленность  - вот что поможет одержать победу и дойти до конца."}

    ])

    const items_whatcard = ref ([
        {heading:"Деньги за победу в кейсе от партнеров",text:"Решишь с командой кейс, поборешься за первое место и получишь денежное вознаграждение"},
        {heading:"Опыт",text:"Разработаешь полноценный проект, который войдет в твое портфолио и точно поможет в трудоустройстве"},
        {heading:"Трудоустройство",text:"Продемонстрировав свой проект, каждый участник может быть приглашен на стажировку или работу в крупную кампанию от партнеров"},
        {heading:"Коммуникация",text:"Поработаешь в команде, найдешь новые знакомства, весело проведешь время"},
        {heading:"Приятные бонусы",text:"За участие в мероприятие каждый участник получит диплом об участии, а также призы от партнеров"}

    ])


</script>

<template>
    <img className="leftblik" src="../components/icons/IconBlick.svg" alt="украшение">
    <img className="rightblik" src="../components/icons/IconBlick.svg" alt="украшение">
    <img className="sideplate1" src="../components/icons/sidePlate_1.svg" alt="украшение">
    <img className="sideplate2" src="../components/icons/sidePlate_2.svg" alt="украшение">
    <Header>
        <template #>
            <a href="/login">Войти</a>
        </template>
    </Header>
    <div className="headerlogo">
        <img className="main-img" src="../components/icons/IconHackaton.svg" alt="logo">
        <h1>HACKATHON 2024</h1>
        <img className="background-img" src="../components/icons/forstudtext.svg" alt=""> 
        <p>Современный хакатон с реальными задачами от партнеров направленными на кибербезопасность. Уверен в своих силах
        и не боишься сложностей, тогда смело переходи к регистрации.</p>

        <button class="buttons" @click="$router.push('/registration')">Зарегистрироваться</button>
        <div></div>    
        <h1 style="margin-top: 2em;">ПРИЗОВОЙ ФОНД</h1>
        <div className="prizediv">
            <div v-for="(item, index) in items" :key="index" className="listpriz">
            <Card>
                <img :src='item.path' alt="image" className = "allimage">
                <template #text>
                    {{ item.message }}
                </template>
            </Card>
            </div>

        </div>
        <h1 style="margin-top: 1.3em;">HackSafety - это:</h1>

        <div className="hacksafetycard">
            <div v-for="(item, index) in items_safe" :key="index" className="list_safety">
                <HackSafety>
                    <template #heading>{{ item.heading }}</template>
                    <template #text>{{ item.text }}</template>
                </HackSafety>
            </div>
        </div>
        <h1 style="margin-top: 2em;">ЧТО ПОЛУЧИШЬ ?</h1>

        <div className="whatcard">
            <div v-for="(item, index) in items_whatcard" :key="index">
                <ThatCard>
                    <template #index>{{ index + 1 }}</template>
                    <template #heading>{{ item.heading }}</template>
                    <template #text>{{ item.text }}</template>
                </ThatCard>
            </div>
        </div>

        <h1 style="margin-top: 1em;">Расписание</h1>
        <div className ="schedule">
            <div>
                <img src="../components/icons/heart 1.png" alt="image" className="heart_img">
                <img src="../components/icons/hourglass.png" alt="image" className="hourglass_img">
                <CardVTwo>
                    <template #heading>
                        Регистрация участников
                    </template>
                    <template #text>01.02.24 - 01.03.24</template>
                </CardVTwo>
                
            </div>
            <div>
                <img src="../components/icons/fire.png" alt="image" className="fire_img">
                <CardVTwo>
                    <template #heading>
                        Решение кейсов
                    </template>
                <template #text>01.02.24 - 01.03.24</template>
                </CardVTwo>
                
            </div>
           <div>
                <img src="../components/icons/cup.png" alt="image" className="cup_img">
                <CardVTwo>
                    <template #heading>
                        Торжественное закрытие Хакатона
                    </template>
                    <template #text>01.02.24 - 01.03.24</template>
                </CardVTwo>
                
           </div>
            
        </div>
        <h1 style="margin-top: 2em;">РОЛИ В КОМАНДЕ</h1>
        <div style="margin-top: 1.8em;"><RoleInTeam></RoleInTeam></div>
        <h1 style="margin-top: 1.3em; margin-bottom: 0.5em">ПАРТНЕРЫ</h1>
        <Partners></Partners>
       
    </div>
    <Footer/>
</template>

<style >
    @import "../assets/image.css";
    .schedule >div>img{
        position: absolute;
    }
    .schedule {
        position: relative;
        margin-top: 1em;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        max-width: 1580px;
        z-index: 2;
    }

    .hacksafetycard{
        max-width: 1500px;
        margin-top: 2em;
        display: grid;
        grid-gap: 0.5em;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: dense;
        grid-template-rows: 1fr;

    }
    .list_safety {
        display: flex;
        flex-direction: column;
    }

    .leftblik {
        position: absolute;
        width: 30%;
        height: 30%;
        left: -20%;
        top: 50%;
        background: var(--cl-purple);
        filter: blur(250px);
        /* blur___2 */

    }
    .rightblik {
        position: absolute;
        width: 20%;
        height: 20%;
        right: 0%;
        background: var(--cl-purple);
        filter: blur(250px);
        z-index: -1;
        /* blur___2 */

    }

    .sideplate1, .sideplate2 {
        position: absolute;
        top:calc(100vh * 4);
        z-index: -1;
    }
    .sideplate1 {
        left: -10px;
    }
    .sideplate2 {
        right: 0px;
    }

    .whatcard {
        display: flex;
        flex-wrap: wrap;
        margin-top: 1   em;
    }

    .prizediv {
        display: flex;
        max-width: 1440px;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 1.3em;
    }

    .listpriz {
        margin: 10px;
    }

    .headerlogo{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-content: center;
            padding: 5px;
            align-items: center;
            font-size: 70px;
            max-width: 1280px;
            transition: font-size 0.5s ease-in-out;
            box-sizing: border-box;
            margin: 10vh auto;
        }

    .headerlogo > button {
        width: 600px;
        height: 100px;
        margin-top: 4em;
        font-size: 0.5em;
    }    
    
    .headerlogo > h1 {
            /* HACKATHON 2024 */
            color: var(--color-text);
            font-weight: 700;
            font-size: 1em;
            text-align: center;
    }
    .headerlogo > p {
            margin-top: 4em;
            font-weight: 300;
            font-size: 0.4em;
            text-align: center;
    }
    .background-img {
        text-align: center;
    }
    @media (min-width: 1440px) {
        .background-img {
        position: sticky;
        margin-left: 800px;
        margin-top: -42px;
        transform: rotate(-5deg);
        transition: margin-left 0.5s ease, transform 0.6s ease-in-out;
        }
        .whatcard {width: 1540px;}
        .prizediv {width: 1500px;}
        .schedule {flex-wrap: nowrap;}
        
    }
    @media (max-width: 1040px) {
         .prizediv {width: 1040px;}
         .sideplate1, .sideplate2 { display: none;} 
         .whatcard {justify-content: center}
    }

    @media (max-width: 540px) {
        .allimage{
            max-width: 270px;
            max-height: 135px;
        }
        .headerlogo {
            font-size: 40px;
        }
        .hacksafetycard{
            grid-template-columns: 1fr;
            max-width: 540px;
        }
        .schedule,.prizediv {width: 540px;}
        .headerlogo > button {
            width: 300px;
            height: 50px;
            margin-top: 4em;
            font-size: 0.5em;
            border: 1px solid var(--cl-purple);
        }
        .background-img {
            width: 190px;
            height: 32px;
            transition: width 0.5s ease,
        }
        .main-img {
            width: 157px;
            height: 158px;
            padding-left: auto;
            padding-right: auto;
        }

    }
    
    
</style>