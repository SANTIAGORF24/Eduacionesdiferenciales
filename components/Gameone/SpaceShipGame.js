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
  const [enemyImage, setEnemyImage] = useState("/assets/img/place1.png");
  const [playerImage, setPlayerImage] = useState("/assets/img/nave.png"); // Nueva imagen para el jugador

  useEffect(() => {
    if (score >= 5 && score < 10) {
      setEnemyImage("/assets/img/place2.png");
    } else if (score >= 10 && score < 15) {
      setEnemyImage("/assets/img/place3.png");
    } else if (score >= 15 && score < 20) {
      setEnemyImage("/assets/img/place4.png");
    } else if (score >= 20 && score < 25) {
      setEnemyImage("/assets/img/place5.png");
    } else if (score >= 25 && score < 30) {
      setEnemyImage("/assets/img/place6.png");
    } else if (score >= 30 && score < 35) {
      setEnemyImage("/assets/img/place7.png");
    } else if (score >= 35 && score < 40) {
      setEnemyImage("/assets/img/place8.png");
    } else if (score >= 40 && score < 45) {
      setEnemyImage("/assets/img/place9.png");
    } else if (score >= 45 && score < 50) {
      setEnemyImage("/assets/img/place10.png");
    } else if (score >= 50 && score < 55) {
      setEnemyImage("/assets/img/place11.png");
    } else if (score >= 55 && score < 60) {
      setEnemyImage("/assets/img/place12.png");
    } else if (score >= 60 && score < 65) {
      setEnemyImage("/assets/img/place13.png");
    } else if (score >= 65 && score < 70) {
      setEnemyImage("/assets/img/place14.png");
    } else if (score >= 70 && score < 75) {
      setEnemyImage("/assets/img/place15.png");
    } else if (score >= 75 && score < 80) {
      setEnemyImage("/assets/img/place16.png");
    } else if (score >= 80 && score < 85) {
      setEnemyImage("/assets/img/place17.png");
    } else if (score >= 85 && score < 90) {
      setEnemyImage("/assets/img/place18.png");
    } else if (score >= 90 && score < 95) {
      setEnemyImage("/assets/img/place19.png");
    } else if (score >= 95 && score < 100) {
      setEnemyImage("/assets/img/place20.png");
    } else if (score >= 100 && score < 105) {
      setEnemyImage("/assets/img/place21.png");
    } else if (score >= 105 && score < 110) {
      setEnemyImage("/assets/img/place22.png");
    } else if (score >= 110 && score < 115) {
      setEnemyImage("/assets/img/place23.png");
    } else if (score >= 115 && score < 120) {
      setEnemyImage("/assets/img/place24.png");
    } else if (score >= 120 && score < 125) {
      setEnemyImage("/assets/img/place25.png");
    } else if (score >= 125 && score < 130) {
      setEnemyImage("/assets/img/place26.png");
    }
  }, [score]);

  useEffect(() => {
    if (playerHealth <= -5) {
      setGameStarted(false);
      setGameOver(true);
    }
  }, [playerHealth]);

  useEffect(() => {
    if (score >= 135) {
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
          }, 2000);
        }
      };

      const checkCollisions = () => {
        // Colisiones entre balas del jugador y el enemigo
        bullets.forEach((bullet, bulletIndex) => {
          const enemyWidth = 50; // Ancho de la imagen del enemigo
          const enemyHeight = 50; // Alto de la imagen del enemigo

          // Calcula el área del hitbox del enemigo
          const enemyHitbox = {
            x: enemyPosition.x,
            y: enemyPosition.y,
            width: enemyWidth,
            height: enemyHeight,
          };

          // Calcula el área del hitbox de la bala del jugador
          const bulletHitbox = {
            x: bullet.x,
            y: bullet.y,
            width: 5, // Ancho de la bala del jugador
            height: 5, // Alto de la bala del jugador
          };

          // Comprueba la colisión entre la bala del jugador y el enemigo
          if (
            bulletHitbox.x < enemyHitbox.x + enemyHitbox.width &&
            bulletHitbox.x + bulletHitbox.width > enemyHitbox.x &&
            bulletHitbox.y < enemyHitbox.y + enemyHitbox.height &&
            bulletHitbox.y + bulletHitbox.height > enemyHitbox.y
          ) {
            // Incrementa la puntuación del jugador al golpear al enemigo
            setScore((prevScore) => prevScore + 1);
            // Elimina la bala del jugador
            setBullets((prevBullets) =>
              prevBullets.filter((_, index) => index !== bulletIndex)
            );
            // Reduce la salud del enemigo
            setEnemyHealth((prevHealth) => prevHealth - 1);
            // Comprueba si el enemigo ha sido derrotado
            if (enemyHealth === 0) {
              moveEnemy();
              setEnemyHealth(10);
            }
          }
          if (bullet.x >= 100) {
            setBullets((prevBullets) =>
              prevBullets.filter((_, index) => index !== bulletIndex)
            );
          }
        });

        // Colisiones entre balas del enemigo y el jugador
        enemyBullets.forEach((enemyBullet, enemyBulletIndex) => {
          const playerWidth = 20; // Ancho de la imagen del jugador
          const playerHeight = 20; // Alto de la imagen del jugador

          // Calcula el área del hitbox del jugador
          const playerHitbox = {
            x: playerPosition.x,
            y: playerPosition.y,
            width: playerWidth,
            height: playerHeight,
          };

          // Calcula el área del hitbox de la bala del enemigo
          const enemyBulletHitbox = {
            x: enemyBullet.x,
            y: enemyBullet.y,
            width: 5, // Ancho de la bala del enemigo
            height: 5, // Alto de la bala del enemigo
          };

          // Comprueba la colisión entre la bala del enemigo y el jugador
          if (
            enemyBulletHitbox.x < playerHitbox.x + playerHitbox.width &&
            enemyBulletHitbox.x + enemyBulletHitbox.width > playerHitbox.x &&
            enemyBulletHitbox.y < playerHitbox.y + playerHitbox.height &&
            enemyBulletHitbox.y + enemyBulletHitbox.height > playerHitbox.y
          ) {
            // Reduce la vida del jugador al ser golpeado por una bala del enemigo
            setPlayerHealth((prevHealth) => prevHealth - 1);
            // Elimina la bala del enemigo
            setEnemyBullets((prevBullets) =>
              prevBullets.filter((_, index) => index !== enemyBulletIndex)
            );
          }
        });

        // Resto del código de colisiones...
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
      }, 50);

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
    <div
      id="DiferencialSpace"
      className="w-full flex items-center justify-center py-10"
    >
      <div className="relative w-4/6 h-96 flex justify-center items-center bg-black">
        <div
          className="absolute w-full h-full"
          style={{
            backgroundImage: `url(/assets/img/cielo.jpg)`,
            backgroundSize: "cover",
          }}
        >
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
          <img
            src={playerImage}
            alt="Player"
            className="absolute w-20 h-auto"
            style={{
              left: `${playerPosition.x}%`,
              top: `${playerPosition.y}%`,
            }}
          />
          {bullets.map((bullet, index) => (
            <div
              key={index}
              className="absolute bg-yellow-400 w-2 h-2"
              style={{ left: `${bullet.x}%`, top: `${bullet.y}%` }}
            />
          ))}
          {enemyBullets.map((bullet, index) => (
            <div
              key={index}
              className="absolute bg-red-400 w-2 h-2"
              style={{ left: `${bullet.x}%`, top: `${bullet.y}%` }}
            />
          ))}
          {gameStarted && (
            <div className="absolute top-0 right-0 text-white m-4">
              Puntuación: {score}
            </div>
          )}
        </div>
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

        <h2 className="mb-5">Debes llegar a 135 puntos</h2>
        <h2 className="mb-5">Pierdes si te dan 10 veces</h2>
      </div>
    </div>
  );
};

export default SpaceShipGame;
