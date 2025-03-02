import axios from "axios";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables
// const API_KEY = "AIzaSyDP9lC5yZ7UTbOKw89I3EQaEWnZ4wch2tg";
const API_KEY = process.env.YOUTUBE_API_KEY;
export const searchYouTube = async (query) => {
  try {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      query
    )}&type=video&maxResults=5&key=${API_KEY}`;

    const response = await axios.get(url);
    const videos = response.data.items;

    if (!videos.length) {
      console.log("No results found.");
      return;
    }
    let dataArray = [{ title: "", url: "", channel: "", publishedAt: "" }];
    for (const [index, video] of videos.entries()) {
      const videoTitle = video.snippet.title;
      const videoURL = `https://www.youtube.com/watch?v=${video.id.videoId}`;
      const channel = video.snippet.channelTitle;
      const publishedAt = video.snippet.publishedAt;

      dataArray[index] = {
        title: videoTitle,
        url: videoURL,
        channel: channel,
        publishedAt: publishedAt,
      };
      // console.log(`${index + 1}. ${video.snippet.title}`);
      // console.log(
      //   `   Video URL: https://www.youtube.com/watch?v=${video.id.videoId}`
      // );
      // console.log(`   Channel: ${video.snippet.channelTitle}`);
      // console.log(`   Published At: ${video.snippet.publishedAt}`);
      // console.log("--------------------------------------------------");
    }
    return dataArray;
  } catch (error) {
    console.error(
      "Error fetching search results:",
      error.response?.data || error.message
    );
  }
};
