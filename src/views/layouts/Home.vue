<template>
  <v-content>
    <v-container>

      <h1>Pre-made layouts</h1>
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

      <router-view />

    </v-container>
  </v-content>
</template>
