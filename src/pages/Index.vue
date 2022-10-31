<template>
  <Layout>
  <v-container>
  <v-row>
     <v-col sm="6" offset-sm="3">
  <v-tabs v-model="tab" grow>
    <v-tab>All Nooks</v-tab>
    <v-tab>Public Nooks</v-tab>
    <v-tab>Private Nooks</v-tab>
  </v-tabs>



  <v-row class="justify-space-around">
<v-card
v-for= "edge in $page.nooks.edges" :key = "edge.node.id"
    width="300"
    class="mt-5"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{edge.node.Name}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{edge.node.Description}}
      Number 10
    </v-card-subtitle>

    

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        More Info
      </v-btn>
    </v-card-actions>
  </v-card>
</v-row>
  
  </v-col>
  </v-row>
  </v-container>

  </Layout>
</template>

<page-query>
query{
  nooks: allNook{
    edges{
      node{
        id,
        Name,
        Description,
      
        
        
    
    
        
      }
    }
  }
  
  }

</page-query>
<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
data() {
    return {
      tab: 0,
      Nooks : []
      
    }
},
mounted(){

  this.Nooks = this.$page.Nooks.edges
},
watch: {
    tab(val) {
      if (this.tab === 0) {
        this.showAllEvents()
      } else {
        this.showEventsByType(val)
      }
    }
  },
  methods: {
    showAllEvents() {
      this.Nooks = this.$page.Nooks.edges
      console.log('all')
    },
    showEventsByType(val) {
      this.Nooks = this.$page.Nooks.edges.filter((edge) => {
        return edge.node.category  === val
      })
      console.log('type')
      }
    }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
