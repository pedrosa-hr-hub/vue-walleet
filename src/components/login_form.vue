<template>
       <div class="container mt-5">
          <form action="/home">
               <div class="card">
                    <div class="card-body">
                         <label for="email">E-mail:</label>
                         <input type="email" class="form-control" name="email" placeholder="name@gmail.com">
                         <label for="password" class="mt-2">Senha:</label>
                         <input type="password" class="form-control" name="password" >
                         <button type="submit" class="btn btn-success mt-2">Entrar</button>
                    </div>
               </div>
          </form>
     </div>
</template>

<script>
export default {
     name:"Login_Form"

}
</script>

<style>

</style>