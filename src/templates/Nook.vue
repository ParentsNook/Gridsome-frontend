<template>
<layout>
    <h1> {{$page.nook.Name}} </h1>
    </layout>
</template>

<page-query>
query($id: ID!){
nook (id:$id){
    Name,
   
  }
}


</page-query>

<script>
export default {
  metaInfo() {
    return {
      Name: this.$page.nook.name
    }
  }
}
</script>