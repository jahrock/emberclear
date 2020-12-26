import { tracked } from '@glimmer/tracking';
import Service from '@ember/service';

import { inLocalStorage } from 'ember-tracked-local-storage';

export default class PlayerInfo extends Service {
  @inLocalStorage name = '';

  @tracked lastGameTried?: string;
}
