<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="card">
                    <div class="card-body">
                        <h4>Create an Order</h4> 
                        <form id="order-form" @submit.prevent="submitOrder">
                            <div class="form-group">
                                <label for="ratinginput">Quantity</label>
                                 <input type="number" id="quantityInput" name="quantity" min="1" max="10" required="required" class="form-control" v-model="Quantity">
                            </div>
                             <div class="form-group">
                                 <label for="summaryinput">Date</label> 
                                 <input type="date" id="dateInput" name="date" required="required" class="form-control" v-model="OrderDate">
                            </div> 
                            <button type="submit" class="btn btn-primary">Submit Order</button> 
                            <button v-on:click="cancelOrder" type="clear" class="btn btn-outline-danger"> Cancel</button> 

                            <p v-if="errorMessage" class="form-text text-danger">{{errorMessage}}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            Quantity: null,
            OrderDate: null,
            errorMessage: null,  
        }
    },
    methods:{
        submitOrder(){
            const myOrder={
                Quantity: this.Quantity,
                OrderDate: this.OrderDate,
                ProductFK: this.$route.params.pk
            };

            // console.log("here is the order", myOrder)

            const token = this.$store.state.token;

            axios.post("/order", myOrder, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(()=> {
                this.$router.replace('/account')
            }).catch(()=>{
                this.errorMessage = "Unable to create an order, please try again later"
            })
        },
        cancelOrder(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>

</style>