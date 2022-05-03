type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type ReviewRelateToManyInput = {
  readonly create?: ReadonlyArray<ReviewCreateInput | null> | null;
  readonly connect?: ReadonlyArray<ReviewWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<ReviewWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ProductCategoryRelateToManyInput = {
  readonly create?: ReadonlyArray<ProductCategoryCreateInput | null> | null;
  readonly connect?: ReadonlyArray<ProductCategoryWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<ProductCategoryWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ProductImageRelateToOneInput = {
  readonly create?: ProductImageCreateInput | null;
  readonly connect?: ProductImageWhereUniqueInput | null;
  readonly disconnect?: ProductImageWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ProductWhereInput = {
  readonly AND?: ReadonlyArray<ProductWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ProductWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly reviews_every?: ReviewWhereInput | null;
  readonly reviews_some?: ReviewWhereInput | null;
  readonly reviews_none?: ReviewWhereInput | null;
  readonly status?: Scalars['String'] | null;
  readonly status_not?: Scalars['String'] | null;
  readonly status_contains?: Scalars['String'] | null;
  readonly status_not_contains?: Scalars['String'] | null;
  readonly status_starts_with?: Scalars['String'] | null;
  readonly status_not_starts_with?: Scalars['String'] | null;
  readonly status_ends_with?: Scalars['String'] | null;
  readonly status_not_ends_with?: Scalars['String'] | null;
  readonly status_i?: Scalars['String'] | null;
  readonly status_not_i?: Scalars['String'] | null;
  readonly status_contains_i?: Scalars['String'] | null;
  readonly status_not_contains_i?: Scalars['String'] | null;
  readonly status_starts_with_i?: Scalars['String'] | null;
  readonly status_not_starts_with_i?: Scalars['String'] | null;
  readonly status_ends_with_i?: Scalars['String'] | null;
  readonly status_not_ends_with_i?: Scalars['String'] | null;
  readonly status_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly category_every?: ProductCategoryWhereInput | null;
  readonly category_some?: ProductCategoryWhereInput | null;
  readonly category_none?: ProductCategoryWhereInput | null;
  readonly price?: Scalars['Int'] | null;
  readonly price_not?: Scalars['Int'] | null;
  readonly price_lt?: Scalars['Int'] | null;
  readonly price_lte?: Scalars['Int'] | null;
  readonly price_gt?: Scalars['Int'] | null;
  readonly price_gte?: Scalars['Int'] | null;
  readonly price_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly price_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly photo?: ProductImageWhereInput | null;
  readonly photo_is_null?: Scalars['Boolean'] | null;
};

export type ProductWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortProductsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'reviews_ASC'
  | 'reviews_DESC'
  | 'status_ASC'
  | 'status_DESC'
  | 'category_ASC'
  | 'category_DESC'
  | 'price_ASC'
  | 'price_DESC'
  | 'photo_ASC'
  | 'photo_DESC';

export type ProductUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly reviews?: ReviewRelateToManyInput | null;
  readonly status?: Scalars['String'] | null;
  readonly category?: ProductCategoryRelateToManyInput | null;
  readonly price?: Scalars['Int'] | null;
  readonly photo?: ProductImageRelateToOneInput | null;
};

export type ProductsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ProductUpdateInput | null;
};

export type ProductCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly reviews?: ReviewRelateToManyInput | null;
  readonly status?: Scalars['String'] | null;
  readonly category?: ProductCategoryRelateToManyInput | null;
  readonly price?: Scalars['Int'] | null;
  readonly photo?: ProductImageRelateToOneInput | null;
};

export type ProductsCreateInput = {
  readonly data?: ProductCreateInput | null;
};

