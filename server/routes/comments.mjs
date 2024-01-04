import expresse from "express";

const router=expresse.Router();
import CommentController from '../controllers/CommentController.mjs'


router.get('/comment',CommentController.all);

router.get('/comment/:id',CommentController.getById);


export default router;