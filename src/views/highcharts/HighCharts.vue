<template>
  <v-container>

    <v-app-bar
      app
      clipped-left
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Highcharts</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>

        <v-list-item
          :to="{name:'highcharts'}"
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          :to="{name:'highcharts/line-basic'}"
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-chart-line</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Basic line</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          :to="{name:'highcharts/area-basic'}"
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-chart-areaspline-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Basic area</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          :to="{name:'highcharts/bar-basic'}"
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-chart-bar</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Basic bar</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          :to="{name:'highcharts/pie-basic'}"
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-chart-pie</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Basic pie</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list-item
          :to="{name:'home'}"
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Exit</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list-item
          href="https://github.com/highcharts/highcharts/blob/master/license.txt"
          target="_blank"
        >
          <v-list-item-action>
            <v-icon>mdi-exclamation</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>See Highcharts license.</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

      </v-list>

    </v-navigation-drawer>

    <v-content>
      <router-view />
    </v-content>

    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>

  </v-container>
</template>

<script>
export default {
  props: {
    source: String
  },
  data () {
    return {
      drawer: null
    }
  }
}
</script>
