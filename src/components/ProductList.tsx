import React from "react";
import { FlatList } from "react-native";
import { Box, Text, VStack, Center } from "@gluestack-ui/themed-native-base";
import { ProductItem } from "./ProductItem";

interface ProductListProps {
  products: Array<{
    title: string;
    description: string;
    image: string;
  }>;
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <Center flex={1}>
        <Text>No products available.</Text>
      </Center>
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Box marginY={2}>
          <ProductItem product={item} />
        </Box>
      )}
      contentContainerStyle={{ paddingBottom: 80 }}
    />
  );
};
