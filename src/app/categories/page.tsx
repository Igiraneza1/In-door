import LivingRoom from "./living-room/page"
import Bathroom from "./Bathroom/page"
import Bedroom from "./bedroom/page"
import Kitchen from "./kitcken/page";
export default function CategoriesPage() {
  return (
    <div className="max-w-5xl bg-white mx-auto p-10">
      < Bathroom/>
      < LivingRoom/>
      <Bedroom/>
      <Kitchen/>
    </div>
  );
}