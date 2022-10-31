<template>
<v-app>
   <v-app-bar app>
   <v-toolbar-title>Nooks</v-toolbar-title>

   <v-text-field
        v-model="searchText"
        @click:clear="searchText = ''"
        placeholder="Search"
        class="ml-8"
        style="max-width: 350px;"
        prepend-inner-icon="mdi-magnify"
        clearable
        outlined
        rounded
        dense
        hide-details
      />
    <v-spacer/>
   <v-btn> Create Nooks </v-btn>

   </v-app-bar>
    <v-main>
    <slot/>
</v-main>
</v-app>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>


