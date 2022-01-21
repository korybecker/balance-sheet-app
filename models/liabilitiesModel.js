const mongoose = require("mongoose");

const liabsSchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  dollarAmount: {
    type: String,
    required: [true, "Dollar amount must be provided"],
    trim: true,
    maxLength: [10, "Cannot input asset worth more than $1,000,000,000"],
  },
  title: {
    type: String,
    required: [true, "Title must be provided"],
    maxLength: [30, "Max length for title is 30 characters"],
  },
});

module.exports = mongoose.model("Liabs", liabsSchema);
