export type LabelAPI = {
  category: string;
  name: string;
  options: OptionsAPI[];
  subcategories: SubcategoriesAPI[];
  hierarchical: string;
  grouped: string;
  sorted: string;
};

export type OptionsAPI = {
  tag: string;
  subcategory?: string;
  subcategories?: string[];
  name: string;
  description: string;
  count: string;
};

export type SubcategoriesAPI = {
  category: string;
  group: string;
  subcategory: string;
  name: string;
  description: string;
};

export type LabelCategory = {
  categoryName: string;
  options: LabelOption[];
};

export type LabelOption = {
  labelName: string;
  description: string;
  subcategoryName: string;
};
