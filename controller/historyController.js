const asyncHandler = require("express-async-handler");
const History = require ("../models/historyModel")


const PostApi = asyncHandler(async(req,res)=>{
    const {name, image, dob, pob, description, position, career, evaluate, prize, address, country, date, period, honnors, medal, url, imageVideo, likeVideo, disLikeVideo, like, dislike, star} = req.body;
    const Exist = await History.findOne({name});
    if(Exist){
        res.status(400);
        throw new Error("đã có trong anh hùng này hệ thống");
    }
    else{
        const newUser = await History.create({name, image, dob, pob, description, position, career, evaluate, prize, address, country, date, period, honnors, medal, url, imageVideo, likeVideo, disLikeVideo, like, dislike, star})
        if(newUser){
            res.status(200).json({
                _id: newUser._id,
                name: newUser.name,
                image: newUser.image,
                dob: newUser.dob,
                pob: newUser.pob,
                description: newUser.description,
                position: newUser.position,
                career : newUser.career,
                evaluate: newUser.evaluate,
                prize: newUser.prize,
                address: newUser.address,
                country: newUser.country,
                date: newUser.date,
                period: newUser.period,
                honnors: newUser.honnors,
                medal: newUser.medal,
                url: newUser.url,
                imageVideo: newUser.imageVideo,
                likeVideo: newUser.likeVideo,
                disLikeVideo: newUser.disLikeVideo,
                like: newUser.like,
                dislike: newUser.dislike,
                star: newUser.star, 
                
            })
        }
        else{
            res.status(400);
            throw new Error("có lỗi khi tạo một user")
        }
    }

});

const getAllHistory = asyncHandler(async(req,res)=>{
    const api = await History.find({});
    res.status(200).json(api)
});

const PutHistoryById = asyncHandler(async(req,res)=>{
   const api = await History.findById(req.params.id);
   if(api){
    api.name = req.body.name || api.name;
    api.image = req.body.image || api.image;
    api.dob = req.body.dob || api.dob;
    api.pob = req.body.pob|| api.pob;
    api.description = req.body.description || api.description;
    api.position = req.body.position || api.positon;
    api.career = req.body.career || api.career;
    api.evaluate = req.body.evaluate || api.evaluate;
    api.prize = req.body.prize || api.prize;
    api.address = req.body.address || api.address;
    api.country = req.body.country || api.country;
    api.date = req.body.date || api.date;
    api.period = req.body.period || api.period;
    api.honnors = req.body.honnors || api.honnors;
    api.medal = req.body.medal || api.medal;
    api.url = req.body.url || api.url;
    api.imageVideo = req.body.imageVideo || api.imageVideo;
    api.likeVideo = req.body.likeVideo || api.likeVideo;
    api.disLikeVideo = req.body.disLikeVideo || api.disLikeVideo;
    api.like = req.body.like || api.like;
    api.dislike = req.body.dislike || api.dislike;
    api.star = req.body.star || api.star;
    

    const updateHistory = await api.save();
    _id = updateHistory._id;
    name = updateHistory.name;
    image = updateHistory.image;
    dob = updateHistory.dob;
    pob = updateHistory.pob;
    description = updateHistory.description;
    positon = updateHistory.position;
    career = updateHistory.career;
    evaluate = updateHistory.evaluate;
    prize = updateHistory.prize;
    address = updateHistory.address;
    country = updateHistory.country;
    date = updateHistory.date;
    period = updateHistory.period;
    honnors = updateHistory.honnors;
    medal = updateHistory.medal;
    url = updateHistory.url;
    imageVideo = updateHistory.imageVideo;
    likeVideo = updateHistory.likeVideo;
    disLikeVideo = updateHistory.disLikeVideo;
    like = updateHistory.like;
    dislike = updateHistory.dislike;
    star = updateHistory.star;
    

    res.json(updateHistory);
   }
   else{
    res.status(401);
    throw new Error("lỗi khi sửa")
   }
});

const DeleteById = asyncHandler(async (req, res) => {
    const api = await History.findById(req.params.id);
    if (api) {
        await api.remove();
        res.json({
            message: 'xóa thành công'
        });
    } else {
        res.status(400);
        throw new Error('api not found');
    }
 });

module.exports = {
    PostApi, getAllHistory, PutHistoryById, DeleteById
}