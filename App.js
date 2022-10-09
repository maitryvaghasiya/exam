import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { configStore, store } from './Extra/Redux/store';
import { Provider } from 'react-redux';
import { StackNavigation } from './Extra/Route/StackNavigation';

export default function App() {

  let storeA = configStore();

  return (
    <Provider store={storeA}>

     <NavigationContainer>
       <StackNavigation /> 
     </NavigationContainer>   

    </Provider>
  )
}