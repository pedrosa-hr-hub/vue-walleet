<template>
     <div>
          <Login_Form/>
          <Create_User/>
     </div>
</template>

<script>

     import Login_Form from "../components/login_form.vue";
     import Create_User from "../components/create_user_login.vue";

export default {
     name: "Login",
     components:{
          Login_Form,
          Create_User
     }

}
</script>

<style>

</style>