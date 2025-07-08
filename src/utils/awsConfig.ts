import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export class AwsConfig {
  public static getPresignedToken = async (
    fileType: string,
    fileName: string,
    userId: string,
  ): Promise<string> => {
    const awsS3Client = new S3Client({
      region: "ap-south-1",
      credentials: {
        accessKeyId: process.env.MY_AWS_ACCESS_KEY as string,
        secretAccessKey: process.env.MY_AWS_SECRET_KEY as string,
      },
    });

    const PutObject = new PutObjectCommand({
      Bucket: "twitter-buket",
      Key: `uploads/${userId}/image/${Date.now()}-${fileName}.${fileType}`,
    });

    const url = await getSignedUrl(awsS3Client, PutObject, {
      expiresIn: 36000,
    });
    return url;
  };
}
