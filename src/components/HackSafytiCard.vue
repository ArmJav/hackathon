<template>
    <div className="cardcss">
        <h3>
            <slot name="heading"></slot>
        </h3>
        <p>
            <slot name="text"></slot>
        </p>
    </div>
</template>


<style scoped>
    .cardcss {
        background: var(--cl-grey);
        color: var(--color-text);
        font-weight: 300;
        font-size: 30px;
        border-radius: 20px;
        padding: 0.8em;
        max-width: 700px;
        flex: 1;
        /* object-fit: cover; */
        max-height: 100%;
    }

    .cardcss > h3 {
        color: var(--cl-blue);
        font-weight: 500;
        font-size: 36px;
    }

    @media (max-width:450px) {
    .cardcss {
        font-size: 16px;
    }

}
</style>