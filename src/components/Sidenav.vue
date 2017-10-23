<template>
    <md-sidenav class="md-left" ref="leftSidenav" @open="OPEN_SIDENAV" @close="CLOSE_SIDENAV" v-bind:class="{ 'md-active': sidenav.isOpen }">
        <md-toolbar class="md-account-header">
            <md-list class="md-transparent">
                <md-list-item class="md-avatar-list"  v-if="!user.isAnonymous">
                    <md-avatar class="md-large">
                        <img :src="user.photoURL" alt="People">
                    </md-avatar>

                    <span style="flex: 1"></span>


                </md-list-item>

                <md-list-item>
                    <div class="md-list-text-container">
                        <span>{{ user.displayName }}</span>

                    </div>

                    <md-button class="md-icon-button md-list-action" v-on:click="onLogout" v-if="!user.isAnonymous">
                        <md-icon>lock</md-icon> 
                    </md-button> 
                </md-list-item>
            </md-list>
        </md-toolbar>

        <md-list v-if="!user.isAnonymous">

            <md-list-item > 
                <router-link to="/mycards"><md-icon class="md-primary">dashboard</md-icon> <span>My cards</span></router-link>
                <md-divider class="md-inset"></md-divider>
            </md-list-item>

            <md-list-item > 
                <router-link to="/mycards"><md-icon class="md-primary">account_box</md-icon> <span>Account</span></router-link>
                <md-divider class="md-inset"></md-divider>
            </md-list-item>
        </md-list>
        <md-list>

            <md-list-item> 
                <router-link to="/allcards"><md-icon class="md-primary">dashboard</md-icon> <span>Created cards</span></router-link>
                <md-divider class="md-inset"></md-divider>
            </md-list-item>
        </md-list>
    </md-sidenav>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

            export default {
            name: 'sidenav',
                    computed: {
                    ...mapState(['route', 'sidenav', 'user']) 
                    },
                    methods: {
                    ...mapMutations([
                            'CLOSE_SIDENAV',
                            'OPEN_SIDENAV'
                    ]),
                    onLogout() {
                        this.$router.push({name: 'Logout'});
                        }
                    }

            }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
