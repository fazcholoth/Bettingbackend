import mongoose from 'mongoose';

const biddingSchema = mongoose.Schema(
  {
    matchkey: {
      type: String,
    },
    ball: {
      type: Array,
    },
    Option: {
      type: String,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    amount:{
        type:Number
    },
    status:{
        type:String
    },
    bidteam:{
        type:String,
    }
  },
  {
    timestamps: true,
  }
)

const Bidding = mongoose.model('Bidding', biddingSchema);

export default Bidding;
