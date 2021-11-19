<script>
export default {
  props: ['users'],

  data() {
    return {
      list: this.users,
      sortProperty: 'name',
      sortDirection: 1,
      filterTerm: ''
    }
  },

  methods: {
    sort (ev, property){

      ev.preventDefault();

      this.sortProperty = property;

      if (this.sortDirection === 1){
        this.sortDirection = -1;
      }else {
        this.sortDirection = 1;
      }
    }
  }


};
</script>
<template>
  <div>
  <div class="well">
      <input type="text" class="form-control" placeholder="Filtrar a lista a baixo" v-model="filterTerm">
  </div>
     <table class="table table-striped">
        <thead>
            <tr>
                <th><a href="#" @click="sort($event, 'name')">Nome</a></th>
                <th><a href="#" @click="sort($event, 'email')">E-mail</a></th>
            </tr>
        </thead>
        <tbody> 
              <tr v-for="u in list">
                <td>{{ u.name }}</td>
                <td>{{ u.email }}</td>
              </tr>
        </tbody>
    </table> 
  </div>
</template>
<style scope=""></style>
