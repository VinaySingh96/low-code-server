const mongoose = require("mongoose");

// update schema according to usage
const SkillSchema = new mongoose.Schema();

module.exports = mongoose.model('skill', SkillSchema);