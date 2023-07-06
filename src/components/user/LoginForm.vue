<script>
import {ref, reactive, computed} from "vue";
import {Field, Form, ErrorMessage } from 'vee-validate';
import router from '../../router'
import store from '../../store';
import User from "../../models/user";

export default {
  components:{
    Form,
    Field,
    ErrorMessage
  },
  props:{
    schema:{
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      loading: false,
      message: ''
    };
  },
  methods:{
   handleLogin(values){
    this.loading = false;
    console.log("value", values)
    store.dispatch('auth/login', values).then(
        ()=>{
          router.push('/profile')
        },
        error => {
          this.loading = false;
          this.message =
          (error.response && error.response.data) ||
                  error.message ||
                  error.toString();
        }
      );
    } 
  }
}




</script>
<template>
  <div class="col-md-12">
      <div class="card card-container">
        <img
          id="profile-img"
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          class="profile-img-card"
        />

        <Form  @submit="handleLogin">
          <div class="form-group"
            v-for="{as, name, label, children, ...attrs} in schema.fields" :key="name">
            <label :for="name">{{ label }}</label>
            <Field class="form-control" :as="as" :id="name" :name="name" v-bind="attrs">
              <template v-if="children && children.length">
                <component v-for="({ tag, text, ...childAttrs }, idx) in children"
                  :key="idx"
                  :is="tag"
                  v-bind="childAttrs"
                >
                  {{ text }}
                </component>
              </template>
            </Field>
            <ErrorMessage :name="name" />
          </div>
          <button class="btn btn-primary btn-block" :disabled="loading">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span>Login</span>
          </button>
        </Form>
      </div>
    </div>
</template>
  
<style lang="scss" scoped>
@import "../../scss/main.scss";

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