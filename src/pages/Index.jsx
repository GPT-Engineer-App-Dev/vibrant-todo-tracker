import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Your Todo App</h1>
        <p className="mb-4">Stay organized and boost your productivity!</p>
        <Button asChild>
          <Link to="/todo">Go to Todo List</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
