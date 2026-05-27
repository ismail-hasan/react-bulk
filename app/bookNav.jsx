import { Text, View } from "react-native";
import BottomNav from "../components/BottomNav";

const bookNav = () => {
      return (
            <View className="flex-1 bg-white justify-between">

                  <View className="flex-1 items-center justify-center">
                        <Text className="text-3xl font-bold">
                              Book Page
                        </Text>
                  </View>

                  <BottomNav />
            </View>
      );
}
export default bookNav