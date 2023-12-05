<template>
    <div class="modal-background">
        <div class="modal-active">
            <div @click="modalClose" class="modal-close">
                <img src="src/assets/cross.png" />
            </div>
            <div @click.stop class="modal-window">
                <div>
                    <h3>Закажите доставку прямо сейчас!</h3>
                </div>
                <div>
                    Укажите и подтвердите свои данные, и наш оператор свяжется с Вами
                </div>
                <form>
                    <div class="order-info-inputs">
                        <KeyboardInput 
                            required
                            :type="'text'"
                            :placeholder="'Как к Вам обращаться?'" 
                        />
                        <KeyboardInput
                            required 
                            :type="'text'"
                            :placeholder="'Адрес доставки'" 
                        />
                        <KeyboardInput 
                            required
                            :type="'email'"
                            :placeholder="'Электронная почта'" 
                        />
                        <KeyboardInput 
                            required
                            :type="'tel'"
                            :placeholder="'Номер телефона'" 
                        />
                        <CustomButton @submit="makeOrder" class="inverse-button-color" type="submit">
                            Заказать доставку
                        </CustomButton>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import KeyboardInput from "@/components/ui/KeyboardInput.vue";
import CustomButton from "./ui/CustomButton.vue";

export default {
    components: {
        KeyboardInput,
        CustomButton
    },

    methods: {
        modalClose() {
            document.querySelector(".modal-background").style.display = "none";
        },

        makeOrder() {
            this.$emit("makeOrder");
        }
    }
}

</script>

<style>
.modal-background {
    display: none;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10;
}

.modal-active {
    position: absolute;
    width: 450px;
    height: 400px;
    top: calc(50% - 200px);
    left: calc(50% - 225px);
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    cursor: default;
    padding: 20px 20px;
}

.modal-close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 30px;
    height: 30px;
    cursor: pointer;
}

.modal-close img {
    margin: 3px;
    width: 24px;
    height: 24px;
}

.modal-window {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
}

.order-info-inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
}
</style>