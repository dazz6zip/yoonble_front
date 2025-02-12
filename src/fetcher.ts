import axios from "axios";

export interface IArtmake {
  id: number;
  name: string;
  price: number;
  description: string;
  discount: number;
  duration: number;
}

export const getArtmakes = async (): Promise<IArtmake[]> => {
  try {
    const response = await axios.get<IArtmake[]>("/api/artmake");
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
