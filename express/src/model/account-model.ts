import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    accountId: {
      type: String,
      required: true,
    },
    providerId: {
      type: String,
      required: true,
    },
    accessToken: {
      type: String,
      default: null,
    },
    refreshToken: {
      type: String,
      default: null,
    },
    accessTokenExpiresAt: {
      type: Date,
      default: null,
    },
    refreshTokenExpiresAt: {
      type: Date,
      default: null,
    },
    scope: {
      type: String,
      default: null,
    },
    idToken: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      default: null,
      select: false,
    },
  },
  { timestamps: true }
);

const Account = mongoose.model("Account", accountSchema);

export default Account;
