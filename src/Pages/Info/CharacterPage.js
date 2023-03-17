import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { getCharacters } from "../../Context/getCharacter";
import Button from "../../components/UI/Button/Button";
import Container from "../../components/UI/Container/Container";

import "./CharacterPage.scss";
import CharacterPageList from "./CharacterPageList";

export default function CharacterPage() {
  const { id } = useParams();
  const [charactersList, setCharactersList] = useState([]);

  const api = `${id}`;

  const fetchData = useCallback(async () => {
    try {
      const data = await getCharacters(api);
      setCharactersList(data);
    } catch (error) {
      console.log(error);
    }
  }, [api]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="character-page">
      <header className="character-page-header">
        <Button className="character-page-header-button">
          <Link className="character-page-link" to="/">
            Go back
          </Link>
        </Button>
      </header>
      <Container>
        <main className="character-page-main">
          <header className="character-page-main-header">
            <div className="character-page-img">
              <img src={charactersList.image} alt={charactersList.name} />
            </div>
            <h1>{charactersList.name}</h1>
          </header>
          <div className="character-page-label">
            <label>Informations</label>
          </div>
          <div className="character-page-list">
            <CharacterPageList character={charactersList} />
          </div>
        </main>
      </Container>
    </div>
  );
}
