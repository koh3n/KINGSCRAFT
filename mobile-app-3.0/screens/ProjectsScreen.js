import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import Navbar from "../components/Navbar";
import BottomBar from "../components/BottomBar";
import ProjectItem from "../components/ProjectItem";
import { getImages } from "../utils/utils";

export default function ProjectsScreen({ navigation }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = "Y0f8s3ZNqGP0ZLEOb80Yo3jUp7x1"; // Replace with actual username

  const fetchProjects = async () => {
    try {
      const images = await getImages(username);
      console.log("Images:", images);

      setProjects(images);
      console.log("Projects:", projects);
    } catch (error) {
      console.error("Error fetching images: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <View style={styles.content}>
        <FlatList
          data={projects}
          renderItem={({ item }) => <ProjectItem imageUrl={item} />}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </View>
      <BottomBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d1d1d1",
  },
  content: {
    flex: 1,
  },
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
