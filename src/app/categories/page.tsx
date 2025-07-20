import LivingRoom from "./living-room/page"
import Bathroom from "./Bathroom/page"
import Bedroom from "./bedroom/page"
import Kitchen from "./kitcken/page";
import Dining from "./dinning/page"
export default function CategoriesPage() {
  return (
    <div className="max-w-5xl bg-white mx-auto p-5">
      <Bathroom/>
      <LivingRoom/>
      <Bedroom/>
      <Kitchen/>
      <Dining/>
    </div>
  );
}