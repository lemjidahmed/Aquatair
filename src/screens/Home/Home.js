import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../../components/Header/Header";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
export default function Home({ navigation }) {
  let dataSeuil = [];
  for (let index = 0; index < 30; index++) {
    dataSeuil.push(200);
  }
  const data = {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
    datasets: [
      {
        data: [
          12.59021323, 27.99682867, 37.73062499, 38.68819406, 47.89461337,
          57.97236649, 65.70236356, 73.61428212, 79.94857461, 85.20677577,
          90.91311233, 101.35312392, 113.59129871, 118.28105276, 122.90006248,
          123.95322568, 131.88985379, 140.01555776, 145.68892528, 147.77377957,
        ],
        color: () => `rgba(59, 110, 188, 0.75)`, // optional
        strokeWidth: 3, // optional
      },
      {
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147.77377957,
          156.03933593, 166.44186797, 176.99600674, 185.26567145, 195.52734395,
          199.97786794, 204.55765186, 221.17365195, 238.80003639, 240.93015021,
        ],
        color: () => `rgba(16, 227, 26, 0.75)`, // optional
        strokeWidth: 3, // optional
      },
      {
        data: dataSeuil,
        color: () => `rgba(255, 0, 0, 0.75)`, // optional
        strokeWidth: 4, // optional
      },
    ],
    legend: ["Consommation", "Prediction", "Seuil"], // optional
  };
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.25,
    color: () => `rgba(0,0,0,0.5)`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.HomeContainer}>
        <ScrollView
          contentContainerStyle={{
            paddingVertical: 10,
            justifyContent: "center",
          }}
        >
          <LineChart
            data={data}
            width={screenWidth * 0.975}
            height={250}
            chartConfig={chartConfig}
            withVerticalLabels={false}
            withDots={false}
            yLabelsOffset={5}
            style={{
              borderRadius: 12,
              borderColor: "#aaa",
              borderWidth: 1,
              shadowColor: "#000",
              shadowOffset: { width: -2, height: 3 },
              shadowOpacity: 0.25,
              shadowRadius: 2,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginVertical: 5,
              borderColor: "#aaa",
              borderRadius: 12,
              borderWidth: 1,
              padding: "5%",
              shadowColor: "#000",
              shadowOffset: { width: -2, height: 3 },
              shadowOpacity: 0.25,
              shadowRadius: 2,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "bold",
                fontSize: 18,
                color: "#3B6EBC",
              }}
            >
              Votre seuil
            </Text>
            <Text
              style={{ alignSelf: "center", fontWeight: "bold", fontSize: 18 }}
            >
              {dataSeuil[0]}
            </Text>
          </View>
          <View
            style={{
              marginVertical: 5,
              borderColor: "#aaa",
              borderRadius: 12,
              borderWidth: 1,
              padding: "5%",
              shadowColor: "#000",
              shadowOffset: { width: -2, height: 3 },
              shadowOpacity: 0.25,
              shadowRadius: 2,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "bold",
                fontSize: 24,
                marginVertical: 5,
              }}
            >
              Conseil du jour
            </Text>
            <Text style={{ alignSelf: "center", fontSize: 18 }}>
              Rincez les légumes dans un évier rempli à moitié et évitez de
              laisser couler l’eau.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  HomeContainer: { flex: 9, justifyContent: "center", alignItems: "center" },
  TouchableOpacity: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
  },
  subContainer: {
    justifyContent: "space-around",
    borderRadius: 6.25,
    backgroundColor: "lightgray",
    width: "95%",
    height: "95%",
  },
});
