import { ILocation } from "./ILocation";

interface IRestaurantOutput {
  /**
   * UUID of the restaurant
   */
  id: string;

  /**
   * UUID of the category
   */
  category: string;

  /**
   * Name of the restaurant
   */
  name: string;

  /**
   * Location of the restaurant as ILocation
   */
  location?: ILocation;

  menus?: Array<{
    id: any;

    startDate: string;
    endDate: string;
  }>;
}

export { IRestaurantOutput };
