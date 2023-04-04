<script>


export default {

    name: 'ProductDetail',

    props: ['price']

}

</script>

<template>
    <div class="container">
        <div class="row justify-content-center pt-3">
            <div class="card mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Nome Prodotto: {{ $route.query.name }} </h5>
                    <p class="card-text">Prezzo: {{ $route.query.price }}&euro; </p>
                    <p class="card-text">Descrizione Prodotto: {{ $route.query.description }}</p>
                </div>
            </div>
            <router-link :to="{ name: 'product-list' }" class="text-center"><button class="btn btn-primary">Torna alla
                    Home</button></router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>