export function mergeDeep(target, source) {
  const isObject = obj => obj && typeof obj === 'object';
  if (!isObject(target) || !isObject(source)) {
    return source;
  }
  Object.keys(source).forEach(key => {
    const targetValue = target[key];
    const sourceValue = source[key];
    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });
  return target;
}
export const mergeByProperty = (target, source, prop) => {
  if (!target) {
    target = [];
  }
  source.forEach(sourceElement => {
    const targetElement = target.find(item => sourceElement[prop] === item[prop]);
    targetElement ? Object.assign(targetElement, sourceElement) : target.push(sourceElement);
  });
  return target;
};
// istanbul ignore next
export const isObject = obj => {
  if (typeof obj === 'object' && obj !== null) {
    if (typeof Object.getPrototypeOf === 'function') {
      const prototype = Object.getPrototypeOf(obj);
      return prototype === Object.prototype || prototype === null;
    }
    return Object.prototype.toString.call(obj) === '[object Object]';
  }
  return false;
};
export const merge = function () {
  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }
  return objects.reduce((result, current) => {
    Object.keys(current).forEach(key => {
      if (Array.isArray(result[key]) && Array.isArray(current[key])) {
        result[key] = merge.options.mergeArrays ? Array.from(new Set(result[key].concat(current[key]))) : current[key];
      } else if (isObject(result[key]) && isObject(current[key])) {
        result[key] = merge(result[key], current[key]);
      } else {
        result[key] = current[key];
      }
    });
    return result;
  }, {});
};
const defaultOptions = {
  mergeArrays: true
};
merge.options = defaultOptions;
merge.withOptions = function (options) {
  merge.options = {
    mergeArrays: true,
    ...options
  };
  for (var _len2 = arguments.length, objects = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    objects[_key2 - 1] = arguments[_key2];
  }
  const result = merge(...objects);
  merge.options = defaultOptions;
  return result;
};
export default merge;
//# sourceMappingURL=MergeObject.js.map