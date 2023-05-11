import { useContext } from "react";
import UserContext from "../../api/contextApi";
import { useEffect } from "react";
import Rent_Section from "../../components/Rent_Section/Rent_Section";

const Rent_Page = () => {
  const { setIsHome } = useContext(UserContext);

  useEffect(() => {
    setIsHome(false);
  }, []);

  return (
    <div>
      <Rent_Section />
    </div>
  );
};

export default Rent_Page;
