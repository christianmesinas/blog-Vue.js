<template>
  <div id="add-blog">
    <h2>Add a new blog post</h2>
    <form v-if="!submitted" action="index.html" method="post">
      <label for="">Blog Title:</label>
      <input type="text" v-model.lazy='blog.title' required value="">
      <label for="">Blog Content</label>
      <textarea v-model.lazy='blog.content' name="name" rows="8" cols="80"></textarea>
      <div id="checkboxes">
        <label for="">ninjas</label>
        <input type="checkbox" v-model="blog.categories" value="ninjas">
        <label for="">wizards</label>
        <input type="checkbox" v-model="blog.categories" value="wizards">
        <label for="">mario</label>
        <input type="checkbox" v-model="blog.categories" value="mario">
        <label for="">Cheese</label>
        <input type="checkbox" v-model="blog.categories" value="Cheese">
      </div>
      <label for="">Author:</label>
      <select v-model="blog.author" class="" name="">
        <option v-for="author in authors">{{ author }}</option>
      </select>
      <button v-on:click.prevent="post"> Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
      <div id="preview">
          <h3>Preview Blog</h3>
            <p>Blog Title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p>{{ blog.content }}</p>
            <p>Blog categories:</p>
              <ul>
                <li v-for='category in blog.categories'>{{ category }}</li>
              </ul>
            <p>Author: {{ blog.author }}</p>
      </div>
  </div>
</template>

<script>


export default {


  data () {
    return {
      blog:{
          title:'',
          content:'',
          categories: [],
          author:''
        },
        authors: ['the Net ninja', 'angular avenger', 'me'],
        submitted: false,
        }
        },
        methods:{
          post: function() {
            this.$http.post("https://vue-js-playlist-25a23.firebaseio.com/posts.json",this.blog).then(function(data) {
              console.log(data);
              this.submitted=true;
            });

          }

          }
      }
</script>

<style >

#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label{
  display: inline-block;
}

</style>
