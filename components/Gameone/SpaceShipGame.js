import React, { useState, useEffect } from "react";

const SpaceShipGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerPosition, setPlayerPosition] = useState({ x: 10, y: 50 });
  const [enemyPosition, setEnemyPosition] = useState({ x: 60, y: 50 });
  const [enemyHealth, setEnemyHealth] = useState(10);
  const [playerHealth, setPlayerHealth] = useState(5);
  const [bullets, setBullets] = useState([]);
  const [enemyBullets, setEnemyBullets] = useState([]);
  const [score, setScore] = useState(0);
  const [enemyDirection, setEnemyDirection] = useState(1);
  const [enemyDistance, setEnemyDistance] = useState(0);
  const [enemyMaxDistance, setEnemyMaxDistance] = useState(
    Math.floor(Math.random() * 50) + 10
  );
  const [enemySpeed, setEnemySpeed] = useState(1);
  const [canShootEnemyBullet, setCanShootEnemyBullet] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [enemyImage, setEnemyImage] = useState("/assets/img/ecu1.png");

  useEffect(() => {
    if (score >= 5 && score < 10) {
      setEnemyImage("/assets/img/ecu2.png");
    } else if (score >= 10 && score < 15) {
      setEnemyImage("/assets/img/ecu3.png");
    } else if (score >= 15 && score < 20) {
      setEnemyImage("/assets/img/ecu4.png");
    } else if (score >= 20 && score < 25) {
      setEnemyImage("/assets/img/ecu5.png");
    } else if (score >= 25 && score < 30) {
      setEnemyImage("/assets/img/ecu6.png");
    } else if (score >= 30 && score < 35) {
      setEnemyImage("/assets/img/ecu7.png");
    } else if (score >= 35 && score < 40) {
      setEnemyImage("/assets/img/ecu8.png");
    }
  }, [score]);

  useEffect(() => {
    if (score >= 50) {
      setGameStarted(false);
      setGameOver(true);
    }
  }, [score]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setPlayerHealth(5);
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setScore(0);
    setBullets([]);
    setEnemyBullets([]);
    setPlayerPosition({ x: 10, y: 50 });
    setEnemyPosition({ x: 60, y: 50 });
    setEnemyHealth(10);
    setEnemyDirection(1);
    setEnemyDistance(0);
    setEnemyMaxDistance(Math.floor(Math.random() * 50) + 10);
    setEnemySpeed(1);
    setPlayerHealth(5);
  };

  const playAgain = () => {
    resetGame();
    startGame();
  };

  useEffect(() => {
    if (gameStarted && !gameOver) {
      const handleKeyDown = (e) => {
        if (e.key === "w" && playerPosition.y > 0) {
          setPlayerPosition((prev) => ({ ...prev, y: prev.y - 5 }));
        } else if (e.key === "s" && playerPosition.y < 90) {
          setPlayerPosition((prev) => ({ ...prev, y: prev.y + 5 }));
        } else if (e.key === "ñ") {
          shootBullet();
        }
      };

      const shootBullet = () => {
        const newBullet = { x: playerPosition.x, y: playerPosition.y };
        setBullets((prevBullets) => [...prevBullets, newBullet]);
      };

      const moveBullets = () => {
        setBullets((prevBullets) =>
          prevBullets.map((bullet) => ({ ...bullet, x: bullet.x + 5 }))
        );
        setEnemyBullets((prevBullets) =>
          prevBullets.map((bullet) => ({ ...bullet, x: bullet.x - 5 }))
        );
      };

      const moveEnemy = () => {
        const newEnemyY = enemyPosition.y + enemyDirection * enemySpeed;
        if (newEnemyY > 0 && newEnemyY < 90) {
          setEnemyPosition((prev) => ({ ...prev, y: newEnemyY }));
          setEnemyDistance(
            (prevDistance) => prevDistance + Math.abs(enemySpeed)
          );
        } else {
          setEnemyDirection((prevDirection) => prevDirection * -1);
        }
        if (enemyDistance >= enemyMaxDistance) {
          setEnemyDirection((prevDirection) => prevDirection * -1);
          setEnemyMaxDistance(Math.floor(Math.random() * 50) + 10);
          setEnemyDistance(0);
        }
      };

      const shootEnemyBullet = () => {
        if (canShootEnemyBullet) {
          const newBullet = { x: enemyPosition.x, y: enemyPosition.y };
          setEnemyBullets((prevBullets) => [...prevBullets, newBullet]);
          setCanShootEnemyBullet(false);
          setTimeout(() => {
            setCanShootEnemyBullet(true);
          }, 3000);
        }
      };

      const checkCollisions = () => {
        bullets.forEach((bullet, index) => {
          if (
            bullet.x >= enemyPosition.x &&
            bullet.x <= enemyPosition.x + 5 &&
            bullet.y >= enemyPosition.y &&
            bullet.y <= enemyPosition.y + 5
          ) {
            setScore((prevScore) => prevScore + 1);
            setBullets((prevBullets) =>
              prevBullets.filter((_, i) => i !== index)
            );
            setEnemyHealth((prevHealth) => prevHealth - 1);
            if (enemyHealth === 0) {
              moveEnemy();
              setEnemyHealth(10);
            }
          }
          if (bullet.x >= 100) {
            setBullets((prevBullets) =>
              prevBullets.filter((_, i) => i !== index)
            );
          }
        });
        enemyBullets.forEach((bullet, index) => {
          if (
            bullet.x >= playerPosition.x &&
            bullet.x <= playerPosition.x + 5 &&
            bullet.y >= playerPosition.y &&
            bullet.y <= playerPosition.y + 5
          ) {
            setPlayerHealth((prevHealth) => prevHealth - 1);
            if (playerHealth === 0) {
              handleGameOver();
            }
          }
          if (bullet.x <= 0) {
            setEnemyBullets((prevBullets) =>
              prevBullets.filter((_, i) => i !== index)
            );
          }
        });
      };

      const handleGameOver = () => {
        setGameOver(true);
        clearInterval(gameLoop);
      };

      const gameLoop = setInterval(() => {
        moveBullets();
        checkCollisions();
        moveEnemy();
        shootEnemyBullet();
      }, 100);

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        clearInterval(gameLoop);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [
    gameStarted,
    playerPosition,
    bullets,
    enemyPosition,
    enemyHealth,
    enemyDirection,
    enemyDistance,
    enemyMaxDistance,
    enemySpeed,
    enemyBullets,
    canShootEnemyBullet,
    playerHealth,
    gameOver,
    score,
  ]);

  return (
    <div className="w-full flex items-center justify-center py-10">
      <div className="relative w-4/6 h-screen flex justify-center items-center bg-black">
        {!gameStarted && !gameOver && (
          <button
            onClick={startGame}
            className="absolute bg-blue-500 text-white px-4 py-2 rounded"
          >
            Jugar
          </button>
        )}
        {gameOver && (
          <div className="absolute bg-red-500 text-white px-4 py-2 rounded">
            {score < 50 ? (
              <React.Fragment>
                Perdiste
                <button
                  onClick={resetGame}
                  className="ml-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Jugar de nuevo
                </button>
              </React.Fragment>
            ) : (
              <div>
                ¡Has ganado!
                <button
                  onClick={playAgain}
                  className="ml-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Jugar de nuevo
                </button>
              </div>
            )}
          </div>
        )}
        {gameStarted && (
          <div className="absolute top-0 left-0 text-white m-4">
            Vida: {playerHealth}
          </div>
        )}
        <img
          src={enemyImage}
          alt="Enemy"
          className="absolute w-50 h-auto"
          style={{ left: `${enemyPosition.x}%`, top: `${enemyPosition.y}%` }}
        />
        <div
          className="absolute bg-white w-5 h-20"
          style={{ left: `${playerPosition.x}%`, top: `${playerPosition.y}%` }}
        />
        {bullets.map((bullet, index) => (
          <div
            key={index}
            className="absolute bg-yellow-400 w-1 h-1"
            style={{ left: `${bullet.x}%`, top: `${bullet.y}%` }}
          />
        ))}
        {enemyBullets.map((bullet, index) => (
          <div
            key={index}
            className="absolute bg-green-400 w-1 h-1"
            style={{ left: `${bullet.x}%`, top: `${bullet.y}%` }}
          />
        ))}
        {gameStarted && (
          <div className="absolute top-0 right-0 text-white m-4">
            Puntuación: {score}
          </div>
        )}
      </div>
      <div className="px-20">
        <h2 className="text-3xl font-bold text-orange-500 mb-20">
          DIFERENCIALSPACE
        </h2>

        <h2 className="text-xl font-bold mb-5">REGLAS</h2>
        <h2 className="mb-5">MOVIMINETO: W y S para moverte verticalmente</h2>
        <h2 className="mb-5">DISPARO: Ñ para disparar</h2>
        <h2 className="mb-5">
          El bloqueo de mayúsculas debe estar desactivado
        </h2>

        <h2 className="mb-5">Debes llegar a 50 puntos</h2>
      </div>
    </div>
  );
};

export default SpaceShipGame;
