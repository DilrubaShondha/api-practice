function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (res => res.json())
    .then (data => displayPosts(data))
}
function displayPosts(posts){
const container = document.getElementById('post-container');
for(const post of posts){
const div = document.createElement('div');
div.innerHTML = 
 <h4>User-${post.userId}</h4>
 <h5>Post:title</h5>
}}
container.appendChild(div)
loadPost();