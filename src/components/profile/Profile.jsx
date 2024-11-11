import ProfileDetails from "./ProfileDetails";
import ProfileOptions from "./ProfileOptions";

const Profile = () => {
  return (
    <div className="w-full h-full flex flex-col rounded-2xl overflow-y-hidden p-6">
      <ProfileDetails />
      <ProfileOptions />
    </div>
  );
};

export default Profile;
