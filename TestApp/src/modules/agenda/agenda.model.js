const mongoose = require("mongoose");

const { status } = require('../../../constants/cron')

// update schema according to usage
const AgendaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    scheduledAt: {
      type: Date,
      required: true
    },
    isCron: {
      type: Boolean,
      default: false
    },
    cronExpression: {
      type: String,
    },
    priority: {
      type: Number,
      required: true,
      min: 1,
      max: 9,
      default: 5
    },
    disabled: {
      type: Boolean,
      default: false
    },
    lastRunAt: {
      type: Date,
    },
    lastFinishedAt: { 
      type: Date 
    },
    status: {
      type: String,
      enum: Object.values(status),
      default: status.PENDING
    },
    failReason: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

AgendaSchema.index({scheduledAt: 1});
AgendaSchema.index({isCron: 1});

module.exports = mongoose.model('job', AgendaSchema);