<template>
    <div class="gridcss">
        <div class="cardcss3">
            <img src="./icons/partners/rostelekom.png" alt="">
        </div>
        <div class="cardcss3">
            <img src="./icons/partners/specialvuz.png" alt="">
        </div>
        <div class="cardcss3">
            <img src="./icons/partners/centrinvest.svg" alt="">
        </div>
        <div class="cardcss3">
            <img src="./icons/partners/ttk.png" alt="">
        </div>
        <div class="cardcss3">
            <img src="./icons/partners/tinkoff.png" alt="">
        </div>
        <div class="cardcss3">
            <img src="./icons/partners/rubicon.png" alt="">
        </div>
        <div class="cardcss3">
            <img src="./icons/partners/vebpr.png" alt="">
        </div>
        <div class="cardcss3">
            <img src="./icons/partners/kaspersky.svg" alt="">
        </div>
        <div class="cardcss3">
            <img src="./icons/partners/axenix.png" alt="">
        </div>
        <div class="cardcss3">
            <img src="./icons/partners/codesecurity.png" alt="">
        </div>
        <div class="cardcss3">
            <img src="./icons/partners/ddosguard.png" alt="">
        </div>
        <div class="cardcss3">
            <img src="./icons/partners/infotecs.png" alt="">
        </div>

    </div>
</template>

<style>
    .cardcss3 {
        background: var(--cl-fiolet);
        border: 3px solid var(--cl-purple);
        border-radius: 20px;
        width: 320px;
        height: 110px;
        margin: 20px;
        font-size: 70px;
        display: flex;
        align-items: center;
        justify-content: space-around
    }

    .gridcss {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 768px) {
        .gridcss {grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 540px) {
        .gridcss {grid-template-columns: 1fr; }
    }

</style>