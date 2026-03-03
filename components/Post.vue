<template>
    <div>
        <b-card header="Popular Post">
            <b-list-group>
            <div v-for="(post,index) in popularPost" :key="index">
                <b-list-group-item>
                    <nuxt-link :to="{name: 'post-id', params: { id:post.id }}" style="color: black; text-decoration: none">
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
    async mounted (){
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_start=11&_limit=20`
        );
        this.popularPost = response.data;
      } catch (err) {
        console.error('Popular posts fetch failed', err);
      }
    }
}
</script>