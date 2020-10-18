<template>
  <v-container>
    <v-app-bar app clipped-left color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>amCharts</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item :to="{ name: 'amcharts' }" exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{ name: 'amcharts/line-graph' }" exact>
          <v-list-item-action>
            <v-icon>mdi-chart-line</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Line Graph</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{ name: 'amcharts/stacked-area' }" exact>
          <v-list-item-action>
            <v-icon>mdi-chart-areaspline-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Stacked Area</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{ name: 'amcharts/simple-column-chart' }" exact>
          <v-list-item-action>
            <v-icon>mdi-chart-bar</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Simple Column Chart</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{ name: 'amcharts/simple-pie-chart' }" exact>
          <v-list-item-action>
            <v-icon>mdi-chart-pie</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Simple Pie Chart</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{ name: 'amcharts/vertically-stacked-axes-chart' }" exact>
          <v-list-item-action>
            <v-icon>mdi-finance</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Vertically stacked axes chart</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{ name: 'amcharts/map-bubbles' }" exact>
          <v-list-item-action>
            <v-icon>mdi-map</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Map with Bubbles</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{ name: 'amcharts/transport-metro-map' }" exact>
          <v-list-item-action>
            <v-icon>mdi-transit-connection-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Transport metro map</v-list-item-title>
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

        <v-list-item
          href="https://github.com/amcharts/amcharts4/blob/master/dist/script/LICENSE"
          target="_blank"
        >
          <v-list-item-action>
            <v-icon>mdi-exclamation</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>See amCharts license.</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider />
      </v-list>
    </v-navigation-drawer>

    <router-view />

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
