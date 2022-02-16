<template>
       <div class="container mt-5">
          <form action="/home">
               <div class="card">
                    <div class="card-header card text-white bg-dark">
                         <center><h4>LOGIN</h4></center>
                    </div>
                    <div class="card-body">
                         <label for="email">E-mail:</label>
                         <input type="email" class="form-control" name="email" placeholder="name@gmail.com">
                         <label for="password" class="mt-2">Senha:</label>
                         <input type="password" class="form-control" name="password" >
                         <button type="submit" class="btn btn-outline-success mt-2">ENTRAR</button> 
                         <br>
                         <a href="/home" class="btn btn-outline-warning mt-2">ESQUECI A SENHA</a>
                    </div>
               </div>
          </form>
          <hr class="mt-4">
          
     </div>
</template>
<script>
export default {
     name:"Login_Form"

}
</script>

<style>

</style>