const mongoose = require("mongoose");

// update schema according to usage
const SkillCategorySchema = new mongoose.Schema();

module.exports = mongoose.model('skill-category', SkillCategorySchema);