const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router()

router.get('/create', blogController.blogCreateGet);
router.get('/', blogController.blogIndexAll);
router.post('/', blogController.blogCreatePost);
router.get('/:id', blogController.blogDetails);
router.delete('/:id', blogController.blogDelete);

module.exports = router;