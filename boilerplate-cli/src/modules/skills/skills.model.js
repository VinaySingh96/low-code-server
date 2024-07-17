const mongoose = require("mongoose");

// update schema according to usage
const SkillsSchema = new mongoose.Schema();

module.exports = mongoose.model('skills', SkillsSchema);