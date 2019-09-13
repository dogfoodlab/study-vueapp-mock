<template>
  <v-content>
    <v-container>

      <h1>Home</h1>

      <ul>
        <li>
          <router-link :to="{name:'layouts'}">Layouts</router-link>
        </li>
        <li>
          <router-link :to="{name:'vuetify'}">Vuetify</router-link>
        </li>
        <li>
          <router-link :to="{name:'about'}">About</router-link>
        </li>
      </ul>

    </v-container>
  </v-content>
</template>
