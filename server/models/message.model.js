const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  message: {
    type: String,
    required: [true, "cannot send empty message"],
    trim: true,
  },
  from: {
    type: String,
    trim: true,
  },
});

export default mongoose.model("Messages", MessageSchema);
