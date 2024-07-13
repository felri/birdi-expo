import React from "react";
import { Text, Image, HStack, VStack } from "native-base";

export interface ProductItemProps {
  product: ProductProps;
}

export interface ProductProps {
  title: string;
  description: string;
  image: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <HStack
      borderBottomWidth={1}
      borderBottomColor="#ddd"
      padding={2}
      alignItems="center"
    >
      <Image
        source={{ uri: product.image }}
        alt={product.title}
        size={24}
        borderRadius={8}
        marginRight={4}
      />
      <VStack flex={1} justifyContent="center">
        <Text fontSize="lg" fontWeight="bold" color="#0047FF">
          {product.title}
        </Text>
        <Text fontSize="sm" color="#555">
          {product.description}
        </Text>
      </VStack>
    </HStack>
  );
};
