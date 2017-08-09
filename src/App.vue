<template>
    <v-app>
        <v-navigation-drawer></v-navigation-drawer>
        <v-toolbar></v-toolbar>
        <main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </main>
        <v-footer></v-footer>
    </v-app>
</template>

<script>
    export default {
    };
</script>

<style lang="scss">
    #app {}
</style>
