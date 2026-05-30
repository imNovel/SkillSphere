import { Card, Button, Chip } from "@heroui/react";
import { ClockFill, PersonFill, StarFill } from "@gravity-ui/icons";

import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <Card className="w-50% border-0 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 group">
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
        />
        <Chip
          size="sm"
          className="absolute top-2.5 left-2.5 bg-violet-100 text-violet-800 text-[11px] font-medium"
        >
          {course.level}
        </Chip>
      </div>

      <div className="p-3.5 flex flex-col gap-2.5">
        <div className="flex items-center gap-1.5">
          <span><PersonFill /></span>
          <p className="text-xs text-default-400">{course.instructor}</p>
        </div>

        <h3 className="text-sm font-medium leading-snug line-clamp-2 text-default-800">
          {course.title}
        </h3>

        <div className="flex items-center gap-2.5">
          <span className="flex items-center gap-1 text-xs font-medium bg-amber-50 text-amber-800 px-2 py-0.5 rounded-full">
            <StarFill size={11} className="text-amber-500" />
            {course.rating}
          </span>
          <span className="flex items-center gap-1 text-xs text-default-400">
            <ClockFill size={12} />
            {course.duration}
          </span>
        </div>

        <div className="border-t border-default-100" />

        <div className="flex items-center justify-between">
          <span className="text-base font-semibold text-default-900">
            ${course.price}
          </span>
          <Link href={`/courses/${course.id}`}>
            <Button
              size="sm"
              className="bg-violet-600 text-white text-xs font-medium rounded-lg px-4 h-8"
              endContent={<span className="text-[11px]">→</span>}
            >
              Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
