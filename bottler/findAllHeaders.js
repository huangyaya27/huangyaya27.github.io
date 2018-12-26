const findAllHeaders = (sourceString, aggregator = {}) => {
  const arr = /(#+)(.*)/.exec(sourceString);

  if (arr === null) return aggregator;

  const newString = sourceString.slice(arr.index + arr[0].length);

  const headerType = arr[1]; // # or ## etc
  const headerValue = arr[2].trim();
  const newAgg = Object.assign({}, aggregator);

  if (headerType in aggregator) {
    newAgg[headerType].push(headerValue);
  } else {
    newAgg[headerType] = [headerValue];
  }

  return findAllHeaders(newString, newAgg);
};

module.exports = findAllHeaders;
