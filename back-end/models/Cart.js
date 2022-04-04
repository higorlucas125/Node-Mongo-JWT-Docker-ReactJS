const mongosse = require("mongoose");

const CartSchema = new mongosse.Schema(
    {
        userId: { type: String, required: true },
        products: [
            {
                products: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongosse.model("Cart", CartSchema)