import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'
import router from './router'
import { apolloClient } from './utils/ApolloClient'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.provide(DefaultApolloClient, apolloClient)
app.mount('#app')
