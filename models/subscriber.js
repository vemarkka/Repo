"use strict";

const mongoose = require("mongoose"),
 subscriberSchema = mongoose.Schema({
    name:{
    type:String,
    required:true},
    email: {
      type:String,
      required: true,
      lowercase: true,
      unigue:true},
    zipCode: {
      type:Number,
      min: [1000, "Zip code too short"],
      max:99999},
    vip:{
      type:Boolean,
      default: false
    },

  });


  subscriberSchema.methods.getInfo= function(){
    return `Name: ${this.name} Email: ${this.email} Zip Code: ${this.zipCode} vip:${this.vip}`;
  };

  subscriberSchema.methods.findLocalSubscribers= function() {
    return this.model("Subscriber")
    .find({vip:this.vip})
    exec();
  };

const Schema = mongoose.Schema;
  const storySchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    storyNumber: Number,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }],
    courses:[{type:Schema.Types.ObjectId,ref:"Course"}],
    subscribedAccount:{type:Schema.Types.ObjectId,ref:"Subscriber"}
  });



const Story = mongoose.model('Story', storySchema);

module.exports = mongoose.model('Story', storySchema);

module.exports = mongoose.model("Subscriber", subscriberSchema);
