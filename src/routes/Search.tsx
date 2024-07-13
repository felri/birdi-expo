import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
} from "react-native";
import { ProductProps } from "../components/ProductItem";
import { ProductList } from "../components/ProductList";
import { SearchItem } from "../components/SearchItem";

export const Search = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    setLoading(true);
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
    <View style={styles.container}>
      <Text style={styles.title}>Coffee Page</Text>
      <SearchItem search={search} setSearch={handleSearch} />
      {loading ? (
        <ActivityIndicator size="large" color="#0047FF" />
      ) : (
        <ProductList products={filteredProducts} />
      )}
      <Pressable onPress={fetchData} style={styles.button}>
        <Text style={styles.buttonText}>Refresh</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    width: "100%",
    alignSelf: "stretch", // Add this line to make the container take all the width space
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0047FF",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#0047FF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    position: "absolute",
    bottom: 16,
    width: "90%",
    right: "5%",
    left: "5%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
