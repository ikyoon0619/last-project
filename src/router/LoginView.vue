<template>
    <div class="col-md-12">
      <div class="card card-container">
        <img
          id="profile-img"
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          class="profile-img-card"
        />
        <Form name="form" @submit="handleLogin" :rules="isRequired">
          <div class="form-group">
            <label for="username">ID</label>
            <Field
              v-model="user.username"
              type="text"
              class="form-control"
              name="username"
            />
         
          <ErrorMessage name="username" class="alert alert-danger"/>

          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <Field
              v-model="user.password"
              type="password"
              class="form-control"
              name="password"
            />
           
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block" :disabled="loading">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span>Login</span>
            </button>
          </div>
          <div class="form-group">
            <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import {Form, Field, ErrorMessage} from 'vee-validate';
  import User from '../models/user';
  
  export default {
    name: 'Login',
    components:{
      Form,
      Field,
      ErrorMessage
    },
    data() {
      return {
        user: new User('',''),
        loading: false,
        message: '',
        isValidated: false,
        validationSchema:{
          username: function(value){
            if(!value && value.trim()) {
              return true;
            }
            return 'This is required';

          },
          
        }
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      }
    },
    created() {
      if (this.loggedIn) {
        this.$router.push('/profile');
      }
    },
    methods: {
      handleLogin() {
        this.loading = false;
        this.$store.dispatch('auth/login', this.user).then(
          () => {
            this.$router.push('/profile');
          },
          error => {
            this.loading = false;
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
        
      },
      isRequired(value){
        if(value && value.trim()) return true;

        return 'This is required'
      }
    }
  };
  </script>
  
  <style scoped>
  label {
    display: block;
    margin-top: 10px;
  }
  
  .card-container.card {
    max-width: 350px !important;
    padding: 40px 40px;
  }
  
  .card {
    background-color: #f7f7f7;
    padding: 20px 25px 30px;
    margin: 0 auto 25px;
    margin-top: 50px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  }
  
  .profile-img-card {
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
  }
  .btn-block{
    width: 100%;
    padding: 7px 0;
    margin-top: 5px;
  }

  </style>