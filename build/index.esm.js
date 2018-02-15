const addToHistoryN = n => (value, old) => [value, ...old.filter(h => h !== value).slice(0, n - 1)];

const addToHistory = addToHistoryN(10);

export { addToHistoryN, addToHistory };
//# sourceMappingURL=index.esm.js.map
