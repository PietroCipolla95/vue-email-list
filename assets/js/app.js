const { createApp } = Vue

  createApp({
    data() {
      return {
        list : [],        
        email : '',
      }
    },

    mounted() {

        for (let i = 0; i < 10; i++) {

            list = [],

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response.data.response);
                this.email = response.data.response;
                list.push(this.email)
                
            })
            
        }
        
                       
        console.log(list);

    }
  }).mount('#app')