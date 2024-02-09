<template>
    <div className="cardcss">
        <div className="headn">
            <h4><slot name="index"></slot></h4>
            <div></div>
        </div>
        <h5>
            <slot name="heading"></slot>
        </h5>
        <p>
            <slot name="text"></slot>
        </p>
    </div>
</template>

<style scoped>
    .cardcss {
        max-width: 425px;
        max-height: 270px;
        margin: 0.5em;
    }

    h5 {
        font-size: 0.5em;
        color: var(--cl-blue);
        font-weight: 700;
    }
    
    h4 {
        font-weight: 700;
    }
    p {
        font-weight: 300;
        font-size: 20px;
        
    }
    

    .headn {
        display: grid;
        grid-template-columns:1fr 10fr ;
        align-items: center;
        font-size: 0.7em;
    }


    .headn > div {
        border-bottom: solid 3px var(--cl-purple);
        margin-right: 20px;
        /* padding-right: 10px; */
    }

</style>