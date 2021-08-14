<template>
  <div>
    <b-container>
        <div>
        <Navbar />
        <br>

        <b-card header="Latest Post">
            <b-list-group>
            <div v-for="(post,index) in latestPost" :key="index">
                <b-list-group-item>
                    <nuxt-link :to="{name: 'post-id', params: { id:post.id }}" style="color: black; text-decoration: none">
                        <h3>{{ post.title }}</h3>
                        <p>{{ post.body }}</p>
                    </nuxt-link>
                </b-list-group-item>
            </div>
        </b-list-group>
        </b-card>
        <br>

        <Post/>
        </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
    async asyncData ({ query, error }) {
		let [latestPostResponse ] = await Promise.all([
			axios.get(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10`)
		])
		return{
            latestPost: latestPostResponse.data
		}
	}
}
</script>

<style>
</style>
