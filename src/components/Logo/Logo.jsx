import { useFeatureFlag } from "@harnessio/ff-react-client-sdk";

const Logo = () => {
  const isEnabled  = useFeatureFlag("awesomelogoheadergradient");

  if (isEnabled) {
    return (
      <h1 className="logo-title gradient">
        YourLogo
      </h1>
    );
  }
  return <h1 className='logo-title'>YourLogo</h1>;
};

export default Logo;
