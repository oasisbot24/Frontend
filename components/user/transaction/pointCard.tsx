import Icon from "@components/basic/icon";
import Card from "@components/user/card";

export default function PointCard() {
  return (
    <Card className="w-full p-4 mb-4">
      <div className="flex justify-between">
        <div>
          <div className="text-xs">Search for the vein of money</div>
          <div className="text-xs">Find your optimus bot</div>
        </div>
        <div className="flex h-[32px] leading-[32px]">
          <Icon src="/static/icon/point.svg" className="mr-2"></Icon>
          <div className="text-md sm:text-lg font-semibold">300,000 KRW</div>
        </div>
      </div>
    </Card>
  );
}
