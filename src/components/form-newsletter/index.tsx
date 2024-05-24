import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";

export default function FormNewsletter() {
  return (
    <Card className="mx-0 bg-slate-200 p-4">
      <CardContent className="max-w-3xl !py-8 mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
          <h2 className="font-medium">Join our weekly Newsletter</h2>
          <Input type="email" placeholder="Email address" />
          <Button>Sign me up</Button>
        </div>
      </CardContent>
    </Card>
  );
}
