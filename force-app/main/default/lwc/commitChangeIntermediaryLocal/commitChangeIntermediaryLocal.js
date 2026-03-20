import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class CommitChangeIntermediaryLocal extends NavigationMixin(LightningElement) {
    @api recordId;

    @api invoke() {
        window.location.assign(`https://test.devops.copado.com/commit/${this.recordId}`);
    }
}