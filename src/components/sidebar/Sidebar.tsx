import React, { useEffect, useState } from "react";
import styles from "./sidebar.module.css";
import { AddPlayer } from "../modalWindows/AddPlayer";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [players, setPlayers] = useState<string[]>(() => {
    const stored = localStorage.getItem("players");
    return stored ? JSON.parse(stored) : [];
  });


  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  const handleAddPlayer = (name: string) => {
    if (name.trim()) {
      setPlayers((prev) => [...prev, name.trim()]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>Players</div>
      <ul className={styles.playerList}>
        {players.map((player, index) => (
          <li key={index} className={styles.playerItem}>
            {player}
          </li>
        ))}
      </ul>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => setIsModalOpen(true)}>
          + add player
        </button>
        <AddPlayer
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddPlayer}
        />
      </div>
    </div>
  );
};

export default Sidebar;
