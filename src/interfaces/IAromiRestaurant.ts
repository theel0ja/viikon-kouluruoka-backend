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
  // FIXME: Test JMenus array
  JMenus:  Array<{
    MenuId: string;
    Start: string;
    End: string;
    LinkUrl: string;
  }>;
  Languages: any;
}

export { IAromiRestaurant };
