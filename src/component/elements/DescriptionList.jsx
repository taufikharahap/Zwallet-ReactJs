import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../parts/card';
function DescriptionLists({ title, description }) {
  return (
    <Card className="bg-white w-full border-none shadow">
      <CardHeader className="px-5 py-1">
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent className="p-5 pt-0 pb-[15px]">
        <CardTitle className="text-[22px]">{description}</CardTitle>
      </CardContent>
    </Card>
  );
}

export default DescriptionLists;
