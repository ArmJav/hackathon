<script setup>

</script>

<template>
   
    <div className="cardcss">
        <h2>
            <slot name="heading"></slot>
        </h2>
        
        <h3>
            <slot name="text"></slot>
        </h3>
    </div>
</template>

<style scoped>

.cardcss {
    display: grid;
    grid-template-rows: 2fr 1fr;
    background: var(--cl-fiolet);
    border: 3px solid var(--cl-purple);
    border-radius: 20px;
    width: 380px;
    height: 200px;
    flex-wrap: wrap;
    margin: 40px;
    font-size: 70px;
    
}
h2 {
    color: var(--cl-blue);
    font-size: 0.45em;
    font-weight: 500;
    text-align: center;
    margin-top: 10px;
    
}
.cardcss > h3 {
    max-width: 380px;
    font-size: 0.5em;
    font-weight: 500;
    color: white;
    padding-left: 10px;

    text-align: center;
    text-shadow: 1px 1px 10px black
}

@media (max-width:450px) {
    .cardcss {
        font-size: 50px;
        width: 290px;
        height: 150px;
    }
    
}
</style>