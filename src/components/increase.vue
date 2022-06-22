<template>
     <div>
     <div class="container mt-3">
     <div class="card">
          <div class="card-header card text-white bg-dark">
               <center><h4>NOVO ATIVO</h4></center>
          </div>
          <div class="card-body">
               
               <center>
                    <button id="btn_stock" class="btn btn-outline-warning" @click="stock = !stock">Ação</button>
                    <button class="btn btn-outline-warning ms-2" @click="fii = !fii">Fundo Imobiliario</button>
                    <button class="btn btn-outline-warning ms-2" @click="fund = !fund">Fundo de Investimento</button>
                    <button class="btn btn-outline-warning ms-2" @click="tresory = !tresory">Tesouro Direto</button>
               </center>


               <div v-if="stock">
                   <form action="/home" class="form mt-3">
                         <label for="stock_ticker">Ticker da Ação:</label>
                         <input type="text" class="form-control" name="stock_ticker" placeholder="ITSA4, BLAU3, WEGE3">

                         <label for="stock_price" class="mt-2">Preço da ação:</label>
                         <input type="text" class="form-control" name="stock_price" >

                         <label for="stock_quanty" class="mt-2">Quantidade comprada:</label>
                         <input type="number" class="form-control" name="tock_quanty" >

                         <label for="stock_datebuy" class="mt-2">Data da compra:</label>
                         <input type="date" class="form-control" name="stock_datebuy" >

                         <br>
                         <button type="submit" class="btn btn-outline-warning mt-2">SALVAR</button> 
                   </form>
               </div>

               <div v-else-if="fii">
                   <form action="/home" class="form mt-3">
                         <label for="fii_ticker">Ticker do Fundo:</label>
                         <input type="text" class="form-control" name="fii_ticker" placeholder="KNRI11, MXRF11, BRCR11">

                         <label for="fii_quanty">Quantidade comprada:</label>
                         <input type="number" class="form-control" name="fii_quanty">

                         <label for="fii_price" class="mt-2">Preço do Fundo:</label>
                         <input type="text" class="form-control" name="fii_price" >

                         <label for="fii_datebuy" class="mt-2">Data da compra:</label>
                         <input type="date" class="form-control" name="fii_datebuy" >

                         <br>
                         <button type="submit" class="btn btn-outline-warning mt-2">SALVAR</button> 
                   </form>
               </div>

               <div v-else-if="fund">
                   <form action="/home" class="form mt-3">
                         <label for="fund_name">Nome do Fundo:</label>
                         <input type="text" class="form-control" name="fund_name" placeholder="Trend DI Simples FIRF, XP FMP – FGTS ELETROBRÁS">

                         <label for="fund_price" class="mt-2">Preço investido no fundo:</label>
                         <input type="text" class="form-control" name="fund_price" >

                         <label for="fund_datebuy" class="mt-2">Data da compra:</label>
                         <input type="date" class="form-control" name="fund_datebuy" >

                         <br>
                         <button type="submit" class="btn btn-outline-warning mt-2">SALVAR</button> 
                   </form>
               </div>

               <div v-else-if="tresory">
                   <form action="/home" class="form mt-3">
                         <label for="tresory_name">Nome do título:</label>
                         <input type="text" class="form-control" name="tresory_name" placeholder="TESOURO SELIC 2025, TESOURO IPCA+ 2045">

                         <label for="tresory_price" class="mt-2">Preço investido no título:</label>
                         <input type="text" class="form-control" name="tresory_price" >

                         <label for="tresory_datebuy" class="mt-2">Data da compra:</label>
                         <input type="date" class="form-control" name="tresory_datebuy" >

                         <br>
                         <button type="submit" class="btn btn-outline-warning mt-2">SALVAR</button> 
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
     name:"Increase",
     data() {
          return {
               stock: false,
               fii: false,
               fund: false,
               tresory: false
          }
     },
}
</script>