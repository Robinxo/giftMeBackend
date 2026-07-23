import ApiError from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import Gift from "../models/Gift";

const createGift = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    price,
    relationships,
    occasions,
    ageGroup,
    hobbies,
    image,
    inStock,
  } = req.body;

  const newCreateGift = new Gift({
    name,
    description,
    price,
    relationships,
    occasions,
    ageGroup,
    min,
    max,
    hobbies,
    image,
    inStock,
  });
  await newCreateGift.save();
  console.log("Gift added");
  console.log(newCreateGift);
});
//getAllGifts();
//getGiftById();
//updateGift();
//deleteGift();

//suggestGifts();

export { createGift };
