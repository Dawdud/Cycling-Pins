import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { auth } from "../../config/firebase";
import ActivityMap from "../../Components/Map/ActivityMap"

const ProfilePage = () => {
  const user: any = useContext(UserContext);

  return (
    <ActivityMap></ActivityMap>
  )
};
export default ProfilePage;