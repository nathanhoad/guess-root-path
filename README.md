# Guess Root Path

Guess the root path of a project.

## Usage

```javascript
const guessRootPath = require('guess-root-path);

const APP_PATH = guessRootPath(); 
// -> Something like /Users/testuser/Projects/cat-based-social-network
//     or null if it cannot be resolved 
```