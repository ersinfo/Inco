const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const serviceCategories = [
    {
      title: "Register your company",
      price: "₹999/-",
      image: "bag.png",
      services: [
        "Private Limited company",
        "Limited Liability Partnership",
        "One Person company",
        "Partnership Firm",
        "Sole Proprietorship"
      ]
    },
    {
      title: "File GST",
      price: "₹399/-",
      image: "file.png",
      services: [
        "GST Registration",
        "GST Filing",
        "GST Cancellation and Revocation",
        "Reply to GST Notice",
        "Indirect Tax"
      ]
    },
    {
      title: "Protect your Intellectual Property",
      price: "₹1499/-",
      image: "pro.png",
      services: [
        "Trademark Registration",
        "Copyright Registration",
        "Patent Registration",
        "Trademark Objection",
        "Trademark Infringement"
      ]
    },
    {
      title: "Maintain your Accounts",
      price: "₹4999/-",
      image: "main.png", // ✅ FIXED HERE
      services: [
        "Accounting and Book-keeping",
        "Annual Compliance",
        "TDS Return Filing",
        "Income Tax Notice",
        "Secretarial Audit"
      ]
    },
    {
      title: "Licenses",
      price: "₹999/-",
      image: "license.png",
      services: [
        "ISO Registration",
        "FSSAI Registration",
        "IEC Registration",
        "LIQUOR License Registration",
        "PSARA Registration"
      ]
    }
  ];

  res.render('home', { serviceCategories });
});

module.exports = router;
