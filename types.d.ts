export interface SnippetDataType {
  data: {
    data: SnippetType[];
  };
}

export interface CategoryDataType {
  data: {
    data: CategoryType[];
  };
}

export interface TagDataType {
  data: {
    data: TagType[];
  };
}

export interface SnippetType {
  attributes: {
    name: string;
    description: string;
    language: string;
    createdAt: string;
    updatedAt: string;
    code: ComponentType[];
    tags: {
      data: {
        attributes: {
          name: string;
          slug: string;
          createdAt: string;
          updatedAt: string;
        };
      }[];
    };
    categories: {
      data: CategoryType[];
    };
  };
}

export interface ComponentType {
  code: {
    id: number;
    code: string;
  };
}

export interface CategoryType {
  attributes: {
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface TagType {
  attributes: {
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
  };
}
