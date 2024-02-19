<script setup>

</script>


<template>
    <header>
        <nav>
            <div @click="$router.push('/')">
                <img src="../icons/header/logo.png" alt="">
            </div>
            <slot></slot>
        </nav>
    </header>

</template>

<style scoped>

    img {
        min-width: 150px;
        max-width: 20vw
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    header {
        width: 99.7vw;
        position: fixed;
        top:0;
        left: 0;
        /* background-color: var(--color-background); */
        padding: 10px 5vw 0 5vw;
    }

 

    
</style>