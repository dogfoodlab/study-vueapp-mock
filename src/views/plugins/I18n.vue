<template>
  <v-container>
    <v-content>

      <h1>i18n</h1>

      <v-card max-width="300">
        <v-card-title>{{ this.$i18n.locale }}</v-card-title>
        <v-card-text>{{ $t('message') }}</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            text
            @click="setLocale('en')"
          >{{ $t('lang.en') }}</v-btn>
          <v-btn
            text
            @click="setLocale('ja')"
          >{{ $t('lang.ja') }}</v-btn>
        </v-card-actions>
      </v-card>

    </v-content>
  </v-container>
</template>

<script>
export default {
  methods: {
    setLocale (locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>
