import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

// ✅ configure cloudinary HERE (no separate file)
cloudinary.config({
  cloud_name: "dutbdcsey",
  api_key: "237431869518487",
  api_secret: "cifMqdHgY7xUmulojtaUGNfuFi0",
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    return {
      folder: "veloura-products",
      resource_type: "image", // 🔥 VERY IMPORTANT
      format: "jpeg",
      public_id: Date.now() + "-" + file.originalname,
    };
  },
});

const upload = multer({ storage });

export default upload;