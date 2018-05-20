interface IAromiMenu {
  Start: string;
  End: string;
  Name: string;
  Selected: boolean;

  Days: Array<{
    Date: string;
    WeekDay: string;
    DateStr: string;
    IsVisible: string;

    Meals: Array<{
      MealType: string;
      Name: string;
      Price: string;
      Info: null;
      Translations: Array<{
        LanguageId: number;
        MealType: string;
        Name: string;
      }>
      Markings: any[];
      Nutritions: Array<{
        Name: string;
        Label: string;
        Items: any[];
      }>;
    }>;
  }>;
  Translations: Array<{
    LanguageId: number;
    Value: string;
  }>;
}

export { IAromiMenu };
