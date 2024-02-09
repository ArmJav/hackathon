<script></script>
<template>
    <div className="container">
        <div className="flexi">
            <div className="text_block">
                <h1>UX/UI DESIGNER</h1>
                <p>Отвечает за создание дизайна пользовательского интерфейса и пользовательского опыта для программного обеспечения. Он работает в тесном сотрудничестве с программистами, чтобы обеспечить удобство использования и привлекательный внешний вид разрабатываемого продукта.</p>
            </div>
            <img src="./icons/designer.png" alt="designer">
        </div>

        <div className="flexi">
            <img src="./icons/front.png" alt="front" >
            <div className="text_block_right">
                <h1>FRONTEND DEVELOPER</h1>
                <p>Занимается созданием интерфейсов пользовательского веб-приложения или сайта. Он отвечает за то, чтобы веб-приложение было доступно и удобно использовать для пользователей. Также фронтенд-разработчики работают в тесном взаимодействии с дизайнерами и бэкенд-разработчиками, чтобы обеспечить полноценную работу веб-приложения или сайта.</p>
            </div>
        </div>

        <div className="flexi">
            <div className="text_block">
                <h1>BACKEND DEVELOPER</h1>
                <p>Отвечает за создание и поддержку серверной части веб-приложений.
Он работает с базами данных, серверами, языками программирования и другими технологиями, чтобы обеспечить функциональность и безопасность веб-сервиса. Бэкенд-разработчик создает серверные приложения, управляет данными, обеспечивает взаимодействие с клиентской частью и обрабатывает запросы от пользователей. Он также занимается оптимизацией производительности, масштабируемостью и безопасностью приложения.</p>
            </div>
            <img src="./icons/backend.png" alt="backend">
        </div>

        <div className="flexi">
            <img src="./icons/pm.png" alt="pm">
            <div className="text_block_right">
                <h1>PRODUCT MANAGER</h1>
                <p>Отвечает за разработку и управление продуктом или сервисом.  В его обязанности входит полный анализ разрабатываемого проекта, заполнение паспорта проекта, а также продвижение проекта.
Product manager является связующим звеном между командой разработки и бизнес-задачами. Он представляет интересы пользователей и бизнеса, чтобы обеспечить создание продукта, который будет успешным на рынке.</p>
            </div>
        </div>
    </div>

</template>


<style scoped>

    .container{
        font-size: 70px;
        display: grid;
    }

    img {
        margin: 20px;
        
    }
    .text_block, .text_block_right {
        max-width: 900px;
    }

    .text_block_right {
        text-align: right;
    }
    
    .flexi{
        display: flex;
        max-width: 1400px;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    h1 {
        color:var(--cl-grey);
        font-weight: 700;
        font-size: 1em;
    }

    p {
        font-size: 0.28em;
        font-weight: 300;
    }

    @media (max-width: 1040px) {
        img {
            display: none;
        }

        .container{
            font-size: 40px;
 
        }
        .text_block_right {
            text-align: left;
        }
    }
</style>