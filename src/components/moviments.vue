<template>
  <div class="container mt-3">
    <div class="card">
      <div class="card-header card text-white bg-dark">
          <center><h4>ATIVIDADES NA CARTEIRA</h4></center>
      </div>
      <div class="card-body">
        <center>
            <router-link to="/buy" class="px-2">
              <button class="btn btn-outline-success">
                  NOVA AQUISIÇÃO
              </button>
            </router-link>

            <router-link to="/buyMore" class="px-2">
              <button class="btn btn-outline-warning">
                  AUMENTO DE POSIÇÃO
              </button>
            </router-link>

            <router-link to="/sale" class="px-2">
              <button class="btn btn-outline-danger">
                  VENDA DE PARTICIPAÇÃO
              </button>
            </router-link>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
     export default {
          name: "Moviment",
     };
</script>