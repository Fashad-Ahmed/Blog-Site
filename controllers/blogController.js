const Blog = require('../models/blog');

const blogCreateGet = (req, res) => {
    res.render('create', { title: 'Create a new blog' });
}

const blogIndexAll = (req, res) => {
    Blog.find()
        .then(result => {
            res.render('index', { blogs: result, title: 'All Blogs' });
        })
        .catch(error => {
            console.log(error);
        })

}

const blogDetails = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch(error => {
            console.log(error);
            res.render('404', { title: 'Blog not found' });
        })

}

const blogCreatePost = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then(result => {
            res.redirect('/blogs');
        })
        .catch(error => {
            console.log(error);
        })

}

const blogDelete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });   //  can't redirect to ENDPOINT directly( case: findByIdAndDelete)
        })
        .catch(error => {
            console.log(error);
        })

}

module.exports = {
    blogIndexAll,
    blogDetails,
    blogCreateGet,
    blogCreatePost,
    blogDelete
}