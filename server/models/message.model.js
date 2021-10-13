const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "cannot send empty message"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email required"],
      unique: true,
      trim: true,
      // match: [/\S+@\S+\.\S+/, 'is invalid'],
      validate: [isValidEmail, "Invalid email."],
    },
    message: {
    type: String,
    required: [true, "cannot send empty message"],
    alidate: [isValidEmail, "Invalid email."],
    },
  });

export default mongoose.model("Messages", MessageSchema);
