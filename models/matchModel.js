import mongoose from 'mongoose';

const matchSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Matches = mongoose.model('Matches', matchSchema);

export default Matches;
