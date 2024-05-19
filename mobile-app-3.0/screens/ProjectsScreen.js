import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import Navbar from "../components/Navbar";
import BottomBar from "../components/BottomBar";
import ProjectItem from "../components/ProjectItem";
import { getImages, parse_url } from "../utils/utils";

export default function ProjectsScreen({ navigation }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = "test-user"; // Replace with actual username

  const fetchProjects = async () => {
    try {
      const images = await getImages(username);
      console.log("Images:", images);

      console.log("NAME:", parse_url(images[0]));

      const projectDetails = images.map((imageUrl) => ({
        imageUrl,
        name: parse_url(imageUrl),
      }));

      console.log("Project Details:", projectDetails);
      setProjects(projectDetails);

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
          renderItem={({ item }) => (
            <ProjectItem imageUrl={item.imageUrl} name={item.name} />
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          contentContainerStyle={styles.grid}
        />
      </View>
      <BottomBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    justifyContent: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
