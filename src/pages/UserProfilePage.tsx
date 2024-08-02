import UserProfileForm from "../forms/user-profile-form/userProfileForm"
import {useUpdateMyUser, useGetMyUser} from "../api/MyUserApi" 

const UserProfilePage = () =>  {
  const {updateUser, isLoading : isGetLoading} = useUpdateMyUser()
  const {currentUser, isLoading: isUpdateLoading} = useGetMyUser()
  
  if(isGetLoading){
    return <span>Loading</span>
  }
  
  if(!currentUser){
    return <span>Unable to load current User</span>
  }

  return (
    <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateLoading}/>
  )
}

export default UserProfilePage  