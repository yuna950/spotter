import { useEffect, useState } from "react";
import { useScrollTop } from "../../lib/useScrollTop";
import { getCourse } from "../api/TourApi";
import Loading from "../../components/Loading";
import Section_2 from "./components/Section_2";

export default function ThemeDetail() {
  useScrollTop();
  const [loading, setLoading] = useState(true);
  const [courseData, setCourseData] = useState();
  useEffect(() => {
    (async () => {
      try {
        const course = await getCourse("부산", 2, "DNWW");
        setCourseData(course?.response?.body?.items?.item[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  const minutes = Number(courseData.crsTotlRqrmHour);

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return (
    <div className="px-[20px] lg:px-[40px] xl:px-[250px]">
      <div className="py-[50px]">
        <p className="text-[#2563EB]">{courseData?.sigun}</p>
        <h2 className="text-[30px] lg:text-[50px] xl:text-[60px] font-bold">
          {courseData?.crsKorNm}
        </h2>
        <p className="mt-3  text-lg">
          - 소요시간 : {Math.floor(Number(courseData.crsTotlRqrmHour) / 60)}시간{" "}
          {Number(courseData.crsTotlRqrmHour) % 60 > 0 &&
            `${Number(courseData.crsTotlRqrmHour) % 60}분`}
        </p>
        <p>- {courseData.crsDstnc}Km </p>
        <p>- 난이도 : ⭐⭐</p>
      </div>

      <Section_2 course={courseData} />
    </div>
  );
}
