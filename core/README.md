# react-native-core

base UI core for react native

## Installation

```sh
npm install react-native-core
```

## Usage

```js
import { fs, vs, useTranslation } from 'react-native-core-ui';

// ...
const t = useTranslation();
// ...
<Text style={{fontSize: fs(16), height: vs(20)}}>{t('en')}</Text>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
