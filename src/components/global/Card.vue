<script setup>

</script>

<template>
   
    <div className="cardcss">
        <div  className="imga">
            <slot></slot>
        </div>
        
        <h3>
            <slot name="text"></slot>
        </h3>
    </div>
</template>

<style scoped>

.cardcss {
    display: flex;
    justify-content: center; 
    align-content: space-between;
    background: var(--cl-dark-blue);
    border: 3px solid var(--cl-purple);
    border-radius: 20px;
    width: 380px;
    height: 200px;
    flex-wrap: wrap;
    margin: 30px;
}
.imga {
    /* min-height: 180px; */
    padding-top: 8px;
}
.cardcss > h3 {
    position: sticky;
    font-size: 24px;
    font-weight: 900;
    padding-left: 0.5em;
    margin-top: -3.8em;
    text-align: center;
    text-shadow: 3px 3px 10px black
}
@media (max-width:500px) {
    .cardcss {
        width: 290px;
        height: 150px;
    }
}
</style>