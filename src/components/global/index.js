import Card from './Card.vue';
import Footer from './Footer.vue';
import Uinput from './Uinput.vue';
import UFile from './UFile.vue';
import FooterFixed from './FooterFixed.vue';
import Header from './Header.vue'
import InputMask from 'primevue/inputmask';
const components = [
    {name: 'Card', component: Card},
    {name: 'Footer', component: Footer},
    {name: 'Header', component: Header},
    {name: 'FooterFixed', component: FooterFixed},
    {name: 'Uinput', component: Uinput},
    {name: 'UFile', component: UFile},
    {name: 'Inputmask', component: InputMask}
]


export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component)
        })
    }
}