<script setup>
import { reactive, ref } from 'vue';

    const login = reactive({
        email: "",
        password: ""
    })  
</script>

<template>
    <Header>
      
    </Header>
    <div class="cardregistr">

        <h1>Смена пароля</h1>
        <div class="logcss">
            <Uinput
                type="password"
                placeholder="Пароль"
                v-model="login.email"
            />
            <Uinput
                type="password"
                placeholder="Повторите пароль"
                v-model="login.password"
                class = "asd"
            />
        </div>
        
        <button class="buttons btn">Подтвердить</button>
    </div>
    <img src="../components/icons/101.png" alt="fon" class="imgf">
    <!-- <FooterFixed/> -->
</template>

<style scoped>

    .btn {
        color: var(--cl-color-text);
        min-width: 150px;
        font-size: 20px;
        margin-top: 1em;
    }


    h1 {
        font-size: 40px;
        font-weight: 500;
        margin: 100px 0 20px 0;
    }
    .cardregistr{
    /* фон под регистрация */
        font-size: 36px;
        box-sizing: border-box;
        max-width:600px;
        min-height: 500px;
        background: var(--cl-dark-blue);
        border: 1px solid var(--cl-border);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        padding: 5px;
        align-items: center;
        margin: 10vh auto;
        

    }

    .asd {
        margin-top: 20px;
    }
    .logcss {
        max-width: 550px;
        margin: 10px;
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

    @media (max-width: 560px) {
        h1 {
            font-size:20px;
        }        
    }
</style>