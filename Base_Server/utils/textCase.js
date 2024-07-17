function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

function toKebabCase(str) {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]+|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');
}

function toPascalCase(str) {
  return str
    .replace(/(?:^|\s|_)(.)/g, (match, chr) => chr.toUpperCase());
}

module.exports = {
  toCamelCase,
  toKebabCase,
  toPascalCase
}