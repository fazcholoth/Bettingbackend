import mongoose from "mongoose";

const matchSchema = mongoose.Schema(
  {
    key: {
      type: String,
    },
    name: {
      type: String,
    },
    short_name: {
      type: String,
    },
    status: {
      type: String,
    },
    start_at: {
      type: {},
    },
    // tournament: {
    //   type: String,
    // },
    teams: {
      a: {
        name: String,
        score: [
          [
            {
              isWiket: Boolean,
              isFour: Boolean,
              isSix: Boolean,
              Extras: Number,
              isDotball: Boolean,
              Runs: Number,
            },
          ],
        ],
        wicket: Number,
      },
      b: {
        name: String,
        score: [
          [
            {
              isWiket: Boolean,
              isFour: Boolean,
              isSix: Boolean,
              Extras: Number,
              isDotball: Boolean,
              Runs: Number,
            },
          ],
        ],
        wicket: Number,
      },
    },
    format: {
      type: String,
    },
    startedmanage: {
      type: Boolean,
      default: false,
    },

    batteam: {
      type: Number,
      default: 1,
    },
    over: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const Matches = mongoose.model("Matches", matchSchema);

export default Matches;
