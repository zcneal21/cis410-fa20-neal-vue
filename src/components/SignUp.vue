<template>
    <div>
        <h1>Sign Up</h1>
        <form @submit.prevent="onSubmit">
            <div class="form-group"><label for="fname-input">First name</label> <input type="text" id="fname-input" required="required" placeholder="First name" class="form-control" v-model="nameFirst"></div> 
        
            <div class="form-group"><label for="lname-input">Last name</label> <input type="text" id="lname-input" required="required" placeholder="Last name" class="form-control" v-model="nameLast"></div> 

            <div class="form-group"><label for="phone-input">Phone</label> <input type="text" id="phone-input" required="required" placeholder="XXXXXXXXXX" class="form-control" v-model="phone"></div> 

            <div class="form-group"><label for="sAdd-input">Street Address</label> <input type="text" id="sAdd-input" required="required" placeholder="Street Address" class="form-control" v-model="streetAdd"></div> 

            <div class="form-group"><label for="city-input">City</label> <input type="text" id="city-input" required="required" placeholder="City" class="form-control" v-model="city"></div> 

            <div class="form-group"><label for="state-input">State</label> <input type="text" id="state-input" required="required" placeholder="AL" class="form-control" v-model="state"></div> 

            <div class="form-group"><label for="zip-input">ZIP</label> <input type="text" id="zip-input" required="required" placeholder="XXXXX" class="form-control" v-model="zip"></div> 
        
            <div class="form-group"><label for="email-input">Email address</label> <input type="email" id="email-input" required="required" placeholder="Enter email" class="form-control" v-model="email"> <!----> <small v-if="dupEmail" class="form-text text-danger">Please choose a different email</small></div>

            
        
            <div class="form-group"><label for="password-input">Password</label> <input type="password" id="password-input" required="required" value="asdfasdf" class="form-control" v-model="password"></div> 
         
            <button type="submit" class="btn btn-primary">Submit</button> 
            <p id="error-signup" class="text-danger">{{errorMessage}}</p>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
        nameFirst: '',
        nameLast: '',
        phone: '',
        streetAdd: '',
        city: '',
        state: '',
        zip: '',
        email: '',
        password: '',
        errorMessage:'',
        dupEmail: false

        }
    },

    methods:{
        onSubmit(){

        const myFormData = {
                FirstName: this.nameFirst,
                LastName: this.nameLast,
                Phone: this.phone,
                StreetAdd: this.streetAdd,
                City: this.city,
                State: this.state,
                ZIP: this.zip,
                email: this.email,
                Password: this.password
            }
            // console.log(myFormData)

            axios.post("/customer", myFormData)
                .then((myResponse)=>
                {
                    this.$router.replace("/signin?signupsuccess=true")
                })
                .catch((myError)=>{
                    if(myError.response.status === 409){
                        this.dupEmail = true
                        }else{
                            this.errorMessage = "Cannot sign you up, please try again later."
                        }
                })

        }
    }
}
</script>

<style scoped>

</style>