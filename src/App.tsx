import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Game from "./pages/game/game";
import Leaderboard from "./pages/leaderboard/leaderboard";
import wallyEasy from "./assets/wally-easy.jpg";
import wallyMedium from "./assets/wally-medium.jpg";
import wallyHard from "./assets/wally-hard.jpeg";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/play/easy",
      element: <Game photo={wallyEasy} difficulty={"easy"} />,
    },
    {
      path: "/play/medium",
      element: <Game photo={wallyMedium} difficulty={"medium"} />,
    },
    {
      path: "/play/hard",
      element: <Game photo={wallyHard} difficulty={"hard"} />,
    },
    {
      path: "/leaderboard",
      element: <Leaderboard />,
    },
  ]);

  return <RouterProvider router={router} />;
}
