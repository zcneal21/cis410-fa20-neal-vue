<template>
    <div>
        <div class="card">
            <div class="card-body">

                <h2 class="text-primary">{{product.Name}}</h2>
                <br>
                <p>Color: <br/><strong>{{product.Color}}</strong></p>
                <p>Team: <br/><strong>{{product.Team}}</strong></p>
                <p>Type: <br/><strong>{{product.Type}}</strong></p>
                <p>Price: <br/><strong>${{product.Price}}</strong></p>

            </div>
        </div>
        <br/>
        <router-link v-if="auth" :to="`/products/${this.$route.params.pk}/order`">
            <button type="button" class="btn btn-success">Create an Order</button>
        </router-link>
         <router-link v-else :to="`/signin`">
            <button type="button" class="btn btn-outline-success">Sign In to Order</button>
        </router-link>
    </div>
</template>

<script>
export default {
    computed:{
        product(){
            var products = this.$store.state.products
            var thisProduct = products.find((aProduct)=> aProduct.ProductID == this.$route.params.pk)

            // console.log("here is the movie you want", thisProduct )
            return(thisProduct)
        },
        auth(){
            return this.$store.state.token
        }
    }
}
</script>

<style scoped>

</style>