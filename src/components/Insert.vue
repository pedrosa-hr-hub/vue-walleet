<template>
  <div class="container mt-3">
    <div class="card">
      <div class="card-header">
          <center><h4>Aportes</h4></center>
      </div>
      <div class="card-body">
        <p>
            <router-link to="/buyStock" class="px-2">
              <button class="btn btn-success">
                  Ações
              </button>
            </router-link>

            <router-link to="/buyFII" class="px-2">
              <button class="btn btn-success">
                  Fundo Imobiliário
              </button>
            </router-link>

            <router-link to="/buyFund" class="px-2">
              <button class="btn btn-success">
                  Fundo De Investimento
              </button>
            </router-link>

            <router-link to="/buyCash" class="px-2">
              <button class="btn btn-success">
                  Caixa
              </button>
            </router-link>

            <router-link to="/buyReserve" class="px-2">
              <button class="btn btn-success">
                  Reserva De Emergência
              </button>
            </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
     export default {
          name: "Insert",
     };
</script>