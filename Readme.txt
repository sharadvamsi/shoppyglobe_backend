In this project developed backend apis for a e-commerce type website named shoppyglobe.

used MVC architecture to maintain code readability and make them easy to use and modify

product routes:

1. /api/products -- this is a get api used to fetch all the products from db.
2. /api/product/:id -- this is a get api to fetch specificc product based on prooductId added middleware "checkProductExists" for this route to check if product exists before fetching it details.

user routes:
1./user/register -- this is a post api to register a new user. added middleware "registerValidation" to valid input data for required fields.
2. /user/login -- this is a post api to login new user. added middleware "loginValidation" to validate input data,return jwt token as response.

cart routes:

1. for every route mentioned below added middleware "authUser" for jwt token validation.
2. /api/cart -- this is a post request to add a new item to cart apart from "authUser" middleware added "checkProductExists" middleware to check if product exists before adding to cart.
3. /api/cart -- this is a put request to update quantity of a product in a cart based on userId and productId.userId is fetched from "authUser" middleware.
4. /api/cart/:id -- this a delete request to remove product from cart.