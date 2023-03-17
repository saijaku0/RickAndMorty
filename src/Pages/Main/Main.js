import React, { Fragment, useEffect, useState, useCallback } from "react";
import Container from "../../components/UI/Container/Container";
import Input from "../../components/Search/Input";
import CardItem from "../../components/Card/CardItem";
import { getCharacters } from "../../Context/getCharacter";
import { transformCharacterData } from "../../Context/utills/transformCharacterData";
import Pagination from "../../components/Paginantion/Paginantion";

import mainImgs from "../../assets/header-img.png";
import "./Main.scss";

export default function Main() {
  const [search, setSearch] = useState("");
  const [charactersList, setCharactersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const api = `?page=${currentPage}&name=${search}`;

  const fetchData = useCallback(async () => {
    try {
      const data = await getCharacters(api);
      const transformedData = transformCharacterData(data.results);
      setCharactersList(transformedData);
      setTotalPages(data.info.pages);
    } catch (error) {
      console.log(error);
    }
  }, [api]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <Fragment>
      <div className="main-baner">
        <img src={mainImgs} alt="Rick and Morty" />
      </div>

      <main className="main-content">
        <section className="search-section" id="search-section">
          <Container>
            <Input setSearch={setSearch} />
          </Container>
        </section>
        <section className="card-section" id="card-section">
          <Container>
            {charactersList.length > 0 ? (
              <Fragment>
                <CardItem page="/" charactersList={charactersList} />
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  handlePreviousPage={handlePreviousPage}
                  handleNextPage={handleNextPage}
                />
              </Fragment>
            ) : (
              <p>No characters found</p>
            )}
          </Container>
        </section>
      </main>
    </Fragment>
  );
}
