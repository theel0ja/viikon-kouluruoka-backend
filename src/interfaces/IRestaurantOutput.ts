import { ILocation } from "./ILocation";

interface IRestaurantOutput {
  /**
   * Id of the restaurant
   */
  id: number;

  /**
   * Name of the restaurant
   */
  name: string;

  /**
   * Location of the restaurant as ILocation
   */
  location: ILocation;
}

export default IRestaurantOutput;
