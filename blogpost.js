const blogPost = {
    title: 'Post Title',
    body: 'I made a post!',
    author: 'Mark Zuck',
    views: 3,
    comments: [
        { author: 'Speil',
        body: 'Hello' },
        { author: 'Dog Man',
        body: 'Great Post' }
    ],
    isLive: true
}
console.log(blogPost);

// Constructor Blog Post
function CreateBlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let newPost = new CreateBlogPost(
    'New Title', 'Body Text', 'Some Author'
);

console.log(newPost);