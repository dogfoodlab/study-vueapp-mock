<template>
  <v-container>
    <v-content>

      <h1>Home</h1>

      <ul>
        <li>Layouts
          <ul>
            <li>
              <router-link :to="{name:'layouts/baseline'}">Baseline</router-link>
            </li>
            <li>
              <router-link :to="{name:'layouts/baseline-flipped'}">Baseline Flipped</router-link>
            </li>
            <li>
              <router-link :to="{name:'layouts/centered'}">Centered</router-link>
            </li>
            <li>
              <router-link :to="{name:'layouts/complex'}">Complex</router-link>
            </li>
            <li>
              <router-link :to="{name:'layouts/dark'}">Dark</router-link>
            </li>
            <li>
              <router-link :to="{name:'layouts/google-contacts'}">Google Contacts</router-link>
            </li>
            <li>
              <router-link :to="{name:'layouts/google-keep'}">Google Keep</router-link>
            </li>
            <li>
              <router-link :to="{name:'layouts/google-youtube'}">Google Youtube</router-link>
            </li>
            <li>
              <router-link :to="{name:'layouts/sandbox'}">Sandbox</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link :to="{name:'i18n'}">i18n</router-link>
        </li>
        <li>
          <router-link :to="{name:'vuetify'}">Vuetify</router-link>
        </li>
        <li>
          <router-link :to="{name:'about'}">About</router-link>
        </li>
      </ul>

    </v-content>
  </v-container>
</template>
