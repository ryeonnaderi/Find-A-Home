const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .post(userController.create)
  .get(userController.findById);


router.route("/:email")
  .get(userController.findByEmail);

router.route("/:email/wishlist")
  .get(userController.findUserWishlist);

router.route("/:email/houses") 
  .get(userController.findUserHouses);
  
// Matches with "/api/signin"
router.route("/signin")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
