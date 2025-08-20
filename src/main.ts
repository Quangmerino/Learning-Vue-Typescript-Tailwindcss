import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/routes'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import {localize} from "@vee-validate/i18n";
import vi from '@vee-validate/i18n/dist/locale/vi.json'
import elementPlusVi from 'element-plus/es/locale/lang/vi';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import '@/assets/main.css'
import { configure, defineRule, ErrorMessage, Field, Form } from 'vee-validate'
import {required, email, min, max} from "@vee-validate/rules";

configure({
    generateMessage: localize({
        vi,
    }),
})

dayjs.locale('elementPlusVi');

const app = createApp(App)

localize('vi');
app.use(ElementPlus, {
    locale: elementPlusVi
});
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);
defineRule('phone', (value: string) => {
    if (!value || value === '') {
        return true;
    }
    const phoneRegex = /^(03|05|07|08|09)\d{8}$/;
    return phoneRegex.test(value)
        ? true
        : 'Số điện thoại không hợp lệ';
});

app.component('Field', Field);
app.component('Form', Form);
app.component('ErrorMessage', ErrorMessage);
app.use(createPinia())
app.use(router)

app.mount('#app')
