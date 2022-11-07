import { createReducer } from "@reduxjs/toolkit";

const initialStates = {
    logindata: null,
    cookie:undefined,
    user:"",
    inputError: "",
}

const product = {
    allProducts: [],
    allPackage:[]
}
export const auth = createReducer(initialStates,{
    login:(state,action)=>{
        state.logindata = action.payload;
    },
    logout:(state,action) => {
        state.user = null;
        state.cookie = undefined;
    },
    errorHandle:(state,action)=>{
        state.inputError = action.payload;
    },
    setUserName:(state,action) => {
        state.user = action.payload;
    },
    setCookie:(state,action) => {
        state.cookie = action.payload;
    }
})

export const products = createReducer(product,{
    getProducts:(state,action) =>{
        state.allProducts = action.payload;
    },

    getPackages:(state,action)=>{
        state.allPackage = action.payload;
    }
})
const orders = {
    offers:[],
    packageame:'',
    price:"",
    packageType: ""
}
export const order = createReducer(orders,{
   getoffers:(state,action) => {
    state.offers = action.payload.offers.split(' ');
   },
   packageName:(state,action)=>{
    state.packageame = action.payload;
   },
   packagetype:(state,action) =>{
    state.packageType = action.payload;
   },
   getPrice:(state,action)=>{
    state.offers = action.payload;
   }
})

const countryDetails = {
    countryName:"",
    callingCode:""
}

export const countrydetails = createReducer(countryDetails,{
    CountryName:(state,action) => {
        state.countryName = action.payload;
    },

    CallingCode: (state,action)=>{
        state.callingCode = action.payload;
    }

})