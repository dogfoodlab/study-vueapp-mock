<template>
  <v-container fluid>
    <v-app-bar app clipped-left color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Miscellaneous</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item :to="{ name: 'misc' }" exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{ name: 'misc/range-slider-1' }" exact>
          <v-list-item-action>
            <v-icon>mdi-ray-start-end</v-icon>
            <!-- <v-icon>mdi-arrow-left-right</v-icon> -->
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Range slider 1</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{ name: 'misc/range-slider-2' }" exact>
          <v-list-item-action>
            <v-icon>mdi-ray-start-end</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Range slider 2</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{ name: 'misc/range-slider-3' }" exact>
          <v-list-item-action>
            <v-icon>mdi-ray-start-end</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Range slider 3</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list-item :to="{ name: 'home' }" exact>
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Exit</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  props: {
    source: String
  },
  data() {
    return {
      drawer: null
    }
  }
}
</script>
