export const authActions = {
    STORE_TOKEN: "STORE_TOKEN"
};

export const storeToken = token => ({
    type: authActions.STORE_TOKEN,
    token
});
