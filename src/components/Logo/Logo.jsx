import { useFeatureFlag, useFeatureFlags } from "@harnessio/ff-react-client-sdk";

const Logo = () => {
  const isEnabled  = useFeatureFlag("awesomelogoheadergradient");
  const FeatureFlags = useFeatureFlags();
  console.log(FeatureFlags);
  if (isEnabled) {
    return (
      <h1 className="logo-title gradient">
        YourHOLLA
      </h1>
    );
  }
  return <h1 className='logo-title'>YourLogo</h1>;
};

export default Logo;
