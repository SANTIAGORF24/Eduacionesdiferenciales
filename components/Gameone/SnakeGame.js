import React, { useEffect, useState } from "react";
import Image from "next/image";

const SnakeGame = () => {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [gameStarted, setGameStarted] = useState(false);
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState("right");
  const [score, setScore] = useState(0);
  const [headImageIndex, setHeadImageIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [obstacles, setObstacles] = useState([]);
  const [eatenCount, setEatenCount] = useState(0);
  const gridSize = 20; // Tamaño del mapa
  const cellSize = 30; // Tamaño de cada celda

  useEffect(() => {
    const updateDimensions = () => {
      setContainerSize({
        width: Math.min(gridSize * cellSize, window.innerWidth - 32),
        height: Math.min(gridSize * cellSize, window.innerHeight - 32),
      });
    };

    // Update dimensions on mount
    updateDimensions();

    // Update dimensions on window resize
    window.addEventListener("resize", updateDimensions);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [gridSize, cellSize]);

  const generateObstacles = () => {
    const newObstacles = [];
    while (newObstacles.length < 10) {
      const obstacle = {
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize),
      };
      if (
        !snake.some(
          (segment) => segment.x === obstacle.x && segment.y === obstacle.y
        ) &&
        obstacle.x !== food.x &&
        obstacle.y !== food.y &&
        !newObstacles.some(
          (existingObstacle) =>
            existingObstacle.x === obstacle.x &&
            existingObstacle.y === obstacle.y
        )
      ) {
        newObstacles.push(obstacle);
      }
    }

    // Generar nueva posición para la comida
    let newFoodPosition = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };
    while (
      newObstacles.some(
        (obstacle) =>
          obstacle.x === newFoodPosition.x && obstacle.y === newFoodPosition.y
      )
    ) {
      newFoodPosition = {
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize),
      };
    }

    setObstacles(newObstacles);
    setFood(newFoodPosition);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameStarted) {
        switch (e.key.toLowerCase()) {
          case "a":
          case "arrowleft":
            if (direction !== "right") setDirection("left");
            break;
          case "d":
          case "arrowright":
            if (direction !== "left") setDirection("right");
            break;
          case "w":
          case "arrowup":
            if (direction !== "down") setDirection("up");
            break;
          case "s":
          case "arrowdown":
            if (direction !== "up") setDirection("down");
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameStarted, direction]);

  useEffect(() => {
    const gameLoop = () => {
      if (gameStarted && !gameOver) {
        const head = { ...snake[0] };
        switch (direction) {
          case "right":
            head.x = (head.x + 1) % gridSize;
            break;
          case "left":
            head.x = (head.x - 1 + gridSize) % gridSize;
            break;
          case "up":
            head.y = (head.y - 1 + gridSize) % gridSize;
            break;
          case "down":
            head.y = (head.y + 1) % gridSize;
            break;
          default:
            break;
        }

        const newSnake = [head, ...snake.slice(0, -1)];

        const isGameOver = newSnake
          .slice(1)
          .some((segment) => segment.x === head.x && segment.y === head.y);

        if (
          obstacles.some(
            (obstacle) => obstacle.x === head.x && obstacle.y === head.y
          )
        ) {
          setGameOver(true);
          return;
        }

        if (isGameOver) {
          setGameOver(true);
          return;
        }

        if (head.x === food.x && head.y === food.y) {
          setScore(score + 1);
          setEatenCount(eatenCount + 1);
          setFood({
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize),
          });
          if (headImageIndex < 7) {
            setHeadImageIndex(headImageIndex + 1);
          } else {
            if (score + 1 === 8) {
              setGameOver(true);
            } else {
              setGameOver(false); // Cambiar a true si quieres que el juego termine después de alcanzar 8 puntos
            }
          }
          newSnake.push(snake[snake.length - 1]);
        }

        setSnake(newSnake);
      }
    };

    const interval = setInterval(gameLoop, 100);
    return () => clearInterval(interval);
  }, [
    gameStarted,
    snake,
    food,
    direction,
    score,
    headImageIndex,
    gameOver,
    obstacles,
    eatenCount,
  ]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setSnake([{ x: 10, y: 10 }]);
    setDirection("right");
    setHeadImageIndex(0);
    setFood({ x: 15, y: 15 });
    setEatenCount(0);

    // Generar nuevos obstáculos
    generateObstacles();
  };

  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="flex flex-col items-center justify-center w-full py-10 md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="mb-8 text-4xl font-bold text-orange-500">
            DiferencialSnake
          </div>
          <div
            className="relative mb-4"
            style={{
              width: containerSize.width,
              height: containerSize.height,
              border: "1px solid black",
              backgroundImage: 'url("/assets/img/selva3.jpg")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {snake.map((segment, index) => (
              <div
                key={index}
                className="absolute w-6 h-6 bg-orange-500 rounded-full"
                style={{
                  left: `${segment.x * cellSize}px`,
                  top: `${segment.y * cellSize}px`,
                }}
              />
            ))}

            {obstacles.map((obstacle, index) => (
              <div
                key={index}
                className="absolute w-6 h-6 bg-red-700"
                style={{
                  left: `${obstacle.x * cellSize}px`,
                  top: `${obstacle.y * cellSize}px`,
                }}
              />
            ))}
            <Image
              src={`/assets/img/ecu${headImageIndex + 1}.png`}
              alt="Snake Head"
              className="absolute"
              width={Math.min(cellSize * 5, containerSize.width / 4)}
              height={Math.min(cellSize * 5, containerSize.width / 4)}
              style={{
                left: `${(snake[0].x + 5) * cellSize}px`,
                top: `${snake[0].y * cellSize}px`,
              }}
            />
            <Image
              src="/assets/img/comida.png"
              alt="Food"
              className="absolute"
              width={cellSize}
              height={cellSize}
              style={{
                left: `${food.x * cellSize}px`,
                top: `${food.y * cellSize}px`,
              }}
            />
          </div>
          {!gameStarted && !gameOver && (
            <button
              className="mt-4 px-4 py-2 bg-orange-500 text-white rounded"
              onClick={startGame}
            >
              Jugar
            </button>
          )}
          {gameOver && (
            <div>
              {score === 8 ? (
                <div className="mt-4 text-xl">
                  ¡Ganaste! Puntuación: {score}
                </div>
              ) : (
                <div className="mt-4 text-xl">
                  ¡Perdiste! Puntuación: {score}
                </div>
              )}
              <button
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded"
                onClick={startGame}
              >
                Jugar de Nuevo
              </button>
            </div>
          )}
          {gameStarted && !gameOver && (
            <div className="mt-4 text-xl">Puntuación: {score}</div>
          )}
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="">
            <h2 className="text-xl font-bold mb-5">REGLAS</h2>
            <h2 className="mb-5">MOVIMINETO: A,W,S,D para moverte</h2>
            <h2 className="mb-5">
              Se puede mover con las flechas pero recomendamos awsd
            </h2>
            <h2 className="mb-5">Ten cuidado el mapa nunca es el mismo</h2>
          </div>
          <div className="mt-8">
            {Array.from({ length: Math.min(eatenCount, 8) }).map((_, index) => (
              <Image
                key={index}
                src={`/assets/img/ecu${index + 1}.png`}
                alt={`Ecu${index + 1}`}
                className="mx-2"
                width={Math.min(200, containerSize.width / 4)}
                height={Math.min(200, containerSize.width / 4)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
