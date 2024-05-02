import { createSlice } from "@reduxjs/toolkit"
import { Axios } from "../utils/axios";
const initialState = {
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : ""
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            async function send() {
                const { user, pwd } = action.payload;

                try {
                    const response = await Axios.post("/auth/login", { email: user, password: pwd })
                    console.log(response)
                    if (response.status === 200) {
                        localStorage.setItem("token", JSON.stringify(state.token));
                    }
                } catch (err) { console.log(err) }
            }
            send();
        }
    }
})
export const { login } = AuthSlice.actions;
export default AuthSlice.reducer;
