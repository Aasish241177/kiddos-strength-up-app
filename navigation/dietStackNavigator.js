import { createStackNavigator } from '@react-navigation/stack';
import Header from "../components/Header"
import VegDiet from "../screens/VegDiet"
import NonVeg from "../screens/NonVeg"
import Diet from '../screens/diet'
import VegTabs from "./VegTabs"
import NonVegTabs from './Non-VegTabs'


const Stack = createStackNavigator();

const DietStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
       <Stack.Screen
        name="Diet"
        component={Diet}
        
      />
      <Stack.Screen
        name="VegDiet"
        component={VegTabs}
       
        
      />
      <Stack.Screen  name="NonVegDiet"
          component={NonVegTabs}
         />
    </Stack.Navigator>
  );
};
export default DietStack