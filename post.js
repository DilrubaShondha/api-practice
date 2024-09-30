function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (res => res.json())
    .then (data => displayPosts(data))
}
function displayPosts(posts){
const container = document.getElementById('post-container');
for(const post of posts){
const postDiv = document.createElement('div');
postDiv.innerHTML = `
 <h4>User-${post.userId}</h4>
 <h5>Post:title ${post.title}</h5>
 <p>Post Description: ${post.body}</p>`
 container.appendChild(postDiv)
}
}
loadPost();