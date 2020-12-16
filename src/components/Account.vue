<template>
    <div>
        <h1>Account</h1>
        <hr>
        <h3>{{firstName}}'s Orders</h3>

        <p class="form-text text-danger" v-if="accountError">Can not get your account information, please try again later</p>

        <table v-if="orderByUser" class="table">
            <thead>
                <th>Product</th>
                <th>Date</th>
                <th>Quantity</th>
            </thead>
            <tbody>
                <tr v-for="thisOrder in orderByUser" :key="thisOrder.OrderID">
                    <th><router-link :to="`/products/${thisOrder.ProductFK}`">{{thisOrder.Name}}</router-link></th>
                    <th>{{thisOrder.OrderDate}}</th>
                    <th>{{thisOrder.Quantity}}</th>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            orderByUser: null,
            accountError: false
        }
    },
    computed:{
        firstName(){
            // console.log(this.$store.state)
            return this.$store.state.user.NameFirst
        }
    },
    created(){
        axios.get("/order/me", {
            headers: {
                Authorization: `Bearer ${this.$store.state.token}`
            }
        }).then((response)=> {
            console.log(response)
            this.orderByUser= response.data
        }).catch(()=>{
            this.accountError = true
        })
    }
}
</script>

<style scoped>

</style>