import React, { useState, useEffect } from 'react';
import { propTypes, defaultProps } from './props';
import Header from '../Header';
import ContentBlock from '../ContentBlock';
import { AppWrap } from './styles';

const API_URL = 'https://api.github.com';
const RESOURS_MAP = {
  USERS: '/users',
  REPOSITORIES: '/repositories',
}
const SEARCH_PREFIX = '/search';
const PARAMETERS_MAP = {
  QUALIFIER: 'q=',
  PER_PAGE: 'per_page=',
  PAGE: 'page=',
}

const getURL = ({ inputValue, page, perPage }) => (''.concat(
  API_URL,
  SEARCH_PREFIX,
  RESOURS_MAP.USERS,
  '?',
  PARAMETERS_MAP.QUALIFIER,
  inputValue || 'type%3Auser',
  '&',
  PARAMETERS_MAP.PER_PAGE,
  perPage || 10,
  page > 0 && page !== 1
    ? `&${PARAMETERS_MAP.PAGE}${page}`
    : ''
));

const startURL = getURL({});

const VMain = ({
  isLoading,
  localData,
  // message,
  fetchLocalData,
}) => {
  const { items, total } = localData;

  const [url, setUrl] = useState(startURL);
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [history, setHistory] = useState([]);

  const setValue = (e) => {
    setInputValue(e.target.value);
  }

  const addHistoryItem = (keyWord) => {
    if (keyWord) {
      const newHistory = history.length < 5
        ? [...new Set([keyWord, ...history])]
        : [...new Set([keyWord, ...history])].slice(0, 5)

      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
      setHistory(newHistory);
    }
    return;
  }

  const changePerPage = (e) => {
    setPerPage(Number(e.target.value))
  };

  const setPrevPage = () => page > 1 && setPage(page - 1);

  const setNextPage = () => page < totalPages && setPage(page + 1);

  useEffect(() => {
    const oldHistory = localStorage.getItem('searchHistory');

    if (oldHistory && oldHistory.length) {
      setHistory(JSON.parse(oldHistory));
    }
  }, []);

  useEffect(() => {
    if (total) {
      setPage(1);
      setTotalPages(Math.ceil(total / perPage));
    } else {
      setPage(0);
      setTotalPages(0);
    }
  }, [total]);

  useEffect(() => {
    addHistoryItem(inputValue);
    fetchLocalData({ url });
  }, [url]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newURL = getURL({ inputValue, page, perPage });
      setUrl(newURL);
    }, 1000);

    return () => clearInterval(interval);
  }, [inputValue, page, perPage]);

  return (
    <AppWrap>
      <Header />
      <ContentBlock
        history={history}
        value={inputValue}
        cardList={items}
        onChange={setValue}
        total={total}
        setPrevPage={setPrevPage}
        setNextPage={setNextPage}
        page={page}
        perPage={perPage}
        totalPages={totalPages}
        changePerPage={changePerPage}
        isLoading={isLoading}
      />
      {/* {(
        message
          ? <div>Modal window</div>
          : null
      )} */}
    </AppWrap>
  )
};

VMain.propTypes = propTypes;
VMain.defaultProps = defaultProps;

export default VMain;
