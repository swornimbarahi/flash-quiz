import Application from 'flash-quiz/app';
import config from 'flash-quiz/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
