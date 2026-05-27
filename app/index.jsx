import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import BottomNav from "../components/BottomNav";

const features = [
  {
    id: 1,
    title: "EPS Book",
    subtitle: "Read all chapters",
    icon: (
      <MaterialCommunityIcons
        name="book-open-variant"
        size={26}
        color="#2563eb"
      />
    ),
    bg: "bg-blue-100",
  },

  {
    id: 2,
    title: "Quiz",
    subtitle: "Test your knowledge",
    icon: (
      <Ionicons
        name="help-circle"
        size={26}
        color="#7c3aed"
      />
    ),
    bg: "bg-purple-100",
  },

  {
    id: 3,
    title: "Vulaboli",
    subtitle: "Important notes",
    icon: (
      <MaterialCommunityIcons
        name="format-list-bulleted"
        size={26}
        color="#ea580c"
      />
    ),
    bg: "bg-orange-100",
  },

  {
    id: 4,
    title: "Mock Test",
    subtitle: "Full length practice",
    icon: (
      <Ionicons
        name="checkbox"
        size={26}
        color="#16a34a"
      />
    ),
    bg: "bg-green-100",
  },

  {
    id: 5,
    title: "Progress",
    subtitle: "Track your journey",
    icon: (
      <Ionicons
        name="bar-chart"
        size={26}
        color="#2563eb"
      />
    ),
    bg: "bg-blue-100",
  },

  {
    id: 6,
    title: "Favorites",
    subtitle: "Saved items",
    icon: (
      <Ionicons
        name="star"
        size={26}
        color="#e11d48"
      />
    ),
    bg: "bg-rose-100",
  },
];

const progressItems = [
  {
    label: "Chapters Completed",
    value: "26 / 40",
  },

  {
    label: "Quizzes Completed",
    value: "18",
  },

  {
    label: "Mock Tests Completed",
    value: "6",
  },
];

const Home = () => {
  return (
    <View className="flex-1 bg-gray-100">
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1e3a8a"
      />

      {/* Scroll Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 90,
        }}
      >
        {/* Header */}
        <View className="bg-blue-900 px-5 pt-12 pb-6">
          <View className="flex-row items-center justify-between mb-5">
            <TouchableOpacity>
              <Ionicons
                name="menu"
                size={26}
                color="white"
              />
            </TouchableOpacity>

            <Text className="text-white text-xl font-bold tracking-wide">
              EPS TOPIC
            </Text>

            <TouchableOpacity>
              <Ionicons
                name="moon-outline"
                size={22}
                color="white"
              />
            </TouchableOpacity>
          </View>

          {/* Welcome Banner */}
          <View className="bg-blue-700 rounded-2xl p-5 flex-row items-center justify-between">
            <View className="flex-1 pr-4">
              <Text className="text-blue-200 text-xs mb-1">
                Welcome to
              </Text>

              <Text className="text-white text-2xl font-bold">
                EPS TOPIC
              </Text>

              <Text className="text-blue-200 text-xs mt-2 leading-4">
                Your complete solution for{"\n"}
                EPS(Employment Permit System)
                {"\n"}
                preparation.
              </Text>
            </View>

            <View className="items-center justify-center">
              <MaterialCommunityIcons
                name="book-open-page-variant"
                size={64}
                color="rgba(255,255,255,0.35)"
              />
            </View>
          </View>
        </View>

        {/* Main Content */}
        <View className="px-4 pt-5">
          {/* Explore Features */}
          <Text className="text-gray-800 text-base font-bold mb-3">
            Explore Features
          </Text>

          <View className="flex-row flex-wrap justify-between">
            {features.map((item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.85}
                className="bg-white rounded-2xl p-4 mb-3 items-center"
                style={{ width: "31%" }}
              >
                <View
                  className={`${item.bg} rounded-xl p-3 mb-2`}
                >
                  {item.icon}
                </View>

                <Text className="text-gray-800 text-xs font-semibold text-center">
                  {item.title}
                </Text>

                <Text className="text-gray-400 text-xs text-center mt-0.5">
                  {item.subtitle}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Your Progress */}
          <Text className="text-gray-800 text-base font-bold mb-3 mt-1">
            Your Progress
          </Text>

          <View className="bg-white rounded-2xl p-4 mb-3">
            <View className="flex-row items-center">
              {/* Circle Progress */}
              <View className="items-center justify-center mr-4">
                <View className="w-20 h-20 rounded-full border-4 border-blue-600 items-center justify-center bg-blue-50">
                  <Text className="text-blue-700 text-lg font-bold">
                    65%
                  </Text>

                  <Text className="text-blue-400 text-xs">
                    Overall
                  </Text>
                </View>
              </View>

              {/* Progress Items */}
              <View className="flex-1">
                {progressItems.map((item, index) => (
                  <View
                    key={index}
                    className="flex-row justify-between items-center py-1.5 border-b border-gray-100"
                    style={
                      index === progressItems.length - 1
                        ? { borderBottomWidth: 0 }
                        : {}
                    }
                  >
                    <Text className="text-gray-500 text-xs flex-1">
                      {item.label}
                    </Text>

                    <Text className="text-gray-800 text-xs font-bold">
                      {item.value}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* Keep Going Banner */}
          <View className="bg-purple-600 rounded-2xl p-4 mb-6 flex-row items-center">
            <View className="bg-yellow-400 rounded-full p-2 mr-3">
              <FontAwesome5
                name="trophy"
                size={18}
                color="#92400e"
              />
            </View>

            <View>
              <Text className="text-white font-bold text-sm">
                Keep going!
              </Text>

              <Text className="text-purple-200 text-xs mt-0.5">
                Your hard work today will lead to success
                tomorrow.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
};

export default Home;