export type CloudinaryImageFormat = {
  readonly prettyName?: Scalars['String'] | null;
  readonly width?: Scalars['String'] | null;
  readonly height?: Scalars['String'] | null;
  readonly crop?: Scalars['String'] | null;
  readonly aspect_ratio?: Scalars['String'] | null;
  readonly gravity?: Scalars['String'] | null;
  readonly zoom?: Scalars['String'] | null;
  readonly x?: Scalars['String'] | null;
  readonly y?: Scalars['String'] | null;
  readonly format?: Scalars['String'] | null;
  readonly fetch_format?: Scalars['String'] | null;
  readonly quality?: Scalars['String'] | null;
  readonly radius?: Scalars['String'] | null;
  readonly angle?: Scalars['String'] | null;
  readonly effect?: Scalars['String'] | null;
  readonly opacity?: Scalars['String'] | null;
  readonly border?: Scalars['String'] | null;
  readonly background?: Scalars['String'] | null;
  readonly overlay?: Scalars['String'] | null;
  readonly underlay?: Scalars['String'] | null;
  readonly default_image?: Scalars['String'] | null;
  readonly delay?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly color_space?: Scalars['String'] | null;
  readonly dpr?: Scalars['String'] | null;
  readonly page?: Scalars['String'] | null;
  readonly density?: Scalars['String'] | null;
  readonly flags?: Scalars['String'] | null;
  readonly transformation?: Scalars['String'] | null;
};

export type ProductRelateToOneInput = {
  readonly create?: ProductCreateInput | null;
  readonly connect?: ProductWhereUniqueInput | null;
  readonly disconnect?: ProductWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ProductImageWhereInput = {
  readonly AND?: ReadonlyArray<ProductImageWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ProductImageWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText?: Scalars['String'] | null;
  readonly altText_not?: Scalars['String'] | null;
  readonly altText_contains?: Scalars['String'] | null;
  readonly altText_not_contains?: Scalars['String'] | null;
  readonly altText_starts_with?: Scalars['String'] | null;
  readonly altText_not_starts_with?: Scalars['String'] | null;
  readonly altText_ends_with?: Scalars['String'] | null;
  readonly altText_not_ends_with?: Scalars['String'] | null;
  readonly altText_i?: Scalars['String'] | null;
  readonly altText_not_i?: Scalars['String'] | null;
  readonly altText_contains_i?: Scalars['String'] | null;
  readonly altText_not_contains_i?: Scalars['String'] | null;
  readonly altText_starts_with_i?: Scalars['String'] | null;
  readonly altText_not_starts_with_i?: Scalars['String'] | null;
  readonly altText_ends_with_i?: Scalars['String'] | null;
  readonly altText_not_ends_with_i?: Scalars['String'] | null;
  readonly altText_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly product?: ProductWhereInput | null;
  readonly product_is_null?: Scalars['Boolean'] | null;
};

export type ProductImageWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortProductImagesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'altText_ASC'
  | 'altText_DESC'
  | 'product_ASC'
  | 'product_DESC';

export type ProductImageUpdateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly product?: ProductRelateToOneInput | null;
};

export type ProductImagesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ProductImageUpdateInput | null;
};

export type ProductImageCreateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly product?: ProductRelateToOneInput | null;
};

export type ProductImagesCreateInput = {
  readonly data?: ProductImageCreateInput | null;
};

export type ReviewWhereInput = {
  readonly AND?: ReadonlyArray<ReviewWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ReviewWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly review?: Scalars['String'] | null;
  readonly review_not?: Scalars['String'] | null;
  readonly review_contains?: Scalars['String'] | null;
  readonly review_not_contains?: Scalars['String'] | null;
  readonly review_starts_with?: Scalars['String'] | null;
  readonly review_not_starts_with?: Scalars['String'] | null;
  readonly review_ends_with?: Scalars['String'] | null;
  readonly review_not_ends_with?: Scalars['String'] | null;
  readonly review_i?: Scalars['String'] | null;
  readonly review_not_i?: Scalars['String'] | null;
  readonly review_contains_i?: Scalars['String'] | null;
  readonly review_not_contains_i?: Scalars['String'] | null;
  readonly review_starts_with_i?: Scalars['String'] | null;
  readonly review_not_starts_with_i?: Scalars['String'] | null;
  readonly review_ends_with_i?: Scalars['String'] | null;
  readonly review_not_ends_with_i?: Scalars['String'] | null;
  readonly review_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly review_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly customerId?: Scalars['String'] | null;
  readonly customerId_not?: Scalars['String'] | null;
  readonly customerId_contains?: Scalars['String'] | null;
  readonly customerId_not_contains?: Scalars['String'] | null;
  readonly customerId_starts_with?: Scalars['String'] | null;
  readonly customerId_not_starts_with?: Scalars['String'] | null;
  readonly customerId_ends_with?: Scalars['String'] | null;
  readonly customerId_not_ends_with?: Scalars['String'] | null;
  readonly customerId_i?: Scalars['String'] | null;
  readonly customerId_not_i?: Scalars['String'] | null;
  readonly customerId_contains_i?: Scalars['String'] | null;
  readonly customerId_not_contains_i?: Scalars['String'] | null;
  readonly customerId_starts_with_i?: Scalars['String'] | null;
  readonly customerId_not_starts_with_i?: Scalars['String'] | null;
  readonly customerId_ends_with_i?: Scalars['String'] | null;
  readonly customerId_not_ends_with_i?: Scalars['String'] | null;
  readonly customerId_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly customerId_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly rating?: Scalars['Int'] | null;
  readonly rating_not?: Scalars['Int'] | null;
  readonly rating_lt?: Scalars['Int'] | null;
  readonly rating_lte?: Scalars['Int'] | null;
  readonly rating_gt?: Scalars['Int'] | null;
  readonly rating_gte?: Scalars['Int'] | null;
  readonly rating_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly rating_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly product?: ProductWhereInput | null;
  readonly product_is_null?: Scalars['Boolean'] | null;
};

