import midtransClient from "midtrans-client";
import { config } from "dotenv";
config();

const snap = new midtransClient.Snap({
    // Set to true if you want Production Environment (accept real transaction).
    isProduction : false,
    serverKey : process.env.SERVER_KEY
});

const parameter = {
    "transaction_details": {
        "order_id": "YOUR-ORDERID-123456",
        "gross_amount": 10000
    },
    "credit_card":{
        "secure" : true
    },
    "customer_details": {
        "first_name": "budi",
        "last_name": "pratama",
        "email": "budi.pra@example.com",
        "phone": "08111222333"
    }
};

export const snapping = async (req, res) => {
    try {
        const transaction = await snap.createTransaction(parameter);
        const transactionToken = transaction.token;
        const redirect_url = `https://app.sandbox.midtrans.com/snap/v2/vtweb/${transactionToken}`
        res.json({transactionToken, redirect_url});
    } catch (error) {
        res.status(500).send(error.message);
    }
};