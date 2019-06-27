import * as serviceWorker from './serviceWorker';

import state from './redux/state';
import { rerenderEntierTree } from './render';

rerenderEntierTree(state);

serviceWorker.unregister();
