// import mongoose, { Schema, Document } from "mongoose";
// import bcrypt from "bcryptjs";

// // Enum for user roles
// export enum UserRole {
//   USER = "user",
//   ADMIN = "admin",
//   SUPERADMIN = "superadmin",
// }

// // Interface for social media profiles
// interface ISocialProfile {
//   provider: "google" | "facebook";
//   id: string;
//   email: string;
//   name?: string;
//   picture?: string;
// }

// // Interface for location
// interface ILocation {
//   address?: string;
//   city?: string;
//   state?: string;
//   country?: string;
//   postalCode?: string;
//   coordinates?: {
//     latitude: number;
//     longitude: number;
//   };
// }

// // Interface for user preferences
// interface IPreferences {
//   language: string;
//   theme: "light" | "dark";
//   emailNotifications: boolean;
//   pushNotifications: boolean;
// }

// // Main User interface
// export interface IUser extends Document {
//   email: string;
//   password?: string;
//   firstName: string;
//   lastName: string;
//   displayName: string;
//   phoneNumber?: string;
//   avatar?: string;
//   role: UserRole;
//   isEmailVerified: boolean;
//   isPhoneVerified: boolean;
//   socialProfiles: ISocialProfile[];
//   location: ILocation;
//   preferences: IPreferences;
//   lastLogin: Date;
//   loginAttempts: number;
//   lockUntil: Date;
//   refreshToken?: string;
//   createdAt: Date;
//   updatedAt: Date;
//   isActive: boolean;

//   // Methods
//   comparePassword(candidatePassword: string): Promise<boolean>;
//   generateAuthToken(): string;
//   generateRefreshToken(): string;
// }

// const userSchema = new Schema<IUser>(
//   {
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//       lowercase: true,
//     },
//     fullName: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     avatar: {
//       type: String,
//       default: "/default-avatar.png",
//     },
//     role: {
//       type: String,
//       enum: Object.values(UserRole),
//       default: UserRole.USER,
//     },
//     isEmailVerified: {
//       type: Boolean,
//       default: false,
//     },
//     isPhoneVerified: {
//       type: Boolean,
//       default: false,
//     },

//     // location: {
//     //   address: String,
//     //   city: String,
//     //   state: String,
//     //   country: String,
//     //   postalCode: String,
//     //   coordinates: {
//     //     latitude: Number,
//     //     longitude: Number,
//     //   },
//     // },
//     preferences: {
//       language: {
//         type: String,
//         default: "en",
//       },
//       theme: {
//         type: String,
//         enum: ["light", "dark"],
//         default: "light",
//       },
//       emailNotifications: {
//         type: Boolean,
//         default: true,
//       },
//       pushNotifications: {
//         type: Boolean,
//         default: true,
//       },
//     },
//     lastLogin: {
//       type: Date,
//     },
//     loginAttempts: {
//       type: Number,
//       default: 0,
//     },
//     lockUntil: {
//       type: Date,
//     },
//     // refreshToken: String,
//     isActive: {
//       type: Boolean,
//       default: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// // Indexes for better query performance
// // userSchema.index({ email: 1 });
// // userSchema.index({ "socialProfiles.provider": 1, "socialProfiles.id": 1 });
// // userSchema.index({ role: 1 });
// // userSchema.index({ "location.city": 1, "location.country": 1 });

// // Pre-save middleware to hash password
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();

//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password!, salt);
//     next();
//   } catch (error: any) {
//     next(error);
//   }
// });

// // Method to compare password
// userSchema.methods.comparePassword = async function (
//   candidatePassword: string
// ): Promise<boolean> {
//   try {
//     return await bcrypt.compare(candidatePassword, this.password!);
//   } catch (error) {
//     return false;
//   }
// };

// // Create the model
// const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

// export default User;
