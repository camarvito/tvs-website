import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
    breakpoints: {
        phone: 600,
        tabPort: 900,
        tabLand: 1200,
        bigScreens: Infinity
    }
})
