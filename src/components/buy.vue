<template>
     <div>
     <div class="container mt-3">
     <div class="card">
          <div class="card-header card text-white bg-dark">
               <center><h4>NOVO ATIVO</h4></center>
          </div>
          <div class="card-body">
               
               <center>
                    <button id="btn_stock" class="btn btn-outline-success" @click="stock = !stock">Ação</button>
                    <button class="btn btn-outline-success ms-2" @click="fii = !fii">Fundo Imobiliario</button>
                    <button class="btn btn-outline-success ms-2" @click="fund = !fund">Fundo de Investimento</button>
                    <button class="btn btn-outline-success ms-2" @click="tresory = !tresory">Tesouro Direto</button>
               </center>


               <div v-if="stock">
                   <form class="form mt-3" @submit="NewStock" method="get">
                         <label for="stock_ticker">Ticker da Ação:</label>
                         <input type="text" class="form-control" v-model="stock_ticker" name="stock_ticker" placeholder="ITSA4, BLAU3, WEGE3">

                         <label for="stock_price" class="mt-2">Preço da ação:</label>
                         <input type="text" class="form-control" v-model="stock_price" name="stock_price" >

                         <label for="stock_quanty" class="mt-2">Quantidade comprada:</label>
                         <input type="number" class="form-control" v-model="stock_quanty" name="stock_quanty" >

                         <label for="stock_datebuy" class="mt-2">Data da compra:</label>
                         <input type="date" class="form-control" v-model="stock_datebuy" name="stock_datebuy" >

                         <br>
                         <button type="submit" class="btn btn-outline-success mt-2">SALVAR</button> 
                   </form>
               </div>

               <div v-else-if="fii">
                   <form class="form mt-3" @submit="NewFII" method="post">
                         <label for="fii_ticker">Ticker do Fundo:</label>
                         <input type="text" class="form-control" v-model="fii_ticker" name="fii_ticker" placeholder="KNRI11, MXRF11, BRCR11">

                         <label for="fii_quanty">Quantidade comprada:</label>
                         <input type="number" class="form-control" v-model="fii_quanty" name="fii_quanty">

                         <label for="fii_price" class="mt-2">Preço do Fundo:</label>
                         <input type="text" class="form-control" v-model="fii_price" name="fii_price" >

                         <label for="fii_datebuy" class="mt-2">Data da compra:</label>
                         <input type="date" class="form-control" v-model="fii_datebuy" name="fii_datebuy" >

                         <br>
                         <button type="submit" class="btn btn-outline-success mt-2">SALVAR</button> 
                   </form>
               </div>

               <div v-else-if="fund">
                   <form class="form mt-3" @submit="NewFund" method="post">
                         <label for="fund_name">Nome do Fundo:</label>
                         <input type="text" class="form-control" v-model="fund_name" name="fund_name" placeholder="Trend DI Simples FIRF, XP FMP – FGTS ELETROBRÁS">

                         <label for="fund_price" class="mt-2">Preço investido no fundo:</label>
                         <input type="text" class="form-control" v-model="fund_price" name="fund_price" >

                         <label for="fund_datebuy" class="mt-2">Data da compra:</label>
                         <input type="date" class="form-control" v-model="fund_datebuy" name="fund_datebuy" >

                         <br>
                         <button type="submit" class="btn btn-outline-success mt-2">SALVAR</button> 
                   </form>
               </div>

               <div v-else-if="tresory">
                   <form class="form mt-3" @submit="NewTresory" method="post">
                         <label for="tresory_name">Nome do título:</label>
                         <input type="text" class="form-control" v-model="tresory_name" name="tresory_name" placeholder="TESOURO SELIC 2025, TESOURO IPCA+ 2045">

                         <label for="tresory_price" class="mt-2">Preço investido no título:</label>
                         <input type="text" class="form-control" v-model="tresory_price" name="tresory_price" >

                         <label for="tresory_datebuy" class="mt-2">Data da compra:</label>
                         <input type="date" class="form-control" v-model="tresory_datebuy" name="tresory_datebuy" >

                         <br>
                         <button type="submit" class="btn btn-outline-success mt-2">SALVAR</button> 
                   </form>
               </div>
               <div v-else>
                    
               </div>
          </div>
     </div>

     </div>
     </div>
</template>
<script>
export default {
     name:"Buy",
     data() {
          return {
               stock_ticker: null,
               stock_price: null,
               stock_quanty: null,
               stock_datebuy: null,

               fii_ticker: null,
               fii_quanty: null,
               fii_price: null,
               fii_datebuy: null,

               fund_name: null,
               fund_price: null,
               fund_datebuy: null,

               tresory_name: null,
               tresory_price: null,
               tresory_datebuy: null,

               stock: false,
               fii: false,
               fund: false,
               tresory: false
          }
     },methods: {
          async NewStock(e){
               e.preventDefault();

               const dataStock = {      
                    ticker: this.stock_ticker,
                    price: this.stock_price,
                    quanty: this.stock_quanty,
                    datebuy: this.stock_datebuy
               }

               console.log(dataStock);
          },
          async NewFII(e){
               e.preventDefault();

               const dataFii = {      
                    ticker: this.fii_ticker,
                    price: this.fii_price,
                    quanty: this.fii_quanty,
                    datebuy: this.fii_datebuy
               }

               console.log(dataFii);
          },
          async NewFund(e){
               e.preventDefault();

               const dataFund = {      
                    name: this.fund_name,
                    price: this.fund_price,
                    datebuy: this.fund_datebuy,
               }

               console.log(dataFund);
          },
          async NewTresory(e){
               e.preventDefault();

               const dataTresory = {      
                    name: this.tresory_name,
                    price: this.tresory_price,
                    datebuy: this.tresory_datebuy,
               }

               console.log(dataTresory);
          },

     },
}
</script>