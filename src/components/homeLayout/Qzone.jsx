import image1 from "../../assets/swimming.png";
import image2 from "../../assets/class.png";
import image3 from "../../assets/playground.png";
const Qzone = () => {
  return (
    <div className="bg-gray-200 p-3">
      <h2 className="font-bold mb-5">QZone</h2>
      <div className="space-y-5 flex flex-col justify-center">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
