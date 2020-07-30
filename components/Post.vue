<template>
    <div>
        <b-card header="Popular Post">
            <b-list-group>
            <div v-for="(post,index) in popularPost" :key="index">
                <b-list-group-item>
                    <nuxt-link :to="{name: 'post-id', params: { id:post.id }}">
                        <h3>{{ post.title }}</h3>
                        <p>{{ post.body }}</p>
                    </nuxt-link>
                </b-list-group-item>
            </div>
        </b-list-group>
        </b-card>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data () {
		return {
			popularPost: ''
		};
    },
    mounted (){
		axios.get(`https://jsonplaceholder.typicode.com/posts?_start=11&_limit=20`
		).then((response) => {
			this.popularPost = response.data
		})
	}
}
</script>