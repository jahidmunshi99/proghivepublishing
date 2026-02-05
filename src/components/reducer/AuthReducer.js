

export const AuthReducer = (state, action)=>{
    switch (action.type) {
        case "LOGGED_IN":
            return{...state, user:true}

        case "SIGN_OUT":
            return{...state, user:false}

        default:
            state;
    }
}