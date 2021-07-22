import mongoose from 'mongoose';

const postSchema =mongoose.Schema({
    jobTitle:String,
    description: String,
    employer: String,
    tags: [String],
    postedOn: {
        type: Date,
        default: new Date()
    },
});

const PostJob = mongoose.model('PostJob', postSchema);

export default  PostJob;
