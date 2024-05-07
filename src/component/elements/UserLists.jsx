import { Avatar, AvatarImage } from '../parts/avatar';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent as ContentCard,
} from '../parts/card';

function UserLists({ data, balance, isLoading }) {
  return (
    <>
      <Card className="bg-white flex w-full border-none shadow">
        <CardHeader className="p-5">
          <Avatar className="h-[70px] w-[70px] flex rounded-md">
            <AvatarImage src={data.image} alt="Avatar" />
          </Avatar>
        </CardHeader>
        <ContentCard className="flex justify-between p-6 pl-0 items-center w-full">
          <div className="flex flex-col gap-3">
            <CardTitle className="text-base text-list font-bold">
              {data.username}
            </CardTitle>
            <CardDescription className="text-listSecondary">
              {data.phone_number}
            </CardDescription>
          </div>
          {balance && (
            <CardDescription className="text-success">$50000</CardDescription>
          )}
        </ContentCard>
      </Card>
    </>
  );
}

export default UserLists;
