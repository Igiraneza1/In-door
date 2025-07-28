import LivingRoom from "./living-room/page"
import Bathroom from "./Bathroom/page"
import Bedroom from "./bedroom/page"
import Kitchen from "./kitcken/page";
import Dining from "./dinning/page"
export default function CategoriesPage() {
  return (
    <div className="bg-white">
    <div className="max-w-6xl mx-auto p-5">
      <Bathroom/>
      <LivingRoom/>
      <Bedroom/>
      <Kitchen/>
      <Dining/>
    </div>
    </div>
  );
}