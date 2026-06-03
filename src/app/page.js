import Banner from "@/components/Banner";
import Instructors from "@/components/Instructors";
import PopularCourses from "@/components/PopularCourses";
import Tips from "@/components/Tips";


export default function Home() {
  return (
    <div>
      <Banner />
      <PopularCourses />
      <Tips />
      <Instructors />
    </div>
  );
}