export type ReviewWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortReviewsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'review_ASC'
  | 'review_DESC'
  | 'customerId_ASC'
  | 'customerId_DESC'
  | 'rating_ASC'
  | 'rating_DESC'
  | 'product_ASC'
  | 'product_DESC';

export type ReviewUpdateInput = {
  readonly review?: Scalars['String'] | null;
  readonly customerId?: Scalars['String'] | null;
  readonly rating?: Scalars['Int'] | null;
  readonly product?: ProductRelateToOneInput | null;
};

export type ReviewsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ReviewUpdateInput | null;
};

export type ReviewCreateInput = {
  readonly review?: Scalars['String'] | null;
  readonly customerId?: Scalars['String'] | null;
  readonly rating?: Scalars['Int'] | null;
  readonly product?: ProductRelateToOneInput | null;
};

export type ReviewsCreateInput = {
  readonly data?: ReviewCreateInput | null;
};

export type ProductRelateToManyInput = {
  readonly create?: ReadonlyArray<ProductCreateInput | null> | null;
  readonly connect?: ReadonlyArray<ProductWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<ProductWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ProductCategoryWhereInput = {
  readonly AND?: ReadonlyArray<ProductCategoryWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ProductCategoryWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly products_every?: ProductWhereInput | null;
  readonly products_some?: ProductWhereInput | null;
  readonly products_none?: ProductWhereInput | null;
};

export type ProductCategoryWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortProductCategoriesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'products_ASC'
  | 'products_DESC';

export type ProductCategoryUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
};

export type ProductCategoriesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ProductCategoryUpdateInput | null;
};

export type ProductCategoryCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
};

export type ProductCategoriesCreateInput = {
  readonly data?: ProductCategoryCreateInput | null;
};

export type WishListItemRelateToManyInput = {
  readonly create?: ReadonlyArray<WishListItemCreateInput | null> | null;
  readonly connect?: ReadonlyArray<WishListItemWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<WishListItemWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type WishListWhereInput = {
  readonly AND?: ReadonlyArray<WishListWhereInput | null> | null;
  readonly OR?: ReadonlyArray<WishListWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly customerId?: Scalars['String'] | null;
  readonly customerId_not?: Scalars['String'] | null;
  readonly customerId_contains?: Scalars['String'] | null;
  readonly customerId_not_contains?: Scalars['String'] | null;
  readonly customerId_starts_with?: Scalars['String'] | null;
  readonly customerId_not_starts_with?: Scalars['String'] | null;
  readonly customerId_ends_with?: Scalars['String'] | null;
  readonly customerId_not_ends_with?: Scalars['String'] | null;
  readonly customerId_i?: Scalars['String'] | null;
  readonly customerId_not_i?: Scalars['String'] | null;
  readonly customerId_contains_i?: Scalars['String'] | null;
  readonly customerId_not_contains_i?: Scalars['String'] | null;
  readonly customerId_starts_with_i?: Scalars['String'] | null;
  readonly customerId_not_starts_with_i?: Scalars['String'] | null;
  readonly customerId_ends_with_i?: Scalars['String'] | null;
  readonly customerId_not_ends_with_i?: Scalars['String'] | null;
  readonly customerId_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly customerId_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly wishListItems_every?: WishListItemWhereInput | null;
  readonly wishListItems_some?: WishListItemWhereInput | null;
  readonly wishListItems_none?: WishListItemWhereInput | null;
};

export type WishListWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortWishListsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'customerId_ASC'
  | 'customerId_DESC'
  | 'wishListItems_ASC'
  | 'wishListItems_DESC';

export type WishListUpdateInput = {
  readonly customerId?: Scalars['String'] | null;
  readonly wishListItems?: WishListItemRelateToManyInput | null;
};

export type WishListsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: WishListUpdateInput | null;
};

