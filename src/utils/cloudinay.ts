import { v2 as cloudinary } from "cloudinary";

export class Cloudinary {
  public static async UploadImage(file: string): Promise<string> {
    cloudinary.config({
      cloud_name: process.env.CLOUDIANRY_NAME,
      api_key: process.env.CLOUDIANRY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    console.log(process.env.CLOUDINARY_API_SECRET);
    try {
      const res = await cloudinary.uploader.upload(file);
      console.log(res);
      return res.secure_url;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public static async ImageUriConverter(image: File): Promise<string> {
    if (!image) return "image required";
    const bufferdata = await image.arrayBuffer();
    const buffer = Buffer.from(bufferdata);
    const base64 = buffer.toString("base64");
    const uri = `data:${image.type};base64,${base64}`;
    return uri;
  }
}
