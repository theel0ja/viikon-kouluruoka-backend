interface IMenuOutput {
  name: string; // Such as "Week 21"

  startDate: string;
  endDate: string;

  days: Array<{
    startDate?: string;
    endDate?: string;
    dateAsText?: string; // Such as "21.5.2018"

    meals: Array<{
      type: string;         // Such as "Breakfast"
      description: string;  // Such as "Porridge, juice"

      nutritions?: Array<{
        name: string; // Such as "Porridge"
        description: string; // Such as "water, oatmeal, salt"
      }>;
    }>;
  }>;
}

export { IMenuOutput };
