const posts = [
  { title: "post One", body: "this is my first post" },
  { title: "post Two", body: "this is my second post" },
  { title: "post Three", body: "this is my third post" }
];

function getPosts() {
  setTimeout(() => {
    let output;
    posts.forEach((post, index) => {
      //***console.log('**' , post,index)
      output += console.log(`post title: ${post.title}`);
    });
    //***console.log(output);
  }, 2000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

//getPosts();
createPost({ title: "post Four", body: "this is my fourth post" } , getPosts);
