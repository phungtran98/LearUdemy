const app = Vue.createApp({
  data() {
    return { 
      getinputName: "",
      goals: []
    };
  },
  methods: {
    addGoals(){
      this.goals.push(this.getinputName);
    }
  },
});

app.mount('#user-goals');
