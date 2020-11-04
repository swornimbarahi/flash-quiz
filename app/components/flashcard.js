import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';

export default class FlashcardComponent extends Component {
  @tracked face_down = false;

  get cardClassName() {
    return this.face_down ? 'flip-card' : 'flip-card flip-card--clicked'
  }

  @action turn() {
    console.log(this.face_down);
    this.face_down = !this.face_down;
  }
}