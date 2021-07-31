<template>
  <section>
    <h3><span>Mis Paneles </span>▶ {{ name }}</h3>
    <input
      type="text"
      placeholder="Añade una lista"
      v-model="listName"
      @keyup.enter="add"
    />
    <div class="container">
      <column
        v-for="(list, index) in boardList"
        :key="index"
        :listId="list.id"
        :name="list.name"
      ></column>
    </div>
  </section>
</template>

<script>
  import { mapState, mapActions, mapGetters } from "vuex";
  import Column from "@/components/Column";
  export default {
    name: "board-view",
    components: { Column },
    props: {
      id: String,
      name: String,
    },
    data() {
      return {
        listName: "",
      };
    },
    computed: {
      ...mapState(["fetchingData"]),
      ...mapGetters(["getListsByBoard"]),
      boardList() {
        return this.getListsByBoard(this.id);
      },
    },
    methods: {
      ...mapActions(["fetchLists", "addColumn"]),
      add() {
        this.addColumn({ board: this.id, name: this.listName });
        this.listName = "";
      },
    },

    created() {
      this.fetchLists({ board: this.id });
    },
  };
</script>

<style lang="scss" scoped>
  section {
    text-align: left;
  }
  h3 {
    color: #37474f;
    text-align: left;
    margin: 1.5rem;

    span {
      color: #546e7a;
    }
  }
  input {
    background-color: #607d8b;
    border: 0;
    border-radius: 3px;
    box-shadow: 0 0 0 0.5px rgba(49, 49, 93, 0.03),
      0 2px 5px 0 rgba(49, 49, 93, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
    color: #607d8b;
    font-size: 1.2rem;
    margin: 0 1rem;
    outline: 0;
    padding: 1rem;
    transition: all 600ms ease;
    &:active,
    &:focus {
      background-color: #fafafa;
    }
    &::placeholder {
      color: #fafafa;
    }
  }
</style>
