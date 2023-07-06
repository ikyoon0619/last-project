<template>
    <LoginForm :schema="formSchema"/>
</template>
  
  <script>
  import LoginForm from '../components/user/LoginForm.vue';
  import * as Yup from 'yup';

  export default {
    name: 'Login',
    components:{
      LoginForm
    },
    data: ()=>{
      const formSchema = {
        fields:[
          {label: 'ID',name: 'username', as: 'input', rules: Yup.string().required(),},
          {label: 'Password',name: 'password', as: 'input', type: 'password', rules: Yup.string().min(5).required(),},
        ]
      }
      return{
        formSchema,
      }
    },

    created() {
      if (this.loggedIn) {
        this.$router.push('/profile');
      }
    },
    methods: {
   
    }
  };
  </script>
  
  <style scoped>

  </style>