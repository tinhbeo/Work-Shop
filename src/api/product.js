const api = 'https://6226c9bc2dfa5240180d2202.mockapi.io/shop/products?page=1&limit=8';
export async function getProducts() {
    try {
        const respone = await fetch(api);
        const json = await respone.json();
        return json
    } catch (error) {
        console.log(error);
    }
}