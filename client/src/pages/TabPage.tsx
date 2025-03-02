import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Dasboard from "./Dasboard";
import Content1 from "./Content1";
import Content2 from "./Content2";
export default function TabPage() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Videos</TabsTrigger>
        <TabsTrigger value="password">AI</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="m-5">
          <Content1 />
        </div>
      </TabsContent>
      <TabsContent value="password">
        <Content2 />
      </TabsContent>
    </Tabs>
  );
}
