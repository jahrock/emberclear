import Application from '@ember/application';

import config from 'dummy/config/environment';
import defineModifier from 'ember-concurrency-test-waiter/define-modifier';
import loadInitializers from 'ember-load-initializers';
import Resolver from 'ember-resolver';

defineModifier();

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
