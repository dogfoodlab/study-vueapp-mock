<template>
  <v-container>
    <v-content>
      <h1>Home</h1>

      <ul>
        <li>
          Layouts
          <ul>
            <li>
              <router-link :to="{ name: 'layouts/baseline' }">Baseline</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'layouts/baseline-flipped' }">Baseline Flipped</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'layouts/centered' }">Centered</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'layouts/complex' }">Complex</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'layouts/dark' }">Dark</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'layouts/google-contacts' }">Google Contacts</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'layouts/google-keep' }">Google Keep</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'layouts/google-youtube' }">Google Youtube</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'layouts/sandbox' }">Sandbox</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link :to="{ name: 'highcharts' }">Highcharts</router-link>
          <ul>
            <li>
              <router-link :to="{ name: 'highcharts/line-basic' }">Basic line</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'highcharts/area-basic' }">Basic area</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'highcharts/bar-basic' }">Basic bar</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'highcharts/pie-basic' }">Basic pie</router-link>
            </li>
          </ul>
        </li>
        <li>
          Plugins
          <ul>
            <li>
              <router-link :to="{ name: 'plugins/i18n' }">i18n</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'plugins/vuetify' }">Vuetify</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link :to="{ name: 'about' }">About</router-link>
        </li>
      </ul>
    </v-content>
  </v-container>
</template>
