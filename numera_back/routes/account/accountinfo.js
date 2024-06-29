const express = require("express");
const router = express.Router();
const customers = require("../../db/models/users_info") 

router.get('/', async (req, res) => {
    // Check if the user is authenticated and a session exists
    if (req.session.passport && req.session.passport.user) {
        const userId = req.session.passport.user;
        
        try {
            const customer = await customers.findByPk(userId);
            if (customer) {
                // Send the customer's email if the customer is found
                res.send({
                    address: customer.address,
                    firstName: customer.first_name,
                    lastName: customer.last_name

                });
            } else {
                // Send a 404 status code if no customer is found
                res.status(404).send('No customer found');
            }
        } catch (error) {
            // Send a 500 status code if an error occurs during the database query
            res.status(500).send('Error accessing customer information');
        }
    } else {
        // Send a 401 status code if user is not authenticated or session does not exist
        res.status(401).send('User not authenticated');
    }
});
module.exports = router;