import axios from "axios";

export const getImages = async () => {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    if (res.status === 200) {
      const resData = {
        ...res,
      };
      return resData;
    }
  } catch (error) {
    console.log(error);
  }
};
