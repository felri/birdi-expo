import React, { useState, useEffect } from "react";
import { ProductProps } from "../components/ProductItem";
import { ProductList } from "../components/ProductList";
import { SearchItem } from "../components/SearchItem";
import {
  Text,
  Pressable,
  Spinner,
  VStack,
} from "@gluestack-ui/themed-native-base";

export const Search = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setSearch("");
    try {
      const response = await fetch("https://api.sampleapis.com/coffee/hot");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (text: string) => {
    setSearch(text);
    const filtered = products.filter((product: ProductProps) =>
      product.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <VStack flex={1} padding="16px" width="100%" alignSelf="stretch">
      <Text fontSize="2xl" fontWeight="bold" color="#0047FF" marginBottom={4} textAlign={"center"}>
        Coffee Page
      </Text>
      <SearchItem search={search} setSearch={handleSearch} />
      {loading ? (
        <Spinner size="lg" color="#0047FF" />
      ) : (
        <ProductList products={filteredProducts} />
      )}
      <Pressable
        onPress={fetchData}
        bg="#0047FF"
        padding={4}
        borderRadius={8}
        alignItems="center"
        position="absolute"
        bottom={4}
        alignSelf="center"
        right="32px"
        left="32px"
      >
        <Text color="#fff" fontSize="md">
          Refresh
        </Text>
      </Pressable>
    </VStack>
  );
};