export type WishListCreateInput = {
  readonly customerId?: Scalars['String'] | null;
  readonly wishListItems?: WishListItemRelateToManyInput | null;
};

export type WishListsCreateInput = {
  readonly data?: WishListCreateInput | null;
};

export type WishListRelateToOneInput = {
  readonly create?: WishListCreateInput | null;
  readonly connect?: WishListWhereUniqueInput | null;
  readonly disconnect?: WishListWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type WishListItemWhereInput = {
  readonly AND?: ReadonlyArray<WishListItemWhereInput | null> | null;
  readonly OR?: ReadonlyArray<WishListItemWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly productId?: Scalars['String'] | null;
  readonly productId_not?: Scalars['String'] | null;
  readonly productId_contains?: Scalars['String'] | null;
  readonly productId_not_contains?: Scalars['String'] | null;
  readonly productId_starts_with?: Scalars['String'] | null;
  readonly productId_not_starts_with?: Scalars['String'] | null;
  readonly productId_ends_with?: Scalars['String'] | null;
  readonly productId_not_ends_with?: Scalars['String'] | null;
  readonly productId_i?: Scalars['String'] | null;
  readonly productId_not_i?: Scalars['String'] | null;
  readonly productId_contains_i?: Scalars['String'] | null;
  readonly productId_not_contains_i?: Scalars['String'] | null;
  readonly productId_starts_with_i?: Scalars['String'] | null;
  readonly productId_not_starts_with_i?: Scalars['String'] | null;
  readonly productId_ends_with_i?: Scalars['String'] | null;
  readonly productId_not_ends_with_i?: Scalars['String'] | null;
  readonly productId_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly productId_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly wishList?: WishListWhereInput | null;
  readonly wishList_is_null?: Scalars['Boolean'] | null;
  readonly wishListId?: Scalars['String'] | null;
  readonly wishListId_not?: Scalars['String'] | null;
  readonly wishListId_contains?: Scalars['String'] | null;
  readonly wishListId_not_contains?: Scalars['String'] | null;
  readonly wishListId_starts_with?: Scalars['String'] | null;
  readonly wishListId_not_starts_with?: Scalars['String'] | null;
  readonly wishListId_ends_with?: Scalars['String'] | null;
  readonly wishListId_not_ends_with?: Scalars['String'] | null;
  readonly wishListId_i?: Scalars['String'] | null;
  readonly wishListId_not_i?: Scalars['String'] | null;
  readonly wishListId_contains_i?: Scalars['String'] | null;
  readonly wishListId_not_contains_i?: Scalars['String'] | null;
  readonly wishListId_starts_with_i?: Scalars['String'] | null;
  readonly wishListId_not_starts_with_i?: Scalars['String'] | null;
  readonly wishListId_ends_with_i?: Scalars['String'] | null;
  readonly wishListId_not_ends_with_i?: Scalars['String'] | null;
  readonly wishListId_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly wishListId_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type WishListItemWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortWishListItemsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'productId_ASC'
  | 'productId_DESC'
  | 'wishList_ASC'
  | 'wishList_DESC'
  | 'wishListId_ASC'
  | 'wishListId_DESC';

export type WishListItemUpdateInput = {
  readonly productId?: Scalars['String'] | null;
  readonly wishList?: WishListRelateToOneInput | null;
  readonly wishListId?: Scalars['String'] | null;
};

export type WishListItemsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: WishListItemUpdateInput | null;
};

export type WishListItemCreateInput = {
  readonly productId?: Scalars['String'] | null;
  readonly wishList?: WishListRelateToOneInput | null;
  readonly wishListId?: Scalars['String'] | null;
};

export type WishListItemsCreateInput = {
  readonly data?: WishListItemCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type ProductListTypeInfo = {
  key: 'Product';
  fields:
    | 'id'
    | 'name'
    | 'description'
    | 'reviews'
    | 'status'
    | 'category'
    | 'price'
    | 'photo';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly reviews?: string | null;
    readonly status?: string | null;
    readonly category?: string | null;
    readonly price?: number | null;
    readonly photo?: string | null;
  };
  inputs: {
    where: ProductWhereInput;
    create: ProductCreateInput;
    update: ProductUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ProductWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortProductsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ProductListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ProductListTypeInfo,
    ProductListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ProductListTypeInfo,
  ProductListTypeInfo['fields']
>;

export type ProductImageListTypeInfo = {
  key: 'ProductImage';
  fields: 'id' | 'image' | 'altText' | 'product';
  backing: {
    readonly id: string;
    readonly image?: any;
    readonly altText?: string | null;
    readonly product?: string | null;
  };
  inputs: {
    where: ProductImageWhereInput;
    create: ProductImageCreateInput;
    update: ProductImageUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ProductImageWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortProductImagesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ProductImageListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ProductImageListTypeInfo,
    ProductImageListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ProductImageListTypeInfo,
  ProductImageListTypeInfo['fields']
>;

export type ReviewListTypeInfo = {
  key: 'Review';
  fields: 'id' | 'review' | 'customerId' | 'rating' | 'product';
  backing: {
    readonly id: string;
    readonly review?: string | null;
    readonly customerId?: string | null;
    readonly rating?: number | null;
    readonly product?: string | null;
  };
  inputs: {
    where: ReviewWhereInput;
    create: ReviewCreateInput;
    update: ReviewUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ReviewWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortReviewsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ReviewListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ReviewListTypeInfo,
    ReviewListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ReviewListTypeInfo,
  ReviewListTypeInfo['fields']
>;

export type ProductCategoryListTypeInfo = {
  key: 'ProductCategory';
  fields: 'id' | 'name' | 'products';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly products?: string | null;
  };
  inputs: {
    where: ProductCategoryWhereInput;
    create: ProductCategoryCreateInput;
    update: ProductCategoryUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ProductCategoryWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortProductCategoriesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ProductCategoryListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ProductCategoryListTypeInfo,
    ProductCategoryListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ProductCategoryListTypeInfo,
  ProductCategoryListTypeInfo['fields']
>;

export type WishListListTypeInfo = {
  key: 'WishList';
  fields: 'id' | 'customerId' | 'wishListItems';
  backing: {
    readonly id: string;
    readonly customerId?: string | null;
    readonly wishListItems?: string | null;
  };
  inputs: {
    where: WishListWhereInput;
    create: WishListCreateInput;
    update: WishListUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: WishListWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortWishListsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type WishListListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    WishListListTypeInfo,
    WishListListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  WishListListTypeInfo,
  WishListListTypeInfo['fields']
>;

export type WishListItemListTypeInfo = {
  key: 'WishListItem';
  fields: 'id' | 'productId' | 'wishList' | 'wishListId';
  backing: {
    readonly id: string;
    readonly productId?: string | null;
    readonly wishList?: string | null;
    readonly wishListId?: string | null;
  };
  inputs: {
    where: WishListItemWhereInput;
    create: WishListItemCreateInput;
    update: WishListItemUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: WishListItemWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortWishListItemsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type WishListItemListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    WishListItemListTypeInfo,
    WishListItemListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  WishListItemListTypeInfo,
  WishListItemListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Product: ProductListTypeInfo;
  readonly ProductImage: ProductImageListTypeInfo;
  readonly Review: ReviewListTypeInfo;
  readonly ProductCategory: ProductCategoryListTypeInfo;
  readonly WishList: WishListListTypeInfo;
  readonly WishListItem: WishListItemListTypeInfo;
};
