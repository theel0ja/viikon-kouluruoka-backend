interface IAromiRestaurant {
  RestaurantId: string;
  Name: string;
  GeoLocationId: string;
  CategoryId: string;
  PrimaryLanguageId: number;
  ShowLabel: boolean;
  ShowNutrition: boolean;
  ShowTwoWeeksMenu: boolean;
  ShowThreeWeeksMenu: boolean;
  JMenus: any;
  Languages: any;
}

export { IAromiRestaurant };
