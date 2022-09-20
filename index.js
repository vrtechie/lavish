
import express from 'express';
const app = express();
import cors from 'cors'
import router from './routes/customer.js'
import bookingRouter from './routes/booking.js'
import categoryRouter from './routes/category.js'
import couponsRouter from './routes/coupons.js'
import customerlogsRouter from './routes/customerlogs.js';
import favoritesRouter from './routes/favorites.js'
import reviewsRouter from './routes/reviews.js'
import serviceRouter from './routes/service.js'
import slidersRouter from './routes/sliders.js'
import subcategoryRouter from './routes/subcategory.js'
import vendorcompanyRouter from './routes/vendorcompany.js'
import vendordetailsRouter from './routes/vendordetails.js'
import wishlistRouter from './routes/wishlist.js'
app.use(cors());
// Configuring body parser middleware
app.use(express.json());
app.use(express.urlencoded());
//customer
app.use("/customers", router)
app.use("/customers/:id", router)
app.use("/create_customers", router)
// booking
app.use("/booking", bookingRouter)
app.use("/booking/:id", bookingRouter)
app.use("/create_booking", bookingRouter)
// category
app.use("/category", categoryRouter)
app.use("/category/:id", categoryRouter)
app.use("/create_category", categoryRouter)
// coupons
app.use("/coupons", couponsRouter)
app.use("/coupons/:id", couponsRouter)
app.use("/create_coupons", couponsRouter)
// coupons
app.use("/customerlogs", customerlogsRouter)
app.use("/customerlogs/:id", customerlogsRouter)
app.use("/create_customerlogs", customerlogsRouter)
// favorites
app.use("/favorites", favoritesRouter)
app.use("/favorites/:id", favoritesRouter)
app.use("/create_favorites", favoritesRouter)
// reviews
app.use("/reviews", reviewsRouter)
app.use("/reviews/:id", reviewsRouter)
app.use("/create_reviews", reviewsRouter)
//serviesRoutes
app.use("/servies", serviceRouter)
app.use("/servies/:id", serviceRouter)
app.use("/create_servies", serviceRouter)
// slidersRouter
app.use("/sliders", slidersRouter)
app.use("/sliders/:id", slidersRouter)
app.use("/create_sliders", slidersRouter)
// subcategoryRouter
app.use("/subcategory", subcategoryRouter)
app.use("/subcategory/:id", subcategoryRouter)
app.use("/create_subcategory", subcategoryRouter)
// vendorcompanyRouter
app.use("/vendorcompany", vendorcompanyRouter)
app.use("/vendorcompany/:id", vendorcompanyRouter)
app.use("/create_vendorcompany", vendorcompanyRouter)
// vendordetailsRouter
app.use("/vendordetails", vendordetailsRouter)
app.use("/vendordetails/:id", vendordetailsRouter)
app.use("/create_vendordetails", vendordetailsRouter)
// wishlistRouter
app.use("/wishlist", wishlistRouter)
app.use("/wishlist/:id", wishlistRouter)
app.use("/create_wishlist", wishlistRouter)
app.listen(3000, () => {
    console.log('Server is running at port 3000');
});