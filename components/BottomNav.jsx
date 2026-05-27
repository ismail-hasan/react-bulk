import { Ionicons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const BottomNav = () => {
      const pathname = usePathname();

      const tabs = [
            {
                  label: "Home",
                  icon: "home",
                  path: "/",
            },
            {
                  label: "Book",
                  icon: "book-outline",
                  path: "/bookNav",
            },
            {
                  label: "Quiz",
                  icon: "help-circle-outline",
                  path: "/quiz",
            },
            {
                  label: "Mock",
                  icon: "document-text-outline",
                  path: "/mocktest",
            },
            {
                  label: "Progress",
                  icon: "bar-chart-outline",
                  path: "/progress",
            },
      ];

      return (
            <View className="bg-white border-t border-gray-200 flex-row justify-around py-3 px-2">
                  {tabs.map((tab) => {
                        const active = pathname === tab.path;

                        return (
                              <TouchableOpacity
                                    key={tab.label}
                                    onPress={() => router.push(tab.path)}
                                    className="items-center"
                              >
                                    <Ionicons
                                          name={tab.icon}
                                          size={22}
                                          color={active ? "#2563eb" : "#9ca3af"}
                                    />

                                    <Text
                                          className={`text-xs mt-1 ${active
                                                      ? "text-blue-600 font-semibold"
                                                      : "text-gray-400"
                                                }`}
                                    >
                                          {tab.label}
                                    </Text>
                              </TouchableOpacity>
                        );
                  })}
            </View>
      );
}
export default BottomNav