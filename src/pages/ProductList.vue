<script>

export default {

    name: 'ProductList',

    data() {

        return {
            list: [
                {
                    name: 'Cereali',
                    price: 10,
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum dolorem aperiam, ipsum provident rem ab error architecto quos nulla excepturi dolor aliquam eligendi consectetur nostrum explicabo ea et doloremque"
                },
                {
                    name: 'Biscotti',
                    price: 15,
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum dolorem aperiam, ipsum provident rem ab error architecto quos nulla excepturi dolor aliquam eligendi consectetur nostrum explicabo ea et doloremque"
                }
            ]
        }
    }
}
</script>


<template>
    <div class="container">
        <h1 class="text-center mb-5">Lista dei Prodotti</h1>
        <div v-for="item in list" class="row justify-content-center mb-2">
            <div class="col-6 d-flex justify-content-between p-1 rounded">
                <div class="d-flex align-items-center">
                    <p class="m-0">{{ item.name }}</p>
                </div>
                <router-link :to="{ name: 'product-detail', query: { name: item.name, price: item.price , description: item.description} }"> <button
                        class="btn btn-primary">Info</button></router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <button class="btn btn-success">Aggiungi Prodotto</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {

    color: white;

    .col-6 {
        border: 1px solid black;
        background-color: #ed5b27;

        a {
            text-decoration: none;
            color: white;
        }
    }
}
</style>