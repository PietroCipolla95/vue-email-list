const { createApp } = Vue

  createApp({
    data() {
      return {
        list : [],        
      }
    },

    mounted() {

        for (let i = 0; i < 10; i++) {

            list = [];
            email = '';

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {

                console.log(response.data.response);
                this.list.push(response.data.response)
                
            })

            //perchè questo non funziona??
            /* axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {

                console.log(response.data.response);
                let email = response.data.response
                console.log(email);
                list.push(response.data.response)
                
            }) */
            
        }
        
                       
        console.log(list);

    }
  }).mount('#app')