<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png"/>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from "@/components/HelloWorld.vue";
    import {mapState, mapGetters} from "vuex"

    export default {
        name: "Home",
        components: {
            HelloWorld
        },
        data() {
            return {
                ss: ''
            }
        },
        computed: {
            ...mapState(["admin"]),
            ...mapGetters(["getDemoValue"]),
        },
        methods: {
            getList() {
                this.$store.state.admin.demoValue;
                let str = "";
                this.$utils.isEmpty(str);
                this.$request.post().then(res => {

                });
            }
        },
        created() {
            // this.getList()
        }
    };
</script>