import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        username: 'twitterkullanıcısı',
        fullName: 'twitterkullanıcısı',
        avatar: "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
    },
    accounts: [
        {
            id: 1,
            username: 'twitterkullanıcısı',
            fullName: 'twitterkullanıcısı',
            avatar: "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
        },
        {
            id: 2,
            username: 'twitterkullanıcısı2',
            fullName: 'twitterkullanıcısı2',
            avatar: "https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png"
        }
    ]
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // state manipule etme metodlari
        _addAccounts: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const { _addAccounts, _removeAccount, _setCurrentAccount } = auth.actions
export default auth.reducer