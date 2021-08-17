const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name:'',
      fullname:''
    };
  },
  methods: {
    confirmName(){
      this.fullname = this.name;
    },
    add(num){
      this.counter = this.counter + num;
    },
    redue(num){
      this.counter = this.counter - num;
    },
    getName(event, lastname){
      this.name = event.target.value + lastname;
    }
  },
});

app.mount('#events');
