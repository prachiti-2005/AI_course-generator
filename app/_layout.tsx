import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import {UserDetailContext} from './../context/UserDetailContext';
import { useState } from "react";


export default function RootLayout() {
// to use extra font family
  useFonts({
    'outfit' : require('./../assets/fonts/AncizarSans-Regular.ttf'),
    'outfit-bold' : require('./../assets/fonts/AncizarSans-Bold.ttf'),
    'outfit-medium' : require('./../assets/fonts/AncizarSans-Medium.ttf'),
  })

  const [userDetail, setUserDetail] = useState();

  return(
    <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
    <Stack screenOptions={{
      headerShown : false
    }}>

    </Stack>
    </UserDetailContext.Provider>
  );
}
