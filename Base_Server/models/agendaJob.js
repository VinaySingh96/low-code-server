const mongoose = require("mongoose");

// update schema according to usage
const AgendaJobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['email', 'dataCleanup', 'reportGeneration', 'notification', 'anyOtherJobType'], // Example job types
  },
  data: {
    type: mongoose.Schema.Types.Mixed, // This allows storing any type of data
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'running', 'completed', 'failed'],
    default: 'pending',
  },
  priority: {
    type: Number,
    default: 0, // Default priority
  },
  nextRunAt: {
    type: Date,
    required: true,
  },
  lastRunAt: {
    type: Date,
  },
  lastFinishedAt: {
    type: Date,
  },
  failedAttempts: {
    type: Number,
    default: 0,
  },
  lockInfo: {
    lockedAt: {
      type: Date,
    },
    lockOwner: {
      type: String,
    },
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('agenda-job', AgendaJobSchema);