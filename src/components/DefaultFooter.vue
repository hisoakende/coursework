<template>
    <footer class="footer">
        <div class="footer-wrapper">
            <div class="footer-contacts">
                <h6>Контакты</h6>
                <ul>
                    <li>Дмитрий Александрович</li>
                    <li>+70000000000</li>
                    <li>Москва, Мичуринский проспект 12к2</li>
                </ul>
            </div>
            <div class="footer-social-networks">
                <h6>Социальные сети</h6>
                <ul>
                    <li>Вконтакте</li>
                    <li>Телеграм</li>
                </ul>
            </div>
            <div class="footer-developer">
                <h6>Разработчик</h6>
                <ul>
                    <li>hisoakende</li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<script></script>
<style>
.footer {
    margin-top: 30px;
    min-height: 250px;
    background-color: #383838;
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
}

.footer-wrapper {
    padding: 30px 10px;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    max-width: 1200px;
    color: #F6F6F6;
}

.footer-wrapper h6 {
    display: block;
    border-bottom: 1px solid #F6F6F6;
    padding: 0 0 20px 0;
    font-size: 1.2em;
}

ul {
    list-style-type: none;
}

.footer-wrapper li {
    margin-top: 20px;
}

</style>